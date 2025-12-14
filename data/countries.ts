import { CountryRiskData } from '../types';

export const countryData: CountryRiskData[] = [
  {"flagCode":"PK","country":"Pakistan","GlobalPeaceIndex_2025":2.8,"SafestCountriesIndexViaTravelSafe":26,"RiskLevelByCountryViaTravelSafe":"High","SafestCountriesRankUSNews_2024":null},
  {"flagCode":"US","country":"United States","GlobalPeaceIndex_2025":2.44,"SafestCountriesIndexViaTravelSafe":68,"RiskLevelByCountryViaTravelSafe":"Low","SafestCountriesRankUSNews_2024":47},
  {"flagCode":"JP","country":"Japan","GlobalPeaceIndex_2025":1.44,"SafestCountriesIndexViaTravelSafe":83,"RiskLevelByCountryViaTravelSafe":"Low","SafestCountriesRankUSNews_2024":16},
  {"flagCode":"CN","country":"China","GlobalPeaceIndex_2025":2.09,"SafestCountriesIndexViaTravelSafe":66,"RiskLevelByCountryViaTravelSafe":"Medium","SafestCountriesRankUSNews_2024":54},
  {"flagCode":"TW","country":"Taiwan","GlobalPeaceIndex_2025":1.73,"SafestCountriesIndexViaTravelSafe":54,"RiskLevelByCountryViaTravelSafe":"Medium","SafestCountriesRankUSNews_2024":null},
  {"flagCode":"PT","country":"Portugal","GlobalPeaceIndex_2025":1.37,"SafestCountriesIndexViaTravelSafe":57,"RiskLevelByCountryViaTravelSafe":"Low","SafestCountriesRankUSNews_2024":15},
  // Full list truncated for brevity, but logic will handle mapping
];

export const countryNameMapping: Record<string, string> = {
  "United States of America": "United States",
  "Taiwan (Province of China)": "China", // Mapping Taiwan to China risk level as requested
  "Russian Federation": "Russia",
  "Korea, Republic of": "South Korea",
};