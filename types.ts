export enum Language {
  ZH_TW = 'zh-hant',
  ZH_CN = 'zh-hans',
  PT = 'pt'
}

export interface CountryRiskData {
  flagCode: string;
  country: string;
  GlobalPeaceIndex_2025: number | null;
  SafestCountriesIndexViaTravelSafe: number | null;
  RiskLevelByCountryViaTravelSafe: string;
  SafestCountriesRankUSNews_2024: number | null;
}

export interface Translation {
  title: string;
  welcomeTitle: string;
  subtitle: string;
  scrollDown: string;
  menu: {
    special: string;
    weekly: string;
    quiz: string;
    emergency: string;
    sos: string;
    trip: string;
    difficulty: string;
    resources: string;
    map: string;
    podcast: string;
    video: string;
    download: string;
    zones: string;
    consular: string;
    rights: string;
    schedule: string;
  };
  globe: {
    loading: string;
    low: string;
    medium: string;
    high: string;
    safe: string;
    noData: string;
    source: string;
  };
  features: {
    title: string;
    emergency: { title: string; desc: string; };
    consular: { title: string; desc: string; };
    rights: { title: string; desc: string; };
    schedule: { title: string; desc: string; };
  };
  notifications: {
    title: string;
    list: Array<{ date: string; content: string; }>;
  };
  footer: {
    links: string;
    linkNames: {
      mfaChina: string;
      mfaPortugal: string;
      consularChina: string;
      commissionMacau: string;
      govMacau: string;
      dsiMacau: string;
      school: string;
    };
    contact: string;
    contactText: string;
    copyright: string;
  };
  pages: {
    emergency: {
      title: string;
      tabs: {
        hotlines: string;
        guides: string;
        antifraud: string;
      };
      hotlines: {
        globalTitle: string;
        macaoTitle: string;
        localTitle: string;
        china12308: string;
        macaoCommissioner: string;
        macaoTourism: string;
        macaoPSP: string;
        macaoDSI: string;
        localPolice: string;
        desc12308: string;
      };
      guides: {
        lostDoc: { title: string; steps: string[] };
        arrested: { title: string; steps: string[] };
        injury: { title: string; steps: string[] };
        missing: { title: string; steps: string[] };
        rights: { canDo: string[]; cannotDo: string[] };
      };
      antifraud: {
        sixDontsTitle: string;
        sixDonts: string[];
        commonScamsTitle: string;
        scams: Array<{ name: string; desc: string }>;
        tools: string;
      };
      back: string;
    };
    consular: {
      title: string;
      definition: {
        title: string;
        text: string;
      };
      target: {
        title: string;
        text: string;
      };
      scope: {
        title: string;
        canTitle: string;
        canList: string[];
        cannotTitle: string;
        cannotList: string[];
      };
      tips: {
        title: string;
        list: Array<{ title: string; content: string }>;
      };
      back: string;
    };
    rights: {
      title: string;
      subtitle: string;
      intro: string;
      cards: Array<{
        icon: string;
        title: string;
        desc: string;
        details: string[];
      }>;
      nationality: {
        title: string;
        content: string;
        note: string;
      };
      back: string;
    };
    schedule: {
      title: string;
      subtitle: string;
      filters: {
        all: string;
        seminar: string;
        competition: string;
        community: string;
      };
      status: {
        boarding: string;
        inflight: string;
        landed: string;
      };
      events: Array<{
        id: number;
        date: string;
        time: string;
        title: string;
        location: string;
        type: 'seminar' | 'competition' | 'community';
        status: 'boarding' | 'inflight' | 'landed';
        desc: string;
      }>;
      back: string;
    };
    quiz: {
      title: string;
      missionTitle: string;
      missionDesc: string;
      startBtn: string;
      questionCount: string;
      questions: Array<{
        id: number;
        scenario: string;
        options: Array<{ text: string; isCorrect: boolean; feedback: string }>;
      }>;
      results: {
        perfect: { title: string; desc: string };
        good: { title: string; desc: string };
        fail: { title: string; desc: string };
        retry: string;
        back: string;
      }
    };
    safetyQuiz: {
      title: string;
      intro: {
        welcome: string;
        desc: string;
        startBtn: string;
      };
      categories: {
        fraud: string;
        prep: string;
        legal: string;
        emergency: string;
      };
      questions: Array<{
        id: number;
        category: 'fraud' | 'prep' | 'legal' | 'emergency';
        question: string;
        options: Array<{ text: string; score: number }>;
      }>;
      result: {
        analyzing: string;
        title: string;
        scoreText: string;
        advice: {
          high: string;
          medium: string;
          low: string;
        };
        retry: string;
        home: string;
      }
    };
    trip: {
      title: string;
      subtitle: string;
      status: {
        charging: string;
        ready: string;
      };
      modules: {
        docs: {
          title: string;
          items: Array<{ id: string; text: string }>;
        };
        health: {
          title: string;
          items: Array<{ id: string; text: string }>;
        };
        comm: {
          title: string;
          items: Array<{ id: string; text: string }>;
        };
        law: {
          title: string;
          items: Array<{ id: string; text: string }>;
        };
      };
      back: string;
    };
    riskMap: {
      title: string;
      searchPlaceholder: string;
      stats: {
        safetyIndex: string;
        peaceIndex: string;
        riskLevel: string;
        globalRank: string;
      };
      levels: {
        low: string;
        medium: string;
        high: string;
        unknown: string;
      };
      noSelection: string;
      ranking: string;
    };
    podcast: {
      title: string;
      subtitle: string;
      status: {
        offline: string;
        broadcasting: string;
      };
      listTitle: string;
      controls: {
        play: string;
        pause: string;
        next: string;
        prev: string;
      };
      episodes: Array<{
        id: string;
        title: string;
        duration: string;
        freq: string;
        desc: string;
      }>;
    };
    video: {
      title: string;
      subtitle: string;
      viewerCount: string;
      bandwidth: string;
      playBtn: string;
      listTitle: string;
      categories: {
        doc: string;
        fraud: string;
        emergency: string;
      };
      videos: Array<{
        id: string;
        title: string;
        category: 'doc' | 'fraud' | 'emergency';
        length: string;
        views: string;
        desc: string;
        thumbnailColor: string;
      }>;
    };
    difficulty: {
      title: string;
      subtitle: string;
      systemStatus: string;
      protocolLabel: string;
      categories: Array<{
        id: string;
        icon: string;
        label: string;
        color: string;
        desc: string;
        steps: string[];
        action: string;
      }>;
    };
    download: {
      title: string;
      subtitle: string;
      storage: string;
      speed: string;
      encryption: string;
      filterAll: string;
      items: Array<{
        id: string;
        title: string;
        type: 'manual' | 'card' | 'legal';
        size: string;
        format: string;
        icon: string;
        desc: string;
        color: string;
      }>;
    }
  }
}