import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { Language, CountryRiskData } from '../types';
import { translations } from '../data/locales';
import { countryNameMapping } from '../data/countries';

interface GlobeProps {
  lang: Language;
  interactive?: boolean;
  onSelectCountry?: (country: CountryRiskData | null) => void;
  countryData?: CountryRiskData[];
  selectedCountryName?: string | null;
}

export const Globe: React.FC<GlobeProps> = ({ lang, interactive = false, onSelectCountry, countryData, selectedCountryName }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [loading, setLoading] = useState(true);
  const t = translations[lang];
  
  // Ref to hold the current rotation to prevent reset on re-render
  const rotationRef = useRef<[number, number, number]>([-30, -20, 0]);
  const timerRef = useRef<d3.Timer | null>(null);

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'High': return '#ef4444'; // red-500
      case 'Medium': return '#eab308'; // yellow-500
      case 'Low': return '#22c55e'; // green-500
      default: return 'rgba(255, 255, 255, 0.1)';
    }
  };

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('*').remove();

    const projection = d3.geoOrthographic()
      .scale(Math.min(width, height) / 2.5)
      .translate([width / 2, height / 2])
      .rotate(rotationRef.current)
      .precision(0.1);

    const path = d3.geoPath(projection);
    const globeGroup = svg.append('g');

    // Glow Effect Definition
    const defs = svg.append("defs");
    const glowFilter = defs.append("filter")
      .attr("id", "glow");
    glowFilter.append("feGaussianBlur")
      .attr("stdDeviation", "2.5")
      .attr("result", "coloredBlur");
    const feMerge = glowFilter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // Graticule
    const graticule = d3.geoGraticule();
    globeGroup.append("path")
      .datum(graticule)
      .attr("class", "graticule")
      .attr("d", path)
      .attr("fill", "none")
      .attr("stroke", "rgba(6, 182, 212, 0.2)") // Cyan tint for tech feel
      .attr("stroke-width", 0.3)
      .attr("stroke-dasharray", "2,2");

    // Load GeoJSON
    d3.json('https://unpkg.com/world-atlas@2/countries-110m.json').then((worldData: any) => {
      setLoading(false);
      const countries = (topojson.feature(worldData, worldData.objects.countries as any) as any).features;

      // Find data for a country feature
      const getCountryData = (feature: any) => {
        if (!countryData) return null;
        const name = feature.properties.name;
        const mappedName = countryNameMapping[name] || name;
        return countryData.find(c => c.country === mappedName);
      };

      // Render Countries
      const paths = globeGroup.selectAll(".country")
        .data(countries)
        .enter().append("path")
        .attr("class", "country")
        .attr("d", path)
        .attr("fill", (d: any) => {
          if (!interactive || !countryData) return "rgba(255, 255, 255, 0.05)";
          const data = getCountryData(d);
          return data ? getRiskColor(data.RiskLevelByCountryViaTravelSafe) : "rgba(255, 255, 255, 0.05)";
        })
        .attr("stroke", (d: any) => {
           if (interactive && selectedCountryName) {
             const data = getCountryData(d);
             if (data && data.country === selectedCountryName) return "#FFD700"; // Gold stroke for selected
           }
           return "rgba(255, 255, 255, 0.1)";
        })
        .attr("stroke-width", (d: any) => {
           if (interactive && selectedCountryName) {
             const data = getCountryData(d);
             if (data && data.country === selectedCountryName) return 1.5; 
           }
           return 0.2;
        })
        .style("cursor", interactive ? "pointer" : "default")
        .style("opacity", (d: any) => {
           // Dim non-selected countries if one is selected
           if (interactive && selectedCountryName) {
             const data = getCountryData(d);
             return data && data.country === selectedCountryName ? 1 : 0.3;
           }
           return 0.8;
        })
        .on("click", (event, d: any) => {
          if (interactive && onSelectCountry) {
            const data = getCountryData(d);
            onSelectCountry(data || null);
            
            // Auto rotate to selected country
            const centroid = d3.geoCentroid(d);
            const rotate = projection.rotate();
            const currentRotate = [rotate[0], rotate[1], rotate[2]];
            const targetRotate = [-centroid[0], -centroid[1], 0];
            
            d3.transition()
              .duration(1000)
              .tween("rotate", () => {
                const r = d3.interpolate(currentRotate, targetRotate);
                return (t) => {
                  projection.rotate(r(t) as [number, number, number]);
                  rotationRef.current = projection.rotate();
                  globeGroup.selectAll("path").attr("d", path);
                };
              });
          }
        })
        .on("mouseover", function() {
          if(interactive) d3.select(this).style("opacity", 1);
        })
        .on("mouseout", function(event, d: any) {
           if(interactive && selectedCountryName) {
              const data = getCountryData(d);
              if (data && data.country !== selectedCountryName) {
                 d3.select(this).style("opacity", 0.3);
              }
           }
        });

      // Globe Outline (Atmosphere)
      globeGroup.append("path")
        .datum({type: "Sphere"})
        .attr("class", "sphere-outline")
        .attr("d", path)
        .attr("fill", "none")
        .attr("stroke", "rgba(6, 182, 212, 0.5)")
        .attr("stroke-width", 1)
        .style("filter", "url(#glow)");

      // Rotation Logic
      if (!selectedCountryName) { // Stop auto-rotation if a country is selected
        timerRef.current = d3.timer(() => {
          const rotate = projection.rotate();
          const k = 0.2;
          projection.rotate([rotate[0] + k, rotate[1], rotate[2]]);
          rotationRef.current = projection.rotate();
          globeGroup.selectAll("path").attr("d", path);
        });
      } else {
         // Even if paused, we need to ensure the projection uses the current rotation ref 
         // (which might have been updated by the click transition)
         projection.rotate(rotationRef.current);
         globeGroup.selectAll("path").attr("d", path);
      }

      return () => {
        if (timerRef.current) timerRef.current.stop();
      };

    }).catch(err => {
        console.error("Globe load error", err);
        setLoading(false);
    });
    
    return () => {
        if (timerRef.current) timerRef.current.stop();
    };
    
  }, [lang, interactive, countryData, selectedCountryName]);

  return (
    <div id="globe-container" ref={containerRef} className={`fixed inset-0 w-full h-full z-0 ${interactive ? '' : 'pointer-events-none'}`}>
      <svg ref={svgRef} className="w-full h-full block"></svg>
      
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/60 backdrop-blur-sm text-white transition-opacity duration-500">
          <div className="loader mb-4"></div>
          <p>{t.globe.loading}</p>
        </div>
      )}
    </div>
  );
};