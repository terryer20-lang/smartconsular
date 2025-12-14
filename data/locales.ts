import { Language, Translation } from '../types';

export const translations: Record<Language, Translation> = {
  [Language.ZH_TW]: {
    // ... existing translations ...
    title: "智保同行：領事保護知識隨身帶",
    welcomeTitle: "智能領事保護與協助",
    subtitle: "您的海外安全守護者",
    scrollDown: "下滑探索",
    menu: {
      special: "特色活動",
      weekly: "「領保之星」每週主題挑戰賽",
      quiz: "「海外旅行安全指數」小測試",
      emergency: "緊急服務",
      sos: "緊急求助專區",
      trip: "「我即將出國」專區",
      difficulty: "「我在海外遇到困難」專區",
      resources: "資訊資源",
      map: "全球風險地圖",
      podcast: "播客集",
      video: "一分鐘短片集",
      download: "資源專區",
      zones: "專區服務",
      consular: "領事保護與協助專區",
      rights: "居民身份權利專區",
      schedule: "活動日程"
    },
    // ... globe, features, notifications, footer ...
    globe: {
      loading: "正在載入全球地圖...",
      low: "安全國家",
      medium: "中等風險",
      high: "高風險國家",
      safe: "低",
      noData: "數據缺失",
      source: "資料來源: Safest Countries in the World 2025"
    },
    features: {
      title: "專區服務",
      emergency: { title: "緊急求助專區", desc: "24小時緊急求助聯繫方式" },
      consular: { title: "領事保護與協助專區", desc: "了解您在海外的權利" },
      rights: { title: "居民身份權利專區", desc: "維護自身合法權益" },
      schedule: { title: "活動日程", desc: "最新宣傳活動安排" }
    },
    notifications: {
      title: "最新通知",
      list: [
        { date: "2025-12-15", content: "「領事保護知識競賽」將於下月舉行，歡迎各位同學踴躍報名參加。" },
        { date: "2025-12-10", content: "新增「海外旅行安全指南」電子書下載，請前往資源專區查看。" },
        { date: "2025-12-05", content: "緊急求助專區更新了最新的領事保護熱線電話，請各位注意查閱。" },
        { date: "2025-12-01", content: "網站新增葡萄牙語界面，為葡語使用者提供更便捷的服務。" }
      ]
    },
    footer: {
      links: "相關連結",
      linkNames: {
        mfaChina: "中華人民共和國外交部",
        mfaPortugal: "葡萄牙共和國外交部",
        consularChina: "中國領事服務網",
        commissionMacau: "外交部駐澳門特派員公署",
        govMacau: "澳門特別行政區政府入口網站",
        dsiMacau: "澳門特別行政區政府身份證明局",
        school: "澳門中葡職業技術學校"
      },
      contact: "聯絡我們",
      contactText: "本網站由一群中學生自主開發，旨在增進公眾對領事保護、協助服務及居民身份權利的認識與關注。由於團隊成員學業繁忙，網站信息將不定期更新與維護，如有不便，敬請理解。\n\n我們誠摯歡迎您對網站用戶界面提出宝貴意見，若發現信息有誤也歡迎指正。",
      copyright: "© 2025-2026 中葡職業技術學校高三翻譯宣傳領事保護與協助和居民權利小組（Escudos de Quíron） 版權所有"
    },
    pages: {
      // ... existing pages ...
      emergency: {
        title: "緊急求助專區",
        tabs: {
          hotlines: "緊急熱線",
          guides: "應急指引",
          antifraud: "防騙預警"
        },
        hotlines: {
          globalTitle: "中華人民共和國外交部設立的全球領事保護與服務應急熱線",
          macaoTitle: "澳門居民專用",
          localTitle: "當地緊急求助",
          china12308: "外交部全球領事保護與服務應急熱線",
          macaoCommissioner: "中華人民共和國外交部駐澳門特別行政區特派員公署領事保護與協助電話",
          macaoTourism: "澳門特別行政區政府旅遊局旅遊危機處理辦公室熱線（24小時）",
          macaoPSP: "澳門特別行政區政府治安警察局24小時海外緊急求助熱線",
          macaoDSI: "澳門特別行政區政府身份證明局（辦公時間）",
          localPolice: "當地報警/急救電話",
          desc12308: "24小時領事保護與服務，提供應急諮詢與協助。"
        },
        guides: {
          lostDoc: { 
            title: "證件遺失", 
            steps: [
              "向當地警方報案，取得報案證明。",
              "澳門居民可登錄「澳門一戶通」或身份證明局網站申請「海外遺失旅行證件求助」。",
              "或向就近的中国驻外使领馆申请补发旅行证件。",
              "準備照片及身份證明文件複印本以便辦理。"
            ] 
          },
          arrested: { 
            title: "被拘留/逮捕", 
            steps: [
              "保持冷靜，您有權要求聯繫中國駐外使領館。",
              "領事官員可進行探視，瞭解情況，但不能干預當地司法程式。",
              "領事官員可提供當地律師名單，費用需自理。",
              "若受到不公正對待，應及時向領事官員反映。"
            ] 
          },
          injury: { 
            title: "受傷/重病", 
            steps: [
              "立即撥打當地急救電話。",
              "聯繫中國駐外使領館，可協助通知國內親屬。",
              "醫療費用通常需自理或由保險公司承擔。",
              "保存好醫療報告和單據。"
            ] 
          },
          missing: { 
            title: "親友失踪", 
            steps: [
              "嘗試多種途徑聯繫（電話、社交軟體、同行人員）。",
              "向當地警方報案。",
              "聯繫中國駐外使領館提供協助。",
              "提供失踪者詳細資訊（護照號、外貌特徵、行程）。"
            ] 
          },
          rights: {
            canDo: ["推薦律師、翻譯、醫生名單", "協助與國內親屬聯繫", "補發旅行證件", "發生重大突發事件時協助撤離"],
            cannotDo: ["干預所在國司法程式", "代繳罰款、醫療費、律師費", "充當擔保人", "提供優於當地人的待遇"]
          }
        },
        antifraud: {
          sixDontsTitle: "牢記「六個凡是」",
          sixDonts: [
            "凡是自稱駐外使領館、公檢法要求匯款的，都是詐騙！",
            "凡是要求繳納「保證金」或將資金轉入「安全賬戶」的，都是詐騙！",
            "凡是宣稱「內幕消息」、「穩賺不賠」的投資理财，都是詐騙！",
            "凡是低價換匯，要求先行轉賬的，都是詐騙！",
            "凡是自稱使領館人員推薦指定機構辦理業務的，都是詐騙！",
            "凡是熟人通過社交平臺要求轉賬，務必電話核實！"
          ],
          commonScamsTitle: "海外高發案件類型",
          scams: [
            { name: "冒充公檢法", desc: "謊稱涉嫌洗錢、藏毒，要求資金清查。" },
            { name: "虛擬綁架", desc: "誘導受害人切斷聯繫，向家屬勒索贖金。" },
            { name: "換匯詐騙", desc: "私下換匯，轉賬後被拉黑或收到赃款。" },
            { name: "殺豬盤", desc: "網上交友建立感情，誘導投資賭博。" }
          ],
          tools: "建議下載「國家反詐中心」APP 及關注「領事直通車」微信公眾號。"
        },
        back: "返回主頁"
      },
      consular: {
        title: "領事保護與協助專區",
        definition: {
          title: "什麼是領事保護？",
          text: "領事保護與協助是指在國外的中國公民、法人、非法人組織正當權益被侵犯或者需要幫助時，中國駐外外交機構依法維護其正當權益及提供協助的行為。"
        },
        target: {
          title: "誰可以獲得領事保護？",
          text: "凡是依照《中華人民共和國國籍法》具有中國國籍者（包括內地居民、香港、澳門和臺灣同胞），無論是定居國外還是臨時出國，都是中國政府領事保護與協助的對象。"
        },
        scope: {
          title: "領事官員的職責範圍",
          canTitle: "領事官員【可以】做什麼",
          canList: [
            "推薦當地律師、翻譯和醫生，但費用由申請人自理。",
            "在駐在國發生重大突發事件時，協助中國公民撤離危險區域。",
            "在您被拘留、逮捕或服刑時，進行領事探視，敦促當地依法公正處理。",
            "協助您與國內親屬聯繫，或請國內親屬匯款給您。",
            "在您遭遇意外事故或傷亡時，協助處理有關事宜。",
            "簽發、換發、補發旅行證件（如護照、旅行證）。",
            "為遺失旅行證件的公民簽發回國證件。"
          ],
          cannotTitle: "領事官員【不可以】做什麼",
          cannotList: [
            "不可以介入他人的勞務、商業、經濟、合同和家庭糾紛。",
            "不可以參與調查各類刑事或治安案件，或代為向警方報案。",
            "不可以干預所在國的司法程序或執法行為。",
            "不可以代為支付酒店、律師、翻譯、醫療、交通等費用。",
            "不可以為您申辦簽證、居留證、工作許可證。",
            "不可以充當擔保人或證明人。",
            "不可以為您在當地謀職或提供導游服務。"
          ]
        },
        tips: {
          title: "澳門居民特別提示",
          list: [
            { title: "雙重國籍問題", content: "中國不承認雙重國籍。但凡具有中國血統但又具有葡萄牙血統的澳門居民，可根據本人意願選擇國籍。" },
            { title: "證件遺失", content: "澳門居民在海外遺失旅行證件，可通過「澳門一戶通」手機應用程式的「海外求助」功能，向身份證明局尋求協助。" },
            { title: "行前準備", content: "建議出國前登錄中國領事服務網或中國領事APP，進行「出國及海外公民自願登記」，以便在緊急情況下及時獲得援助。" },
            { title: "尊重當地", content: "請務必遵守當地法律法規，尊重當地風俗習慣和宗教信仰，理性維權。" }
          ]
        },
        back: "返回主頁"
      },
      rights: {
        title: "居民身份權利專區",
        subtitle: "《澳門基本法》保障您的基本權利",
        intro: "澳門特別行政區居民，簡稱澳門居民，包括永久性居民和非永久性居民。基本法第三章詳細規定了居民享有的廣泛權利和自由。",
        cards: [
          {
            icon: "🛂",
            title: "出入境與居留",
            desc: "自由進出澳門，不被驅逐。",
            details: [
              "澳門永久性居民享有澳門居留權。",
              "自由進出澳門特別行政區。",
              "不會被施加任何逗留條件，不被驅逐出境。",
              "有權領取澳門特別行政區永久性居民身份證。"
            ]
          },
          {
            icon: "⚖️",
            title: "法律與政治權利",
            desc: "法律面前人人平等。",
            details: [
              "在法律面前一律平等，不因種族、性別、語言、宗教等而受歧視。",
              "享有選舉權和被選舉權（永久性居民）。",
              "言論、新聞、出版的自由。",
              "結社、集會、遊行、示威的自由。"
            ]
          },
          {
            icon: "🛡️",
            title: "人身自由與尊嚴",
            desc: "不受任意逮捕或搜查。",
            details: [
              "人身自由不受侵犯，不受任意或非法的逮捕、拘留、監禁。",
              "人格尊嚴不受侵犯，禁止酷刑或不人道對待。",
              "住宅和其他房屋不受侵犯，禁止非法搜查。",
              "通訊自由和通訊秘密受法律保護。"
            ]
          },
          {
            icon: "🎓",
            title: "社會與文化權利",
            desc: "教育、宗教與職業自由。",
            details: [
              "有信仰宗教的自由。",
              "有選擇職業和工作的自由。",
              "有從事教育、學術研究、文學藝術創作的自由。",
              "享有社會福利的權利和退休保障。"
            ]
          }
        ],
        nationality: {
          title: "關於國籍的重要說明",
          content: "《中華人民共和國國籍法》在澳門特別行政區實施。凡具有中國血統的澳門居民，本人出生在中國領土（含澳門）者，以及其他符合國籍法規定的，都是中國公民。",
          note: "特別提示：具有中國血統但又具有葡萄牙血統的澳門特別行政區居民，可根據本人意願，選擇中國國籍或葡萄牙國籍。確定其中一種國籍，即不具有另一種國籍。"
        },
        back: "返回主頁"
      },
      schedule: {
        title: "安全飛行日程",
        subtitle: "您的領事保護與安全旅程時刻表",
        filters: {
          all: "全部航班",
          seminar: "專題講座",
          competition: "知識競賽",
          community: "社區推廣"
        },
        status: {
          boarding: "登機中 (報名中)",
          inflight: "起飛 (進行中)",
          landed: "抵達 (已結束)"
        },
        events: [
          {
            id: 1,
            date: "2025-11-15",
            time: "14:30",
            title: "領保進校園：留學安全第一課",
            location: "澳門中葡職業技術學校禮堂",
            type: "seminar",
            status: "boarding",
            desc: "針對高三學生的行前準備與防騙指南。現場將派發最新版《中國領事保護與協助指南》。"
          },
          {
            id: 2,
            date: "2025-12-01",
            time: "09:00",
            title: "全澳領事保護知識競賽",
            location: "線上活動",
            type: "competition",
            status: "boarding",
            desc: "挑戰您的知識極限，贏取豐富獎品！涵蓋各國簽證政策、應急求助流程等實用知識。"
          },
          {
            id: 3,
            date: "2026-01-10",
            time: "15:00",
            title: "海外防騙：識破AI換臉騙局",
            location: "澳門科學館會議廳",
            type: "seminar",
            status: "boarding",
            desc: "邀請網絡安全專家揭秘最新科技詐騙手法，教您如何識別「虛擬綁架」和「AI換臉」。"
          },
          {
            id: 4,
            date: "2026-02-05",
            time: "10:00",
            title: "12308 熱線開放日",
            location: "外交部駐澳公署",
            type: "community",
            status: "boarding",
            desc: "走進外交公署，了解全球領事保護熱線背後的故事，體驗一線外交人員的工作。"
          },
          {
            id: 5,
            date: "2025-10-01",
            time: "10:00",
            title: "國慶安全出行宣傳週",
            location: "議事亭前地",
            type: "community",
            status: "landed",
            desc: "於市中心設置摊位，向市民及遊客派發應急求助卡，推廣「外交部12308」小程序。"
          }
        ],
        back: "返回主頁"
      },
      quiz: {
        title: "「領保之星」挑戰賽",
        missionTitle: "本週任務：反詐獵人",
        missionDesc: "代號「六個凡是」。你的任務是識別潛藏的電信詐騙危機。錯誤的決定將導致資產歸零。祝你好運，特工。",
        startBtn: "接受任務",
        questionCount: "危機",
        questions: [
          {
            id: 1,
            scenario: "你接到一通電話，對方自稱「駐外使領館」人員，說你的護照涉及非法案件，要求你將資金轉入「安全賬戶」進行清查。",
            options: [
              { text: "立即轉賬，證明清白", isCorrect: false, feedback: "錯誤！使領館不會要求轉賬！" },
              { text: "掛斷電話，這是詐騙", isCorrect: true, feedback: "正確！凡是要求轉入「安全賬戶」的都是詐騙。" },
              { text: "提供銀行密碼給對方", isCorrect: false, feedback: "危險！絕不能透露銀行密碼。" }
            ]
          },
          {
            id: 2,
            scenario: "網上認識的朋友告訴你一個「內幕消息」，投資虛擬貨幣「穩賺不賠」，要求你下載一個特定的APP進行投資。",
            options: [
              { text: "借錢投資，發財機會", isCorrect: false, feedback: "錯誤！天上不會掉馅饼。" },
              { text: "小額嘗試，見好就收", isCorrect: false, feedback: "錯誤！這是典型的「殺豬盤」套路。" },
              { text: "果斷拒絕，拉黑對方", isCorrect: true, feedback: "正確！凡是宣稱「穩賺不賠」的都是詐騙。" }
            ]
          },
          {
            id: 3,
            scenario: "在海外急需換匯，微信群裡有人提供「低價換匯」，但要求你先轉賬給他。",
            options: [
              { text: "先轉賬，相信同胞", isCorrect: false, feedback: "錯誤！私下換匯風險極大，容易被騙。" },
              { text: "約定線下見面再轉", isCorrect: false, feedback: "危險！可能遭遇搶劫或洗錢風險。" },
              { text: "通過正規銀行換匯", isCorrect: true, feedback: "正確！凡是私下換匯要求先轉賬的，多為詐騙。" }
            ]
          }
        ],
        results: {
          perfect: { title: "傳奇守護者", desc: "完美的判斷力！你已完全掌握「六個凡是」反詐心法，沒有騙子能逃過你的法眼。" },
          good: { title: "資深外交官", desc: "不錯的表現，但仍需提高警惕。牢記：未知來電不輕信，個人信息不透露。" },
          fail: { title: "見習探員", desc: "任務失敗。你的安全意識薄弱，建議立即閱讀《海外防範電信網絡詐騙宣傳手冊》。" },
          retry: "重啟任務",
          back: "返回總部"
        }
      },
      safetyQuiz: {
        title: "I.R.A.S. 智能風險評估",
        intro: {
          welcome: "身份識別中...",
          desc: "歡迎進入 I.R.A.S. (Intelligent Risk Assessment System)。系統將掃描您的海外安全意識，並生成專屬的「安全能力雷達圖」。",
          startBtn: "啟動掃描程序"
        },
        categories: {
          fraud: "反詐防禦",
          prep: "戰前準備",
          legal: "法規知識",
          emergency: "應急反應"
        },
        questions: [
          {
            id: 1,
            category: "prep",
            question: "【準備掃描】您檢查了護照有效期，確認至少還有多久才過期？",
            options: [
              { text: "只要沒過期就行", score: 3 },
              { text: "至少 6 個月以上", score: 10 },
              { text: "不知道，沒看過", score: 0 }
            ]
          },
          {
            id: 2,
            category: "emergency",
            question: "【通訊掃描】遇到海外緊急情況，您知道全球通用的中國領事保護熱線是多少嗎？",
            options: [
              { text: "12345", score: 0 },
              { text: "12308", score: 10 },
              { text: "911", score: 5 }
            ]
          },
          {
            id: 3,
            category: "fraud",
            question: "【信號攔截】接到自稱「公檢法」電話，要求轉賬至「安全賬戶」，系統建議您？",
            options: [
              { text: "立即掛斷，標記為詐騙", score: 10 },
              { text: "配合調查，先轉一點", score: 0 },
              { text: "半信半疑，詢問對方工號", score: 5 }
            ]
          },
          {
            id: 4,
            category: "legal",
            question: "【權限掃描】如果您在海外被拘留，領事官員的權限包括？",
            options: [
              { text: "直接命令警察放人", score: 0 },
              { text: "提供律師名單，進行探視", score: 10 },
              { text: "代墊保釋金", score: 0 }
            ]
          },
          {
            id: 5,
            category: "fraud",
            question: "【網絡掃描】社交平台上有人推薦「穩賺不賠」的內幕投資，您判定為？",
            options: [
              { text: "高風險機會，小額嘗試", score: 0 },
              { text: "殺豬盤詐騙，果斷拉黑", score: 10 },
              { text: "可能是真的，再觀察", score: 2 }
            ]
          },
          {
            id: 6,
            category: "emergency",
            question: "【資產掃描】護照在海外被盗，您的第一反應程序是？",
            options: [
              { text: "直接去機場嘗試登機", score: 0 },
              { text: "報警並聯繫就近使領館", score: 10 },
              { text: "發朋友圈求助", score: 2 }
            ]
          },
          {
            id: 7,
            category: "prep",
            question: "【數據備份】出發前，您是否在「外交部」平台進行了「出國自願登記」？",
            options: [
              { text: "已完成登記", score: 10 },
              { text: "聽說過，但沒做", score: 5 },
              { text: "那是做什麼的？", score: 0 }
            ]
          },
          {
            id: 8,
            category: "legal",
            question: "【行為掃描】持有旅遊簽證，您是否可以在當地進行有薪工作？",
            options: [
              { text: "沒人查就可以", score: 0 },
              { text: "絕對禁止，屬非法打工", score: 10 },
              { text: "幫朋友忙不算", score: 3 }
            ]
          },
          {
            id: 9,
            category: "fraud",
            question: "【交易掃描】微信群有人提供「優惠匯率」換匯，但要先轉賬，系統判定風險為？",
            options: [
              { text: "極高風險，拒絕私下換匯", score: 10 },
              { text: "中等風險，看對方信譽", score: 2 },
              { text: "低風險，同胞互助", score: 0 }
            ]
          },
          {
            id: 10,
            category: "prep",
            question: "【防禦掃描】關於海外旅遊保險，您的配置是？",
            options: [
              { text: "全覆蓋（醫療、意外、救援）", score: 10 },
              { text: "裸奔（未購買）", score: 0 },
              { text: "只買了機票延誤險", score: 5 }
            ]
          }
        ],
        result: {
          analyzing: "正在分析神經網絡數據...",
          title: "安全評估報告",
          scoreText: "綜合安全指數",
          advice: {
            high: "評級：S級 [資深外交官]。您的安全意識無懈可擊，是海外出行的模範。",
            medium: "評級：A級 [謹慎探險家]。具備基礎意識，但部分模塊需升級，建議閱讀指南。",
            low: "評級：C級 [冒險新手]。安全防火牆極為脆弱！強烈建議立即閱讀防詐手冊和領保指南！"
          },
          retry: "重新校準",
          home: "返回主控台"
        }
      },
      trip: {
        title: "安全防護罩生成器",
        subtitle: "完成準備項目，為您的旅程充能",
        status: {
          charging: "能量填充中...",
          ready: "防護罩已全功率運作"
        },
        modules: {
          docs: {
            title: "核心認證 (Documents)",
            items: [
              { id: 'passport', text: "確認護照有效期 > 6個月" },
              { id: 'visa', text: "辦妥目的地簽證/電子簽" },
              { id: 'copy', text: "備份證件複印件 (電子+紙質)" }
            ]
          },
          health: {
            title: "生命維持 (Health & Finance)",
            items: [
              { id: 'insurance', text: "購買海外旅遊意外險/醫療險" },
              { id: 'vaccine', text: "接種必要疫苗/攜帶常備藥" },
              { id: 'bank', text: "通知銀行開通海外提款/刷卡" }
            ]
          },
          comm: {
            title: "通訊鏈路 (Communication)",
            items: [
              { id: 'register', text: "完成「出國自願登記」" },
              { id: 'roaming', text: "開通手機國際漫遊/購買網卡" },
              { id: 'contacts', text: "存儲 12308 及當地使領館電話" }
            ]
          },
          law: {
            title: "協議合規 (Laws & Customs)",
            items: [
              { id: 'customs', text: "查閱當地違禁品清單 (藥品/動植物)" },
              { id: 'laws', text: "了解當地法律 (無人機/禁酒/拍照)" },
              { id: 'culture', text: "尊重當地宗教與風俗習慣" }
            ]
          }
        },
        back: "返回基地"
      },
      riskMap: {
        title: "G.S.S.A.S. 全球安全態勢感知系統",
        searchPlaceholder: "輸入國家/地區座標...",
        stats: {
          safetyIndex: "安全指數",
          peaceIndex: "和平指數",
          riskLevel: "威脅等級",
          globalRank: "全球排名"
        },
        levels: {
          low: "低風險",
          medium: "中等風險",
          high: "高風險",
          unknown: "數據未知"
        },
        noSelection: "等待目標鎖定...",
        ranking: "安全光譜排名"
      },
      podcast: {
        title: "全球信號攔截站",
        subtitle: "正在掃描領事保護通訊頻率...",
        status: {
          offline: "待機中 - 等待傳輸",
          broadcasting: "接收信號中 - 加密連接"
        },
        listTitle: "攔截日誌 (Intercepted Logs)",
        controls: {
          play: "開始解碼",
          pause: "暫停傳輸",
          next: "掃描下一頻率",
          prev: "重連上一頻率"
        },
        episodes: [
          {
            id: "ep1",
            title: "EP.01: 消失的護照之謎",
            duration: "12:34",
            freq: "98.4 MHz",
            desc: "在異國他鄉丟失護照後的黃金24小時生存指南。"
          },
          {
            id: "ep2",
            title: "EP.02: 賽博詐騙防禦術",
            duration: "08:15",
            freq: "102.1 MHz",
            desc: "揭秘AI換臉與虛擬綁架的技術原理與破解之道。"
          },
          {
            id: "ep3",
            title: "EP.03: 邊境線上的紅色警戒",
            duration: "15:20",
            freq: "88.9 MHz",
            desc: "誤入衝突區域如何自救？真實撤僑故事回顧。"
          },
          {
            id: "ep4",
            title: "EP.04: 法律邊界行走者",
            duration: "10:45",
            freq: "95.5 MHz",
            desc: "那些你以為合法，在國外卻會被捕的行為。"
          }
        ]
      },
      video: {
        title: "V.I.D. 視覺情報數據庫",
        subtitle: "正在接入全球領保監控網絡...",
        viewerCount: "在線特工",
        bandwidth: "傳輸速率",
        playBtn: "初始化影像",
        listTitle: "數據存儲磁帶 (Data Tapes)",
        categories: {
          doc: "證件協議",
          fraud: "反詐協議",
          emergency: "緊急協議"
        },
        videos: [
          {
            id: "v1",
            title: "丟失護照應急預案",
            category: "doc",
            length: "01:00",
            views: "8,942",
            desc: "緊急！護照丟失後的標準操作程序演示。",
            thumbnailColor: "bg-red-900"
          },
          {
            id: "v2",
            title: "識別虛擬綁架信號",
            category: "fraud",
            length: "00:58",
            views: "12,403",
            desc: "詐騙集團如何偽造音頻？一分鐘識破騙局。",
            thumbnailColor: "bg-purple-900"
          },
          {
            id: "v3",
            title: "機場過境禁忌掃描",
            category: "doc",
            length: "01:05",
            views: "6,211",
            desc: "不要攜帶這些物品！各國海關違禁品清單可視化。",
            thumbnailColor: "bg-blue-900"
          },
          {
            id: "v4",
            title: "遭遇暴亂撤離路線",
            category: "emergency",
            length: "01:12",
            views: "5,590",
            desc: "身處衝突區域的掩體尋找與撤離路線規劃。",
            thumbnailColor: "bg-orange-900"
          }
        ]
      },
      difficulty: {
        title: "緊急狀況診斷終端",
        subtitle: "請選擇當前遭遇的異常狀況...",
        systemStatus: "系統狀態：等待輸入",
        protocolLabel: "已加載應對協議",
        categories: [
          {
            id: "money",
            icon: "💸",
            label: "財產全失",
            color: "yellow",
            desc: "現金、信用卡被盜或遺失，身無分文。",
            steps: [
              "聯繫家人匯款：通過西聯匯款 (Western Union) 等速匯服務。",
              "暫時借款：如情況緊急，可向使領館申請暫墊回國費用（需簽署還款保證書）。",
              "凍結賬戶：立即聯繫銀行掛失信用卡。"
            ],
            action: "啟動資產凍結程序"
          },
          {
            id: "doc",
            icon: "🛂",
            label: "證件遺失",
            color: "blue",
            desc: "護照或旅行證件遺失/被盜，無法回國。",
            steps: [
              "報警：向當地警方報案，索取報案證明。",
              "補辦：前往最近的中國使領館申請旅行證。",
              "澳門居民：使用「澳門一戶通」尋求協助。"
            ],
            action: "啟動身份恢復程序"
          },
          {
            id: "health",
            icon: "🏥",
            label: "突發疾病",
            color: "red",
            desc: "遭遇嚴重疾病或意外傷害，需要醫療援助。",
            steps: [
              "急救：撥打當地急救電話。",
              "保險：聯繫保險公司啟動醫療救援。",
              "使領館：請求協助通知國內親屬或推薦醫生。"
            ],
            action: "啟動醫療支援協議"
          },
          {
            id: "legal",
            icon: "⚖️",
            label: "法律糾紛",
            color: "purple",
            desc: "被拘留、逮捕或捲入法律訴訟。",
            steps: [
              "保持沉默：要求聯繫中國領事官員。",
              "領事探視：領事官員可探視並了解情況。",
              "律師：索取當地律師名單（費用自理）。"
            ],
            action: "啟動法律援助接口"
          },
          {
            id: "missing",
            icon: "🔍",
            label: "親友失聯",
            color: "orange",
            desc: "與在海外的親友失去聯繫超過24小時。",
            steps: [
              "多方聯繫：嘗試電話、社交軟件、同行人員。",
              "報警：向當地警方報案。",
              "求助：聯繫外交部12308或使領館協助尋人。"
            ],
            action: "啟動搜索信號追蹤"
          }
        ]
      },
      download: {
        title: "戰術物資補給艙",
        subtitle: "正在建立安全傳輸鏈路...",
        storage: "可用存儲",
        speed: "傳輸帶寬",
        encryption: "加密等級",
        filterAll: "全部物資",
        items: [
          {
            id: "guide2025",
            title: "海外生存戰術手冊 v2025",
            type: "manual",
            size: "12.4 MB",
            format: "PDF",
            icon: "📘",
            desc: "包含全球190+國家使領館聯繫方式及標準求助流程。",
            color: "blue"
          },
          {
            id: "sos_card",
            title: "SOS 信號發射模板",
            type: "card",
            size: "2.1 MB",
            format: "IMG",
            icon: "🚨",
            desc: "多語言緊急求助卡片，適用於語言不通的緊急狀況。",
            color: "red"
          },
          {
            id: "legal_codex",
            title: "外交禮儀與法規協議",
            type: "legal",
            size: "5.8 MB",
            format: "PDF",
            icon: "⚖️",
            desc: "文明旅遊公約及常見海外法律紅線清單。",
            color: "purple"
          },
          {
            id: "app_mod",
            title: "12308 智能終端模塊",
            type: "manual",
            size: "45.2 MB",
            format: "APK",
            icon: "📱",
            desc: "外交部官方客戶端，支持一鍵求助與實時諮詢。",
            color: "yellow"
          }
        ]
      }
    }
  },
  [Language.ZH_CN]: {
    // ... existing translations ...
    title: "智保同行：领事保护知识随身带",
    welcomeTitle: "智能领事保护与协助",
    subtitle: "您的海外安全守护者",
    scrollDown: "下滑探索",
    menu: {
      special: "特色活动",
      weekly: "「领保之星」每周主题挑战赛",
      quiz: "「海外旅行安全指数」小测试",
      emergency: "紧急服务",
      sos: "紧急求助专区",
      trip: "「我即将出国」专区",
      difficulty: "「我在海外遇到困难」专区",
      resources: "信息资源",
      map: "全球风险地图",
      podcast: "播客集",
      video: "一分钟短片集",
      download: "资源专区",
      zones: "专区服务",
      consular: "领事保护与协助专区",
      rights: "居民身份权利专区",
      schedule: "活动日程"
    },
    // ... globe, features, notifications, footer ...
    globe: {
      loading: "正在加载全球地图...",
      low: "安全国家",
      medium: "中等风险",
      high: "高风险国家",
      safe: "低",
      noData: "数据缺失",
      source: "资料来源: Safest Countries in the World 2025"
    },
    features: {
      title: "专区服务",
      emergency: { title: "紧急求助专区", desc: "24小时紧急求助联系方式" },
      consular: { title: "领事保护与协助专区", desc: "了解您在海外的权利" },
      rights: { title: "居民身份权利专区", desc: "维护自身合法权益" },
      schedule: { title: "活动日程", desc: "最新宣传活动安排" }
    },
    notifications: {
      title: "最新通知",
      list: [
        { date: "2025-12-15", content: "「领事保护知识竞赛」将于下月举行，欢迎各位同学踊跃报名参加。" },
        { date: "2025-12-10", content: "新增「海外旅行安全指南」电子书下载，请前往资源专区查看。" },
        { date: "2025-12-05", content: "紧急求助专区更新了最新的领事保护热线电话，请各位注意查阅。" },
        { date: "2025-12-01", content: "网站新增葡萄牙语界面，为葡语使用者提供更便捷的服务。" }
      ]
    },
    footer: {
      links: "相关链接",
      linkNames: {
        mfaChina: "中华人民共和国外交部",
        mfaPortugal: "葡萄牙共和国外交部",
        consularChina: "中国领事服务网",
        commissionMacau: "外交部驻澳门特派员公署",
        govMacau: "澳门特别行政区政府入口网站",
        dsiMacau: "澳门特别行政区政府身份证明局",
        school: "澳门中葡职业技术学校"
      },
      contact: "联络我们",
      contactText: "本网站由一群中学生自主开发，旨在增进公众对领事保护、协助服务及居民身份权利的认识与关注。由于团队成员学业繁忙，网站信息将不定期更新与维护，如有不便，敬请理解。\n\n我们诚挚欢迎您对网站用户界面提出宝贵意见，若发现信息有误也欢迎指正。",
      copyright: "© 2025-2026 中葡职业技术学校高三翻译宣传领事保护与协助和居民权利小组（Escudos de Quíron） 版权所有"
    },
    pages: {
      // ... existing pages ...
      emergency: {
        title: "紧急求助专区",
        tabs: {
          hotlines: "紧急热线",
          guides: "应急指引",
          antifraud: "防骗预警"
        },
        hotlines: {
          globalTitle: "中华人民共和国外交部设立的全球领事保护与服务应急热线",
          macaoTitle: "澳门居民专用",
          localTitle: "当地紧急求助",
          china12308: "外交部全球领事保护与服务应急热线",
          macaoCommissioner: "中华人民共和国外交部驻澳门特别行政区特派员公署领事保护与协助电话",
          macaoTourism: "澳门特别行政区政府旅游局旅游危机处理办公室热线（24小时）",
          macaoPSP: "澳门特别行政区政府治安警察局24小时海外紧急求助热线",
          macaoDSI: "澳门特别行政区政府身份证明局（办公时间）",
          localPolice: "当地报警/急救电话",
          desc12308: "24小时领事保护与服务，提供应急咨询与协助。"
        },
        guides: {
          lostDoc: { 
            title: "证件遗失", 
            steps: [
              "向当地警方报案，取得报案证明。",
              "澳门居民可登录「澳门一户通」或身份证明局网站申请「海外遗失旅行证件求助」。",
              "或向就近的中国驻外使领馆申请补发旅行证件。",
              "准备照片及身份证明文件复印本以便办理。"
            ] 
          },
          arrested: { 
            title: "被拘留/逮捕", 
            steps: [
              "保持冷静，您有权要求联系中国驻外使领馆。",
              "领事官员可进行探视，了解情况，但不能干预当地司法程序。",
              "领事官员可提供当地律师名单，费用需自理。",
              "若受到不公正对待，应及时向领事官员反映。"
            ] 
          },
          injury: { 
            title: "受伤/重病", 
            steps: [
              "立即拨打当地急救电话。",
              "联系中国驻外使领馆，可协助通知国内亲属。",
              "医疗费用通常需自理或由保险公司承担。",
              "保存好医疗报告和单据。"
            ] 
          },
          missing: { 
            title: "亲友失踪", 
            steps: [
              "尝试多种途径联系（电话、社交软件、同行人员）。",
              "向当地警方报案。",
              "联系中国驻外使领馆提供协助。",
              "提供失踪者详细信息（护照号、外貌特征、行程）。"
            ] 
          },
          rights: {
            canDo: ["推荐律师、翻译、医生名单", "协助与国内亲属联系", "补发旅行证件", "发生重大突发事件时协助撤离"],
            cannotDo: ["干预所在国司法程序", "代缴罚款、医疗费、律师费", "充当担保人", "提供优于当地人的待遇"]
          }
        },
        antifraud: {
          sixDontsTitle: "牢记「六个凡是」",
          sixDonts: [
            "凡是自称驻外使领馆、公检法要求汇款的，都是诈骗！",
            "凡是要求缴纳「保证金」或将资金转入「安全账户」的，都是诈骗！",
            "凡是宣称「内幕消息」、「稳赚不赔」的投资理财，都是诈骗！",
            "凡是低价换汇，要求先行转账的，都是诈骗！",
            "凡是自称使领馆人员推荐指定机构办理业务的，都是诈骗！",
            "凡是熟人通过社交平台要求转账，务必电话核实！"
          ],
          commonScamsTitle: "海外高发案件类型",
          scams: [
            { name: "冒充公检法", desc: "谎称涉嫌洗钱、藏毒，要求资金清查。" },
            { name: "虚拟绑架", desc: "诱导受害人切断联系，向家属勒索赎金。" },
            { name: "换汇诈骗", desc: "私下换汇，转账后被拉黑或收到赃款。" },
            { name: "杀猪盘", desc: "网上交友建立感情，诱导投资賭博。" }
          ],
          tools: "建议下载「国家反诈中心」APP 及关注「领事直通车」微信公众号。"
        },
        back: "返回主页"
      },
      consular: {
        title: "领事保护与协助专区",
        definition: {
          title: "什么是领事保护？",
          text: "领事保护与协助是指在国外的中国公民、法人、非法人组织正当权益被侵犯或者需要帮助时，中国驻外外交机构依法维护其正当权益及提供协助的行为。"
        },
        target: {
          title: "谁可以获得领事保护？",
          text: "凡是依照《中华人民共和国国籍法》具有中国国籍者（包括内地居民、香港、澳门和台湾同胞），无论是定居国外还是临时出国，都是中国政府领事保护与协助的对象。"
        },
        scope: {
          title: "领事官员的职责范围",
          canTitle: "领事官员【可以】做什么",
          canList: [
            "推荐当地律师、翻译和医生，但费用由申请人自理。",
            "在驻在国发生重大突发事件时，协助中国公民撤离危险区域。",
            "在您被拘留、逮捕或服刑时，进行领事探视，敦促当地依法公正处理。",
            "协助您与国内亲属联系，或请国内亲属汇款给您。",
            "在您遭遇意外事故或伤亡时，协助处理有关事宜。",
            "签发、换发、补发旅行证件（如护照、旅行证）。",
            "为遗失旅行证件的公民签发回国证件。"
          ],
          cannotTitle: "领事官员【不可以】做什么",
          cannotList: [
            "不可以介入他人的劳务、商业、经济、合同和家庭纠纷。",
            "不可以参与调查各类刑事或治安案件，或代为向警方报案。",
            "不可以干预所在国的司法程序或执法行为。",
            "不可以代为支付酒店、律师、翻译、医疗、交通等费用。",
            "不可以为您申办签证、居留证、工作许可证。",
            "不可以充当担保人或证明人。",
            "不可以为您在当地谋职或提供导游服务。"
          ]
        },
        tips: {
          title: "澳门居民特别提示",
          list: [
            { title: "双重国籍问题", content: "中国不承认双重国籍。但凡具有中国血统但又具有葡萄牙血统的澳门居民，可根据本人意愿选择国籍。" },
            { title: "证件遗失", content: "澳门居民在海外遗失旅行证件，可通过「澳门一户通」手机应用程序的「海外求助」功能，向身份证明局寻求协助。" },
            { title: "行前准备", content: "建议出国前登录中国领事服务网或中国领事APP，进行「出国及海外公民自愿登记」，以便在紧急情况下及时获得援助。" },
            { title: "尊重当地", content: "请务必遵守当地法律法规，尊重当地风俗习惯和宗教信仰，理性维权。" }
          ]
        },
        back: "返回主页"
      },
      rights: {
        title: "居民身份权利专区",
        subtitle: "《澳门基本法》保障您的基本权利",
        intro: "澳门特别行政区居民，简称澳门居民，包括永久性居民和非永久性居民。基本法第三章详细规定了居民享有的广泛权利和自由。",
        cards: [
          {
            icon: "🛂",
            title: "出入境与居留",
            desc: "自由进出澳门，不被驱逐。",
            details: [
              "澳门永久性居民享有澳门居留权。",
              "自由进出澳门特别行政区。",
              "不会被施加任何逗留条件，不被驱逐出境。",
              "有权领取澳门特别行政区永久性居民身份证。"
            ]
          },
          {
            icon: "⚖️",
            title: "法律与政治权利",
            desc: "法律面前人人平等。",
            details: [
              "在法律面前一律平等，不因种族、性别、语言、宗教等而受歧视。",
              "享有选举权和被选举权（永久性居民）。",
              "言论、新闻、出版的自由。",
              "结社、集会、游行、示威的自由。"
            ]
          },
          {
            icon: "🛡️",
            title: "人身自由与尊严",
            desc: "不受任意逮捕或搜查。",
            details: [
              "人身自由不受侵犯，不受任意或非法的逮捕、拘留、监禁。",
              "人格尊严不受侵犯，禁止酷刑或不人道对待。",
              "住宅和其他房屋不受侵犯，禁止非法搜查。",
              "通讯自由和通讯秘密受法律保护。"
            ]
          },
          {
            icon: "🎓",
            title: "社会与文化权利",
            desc: "教育、宗教与职业自由。",
            details: [
              "有信仰宗教的自由。",
              "有选择职业和工作的自由。",
              "有从事教育、学术研究、文学艺术创作的自由。",
              "享有社会福利的权利和退休保障。"
            ]
          }
        ],
        nationality: {
          title: "关于国籍的重要说明",
          content: "《中华人民共和国国籍法》在澳门特别行政区实施。凡具有中国血统的澳门居民，本人出生在中国领土（含澳门）者，以及其他符合国籍法规定的，都是中国公民。",
          note: "特别提示：具有中国血统但又具有葡萄牙血统的澳门特别行政区居民，可根据本人意愿，选择中国国籍或葡萄牙国籍。确定其中一种国籍，即不具有另一种国籍。"
        },
        back: "返回主页"
      },
      schedule: {
        title: "安全飞行日程",
        subtitle: "您的领事保护与安全旅程时刻表",
        filters: {
          all: "全部航班",
          seminar: "专题讲座",
          competition: "知识竞赛",
          community: "社区推广"
        },
        status: {
          boarding: "登机中 (报名中)",
          inflight: "起飞 (进行中)",
          landed: "抵达 (已结束)"
        },
        events: [
          {
            id: 1,
            date: "2025-11-15",
            time: "14:30",
            title: "领保进校园：留学安全第一课",
            location: "澳门中葡职业技术学校礼堂",
            type: "seminar",
            status: "boarding",
            desc: "针对高三学生的行前准备与防骗指南。现场将派发最新版《中国领事保护与协助指南》。"
          },
          {
            id: 2,
            date: "2025-12-01",
            time: "09:00",
            title: "全澳领事保护知识竞赛",
            location: "线上活动",
            type: "competition",
            status: "boarding",
            desc: "挑战您的知识极限，赢取丰富奖品！涵盖各国签证政策、应急求助流程等实用知识。"
          },
          {
            id: 3,
            date: "2026-01-10",
            time: "15:00",
            title: "海外防骗：识破AI换脸骗局",
            location: "澳门科学馆会议厅",
            type: "seminar",
            status: "boarding",
            desc: "邀请网络安全专家揭秘最新科技诈骗手法，教您如何识别「虚拟绑架」和「AI换脸」。"
          },
          {
            id: 4,
            date: "2026-02-05",
            time: "10:00",
            title: "12308 热线开放日",
            location: "外交部驻澳公署",
            type: "community",
            status: "boarding",
            desc: "走进外交公署，了解全球领事保护热线背后的故事，体验一线外交人员的工作。"
          },
          {
            id: 5,
            date: "2025-10-01",
            time: "10:00",
            title: "国庆安全出行宣传周",
            location: "议事亭前地",
            type: "community",
            status: "landed",
            desc: "于市中心设置摊位，向市民及游客派发应急求助卡，推广「外交部12308」小程序。"
          }
        ],
        back: "返回主页"
      },
      quiz: {
        title: "「领保之星」挑战赛",
        missionTitle: "本周任务：反诈猎人",
        missionDesc: "代号「六个凡是」。你的任务是识别潜藏的电信诈骗危机。错误的决定将导致资产归零。祝你好运，特工。",
        startBtn: "接受任务",
        questionCount: "危机",
        questions: [
          {
            id: 1,
            scenario: "你接到一通电话，对方自称「驻外使领馆」人员，说你的护照涉及非法案件，要求你将资金转入「安全账户」进行清查。",
            options: [
              { text: "立即转账，证明清白", isCorrect: false, feedback: "错误！使领馆不会要求转账！" },
              { text: "挂断电话，这是诈骗", isCorrect: true, feedback: "正确！凡是要求转入「安全账户」的都是诈骗。" },
              { text: "提供銀行密码给对方", isCorrect: false, feedback: "危险！绝不能透露银行密码。" }
            ]
          },
          {
            id: 2,
            scenario: "网上认识的朋友告诉你一个「内幕消息」，投资虚拟货币「稳赚不赔」，要求你下载一个特定的APP进行投资。",
            options: [
              { text: "借钱投资，发财机会", isCorrect: false, feedback: "错误！天上不会掉馅餅。" },
              { text: "小额尝试，见好就收", isCorrect: false, feedback: "错误！这是典型的「杀猪盘」套路。" },
              { text: "果断拒绝，拉黑对方", isCorrect: true, feedback: "正确！凡是宣称「稳赚不赔」的都是诈骗。" }
            ]
          },
          {
            id: 3,
            scenario: "在海外急需换汇，微信群里有人提供「低价换汇」，但要求你先转账给他。",
            options: [
              { text: "先转账，相信同胞", isCorrect: false, feedback: "错误！私下换汇风险极大，容易被骗。" },
              { text: "约定线下见面再转", isCorrect: false, feedback: "危险！可能遭遇抢劫或洗钱风险。" },
              { text: "通过正规银行换汇", isCorrect: true, feedback: "正确！凡是私下换汇要求先转账的，多为诈骗。" }
            ]
          }
        ],
        results: {
          perfect: { title: "传奇守护者", desc: "完美的判断力！你已完全掌握「六个凡是」反诈心法，没有骗子能逃过你的法眼。" },
          good: { title: "资深外交官", desc: "不错的表现，但仍需提高警惕。牢记：未知来电不轻信，个人信息不透露。" },
          fail: { title: "见习探员", desc: "任务失败。你的安全意识薄弱，建议立即阅读《海外防范电信网络诈骗宣传手册》。" },
          retry: "重启任务",
          back: "返回总部"
        }
      },
      safetyQuiz: {
        title: "I.R.A.S. 智能风险评估",
        intro: {
          welcome: "身份识别中...",
          desc: "欢迎进入 I.R.A.S. (Intelligent Risk Assessment System)。系统将扫描您的海外安全意识，并生成专属的「安全能力雷达图」。",
          startBtn: "启动扫描程序"
        },
        categories: {
          fraud: "反诈防御",
          prep: "战前准备",
          legal: "法规知识",
          emergency: "应急反应"
        },
        questions: [
          {
            id: 1,
            category: "prep",
            question: "【准备扫描】您检查了护照有效期，确认至少还有多久才过期？",
            options: [
              { text: "只要没过期就行", score: 3 },
              { text: "至少 6 个月以上", score: 10 },
              { text: "不知道，没看过", score: 0 }
            ]
          },
          {
            id: 2,
            category: "emergency",
            question: "【通讯扫描】遇到海外紧急情况，您知道全球通用的中国领事保护热线是多少吗？",
            options: [
              { text: "12345", score: 0 },
              { text: "12308", score: 10 },
              { text: "911", score: 5 }
            ]
          },
          {
            id: 3,
            category: "fraud",
            question: "【信号拦截】接到自称「公检法」电话，要求转账至「安全账户」，系统建议您？",
            options: [
              { text: "立即挂断，标记为诈骗", score: 10 },
              { text: "配合调查，先转一点", score: 0 },
              { text: "半信半疑，询问对方工号", score: 5 }
            ]
          },
          {
            id: 4,
            category: "legal",
            question: "【权限扫描】如果您在海外被拘留，领事官员的权限包括？",
            options: [
              { text: "直接命令警察放人", score: 0 },
              { text: "提供律师名单，进行探视", score: 10 },
              { text: "代垫保释金", score: 0 }
            ]
          },
          {
            id: 5,
            category: "fraud",
            question: "【网络扫描】社交平台上有人推荐「稳赚不赔」的内幕投资，您判定为？",
            options: [
              { text: "高风险机会，小额尝试", score: 0 },
              { text: "杀豬盘诈骗，果断拉黑", score: 10 },
              { text: "可能是真的，再观察", score: 2 }
            ]
          },
          {
            id: 6,
            category: "emergency",
            question: "【资产扫描】护照在海外被盗，您的第一反应程序是？",
            options: [
              { text: "直接去机场尝试登机", score: 0 },
              { text: "报警并联系就近使领馆", score: 10 },
              { text: "发朋友圈求助", score: 2 }
            ]
          },
          {
            id: 7,
            category: "prep",
            question: "【数据备份】出发前，您是否在「外交部」平台进行了「出国自愿登记」？",
            options: [
              { text: "已完成登记", score: 10 },
              { text: "听说过，但没做", score: 5 },
              { text: "那是做什么的？", score: 0 }
            ]
          },
          {
            id: 8,
            category: "legal",
            question: "【行为扫描】持有旅游签证，您是否可以在当地进行有薪工作？",
            options: [
              { text: "没人查就可以", score: 0 },
              { text: "绝对禁止，属非法打工", score: 10 },
              { text: "帮朋友忙不算", score: 3 }
            ]
          },
          {
            id: 9,
            category: "fraud",
            question: "【交易扫描】微信群有人提供「优惠汇率」换汇，但要先转账，系统判定风险为？",
            options: [
              { text: "极高风险，拒绝私下换汇", score: 10 },
              { text: "中等风险，看对方信誉", score: 2 },
              { text: "低风险，同胞互助", score: 0 }
            ]
          },
          {
            id: 10,
            category: "prep",
            question: "【防御扫描】关于海外旅游保险，您的配置是？",
            options: [
              { text: "全覆盖（医疗、意外、救援）", score: 10 },
              { text: "裸奔（未购买）", score: 0 },
              { text: "只买了机票延误险", score: 5 }
            ]
          }
        ],
        result: {
          analyzing: "正在分析神经网络数据...",
          title: "安全评估报告",
          scoreText: "综合安全指数",
          advice: {
            high: "评级：S级 [资深外交官]。您的安全意识无懈可击，是海外出行的模范。",
            medium: "评级：A级 [谨慎探险家]。具备基础意识，但部分模块需升级，建议阅读指南。",
            low: "评级：C级 [冒险新手]。安全防火墙极为脆弱！强烈建议立即阅读防诈手册和领保指南！"
          },
          retry: "重新校準",
          home: "返回主控台"
        }
      },
      trip: {
        title: "安全防护罩生成器",
        subtitle: "完成准备项目，为您的旅程充能",
        status: {
          charging: "能量填充中...",
          ready: "防护罩已全功率运作"
        },
        modules: {
          docs: {
            title: "核心认证 (Documents)",
            items: [
              { id: 'passport', text: "确认护照有效期 > 6个月" },
              { id: 'visa', text: "办妥目的地签证/电子签" },
              { id: 'copy', text: "备份证件复印件 (电子+纸质)" }
            ]
          },
          health: {
            title: "生命维持 (Health & Finance)",
            items: [
              { id: 'insurance', text: "购买海外旅遊意外险/医疗险" },
              { id: 'vaccine', text: "接种必要疫苗/携带常备药" },
              { id: 'bank', text: "通知銀行開通海外提款/刷卡" }
            ]
          },
          comm: {
            title: "通讯链路 (Communication)",
            items: [
              { id: 'register', text: "完成「出国自愿登记」" },
              { id: 'roaming', text: "开通手机国际漫遊/购买网卡" },
              { id: 'contacts', text: "存储 12308 及当地使领馆电话" }
            ]
          },
          law: {
            title: "协议合规 (Laws & Customs)",
            items: [
              { id: 'customs', text: "查阅当地违禁品清单 (药品/动植物)" },
              { id: 'laws', text: "了解当地法律 (无人机/禁酒/拍照)" },
              { id: 'culture', text: "尊重当地宗教与风俗习惯" }
            ]
          }
        },
        back: "返回基地"
      },
      riskMap: {
        title: "G.S.S.A.S. 全球安全态势感知系统",
        searchPlaceholder: "输入国家/地区坐标...",
        stats: {
          safetyIndex: "安全指数",
          peaceIndex: "和平指数",
          riskLevel: "威胁等级",
          globalRank: "全球排名"
        },
        levels: {
          low: "低风险",
          medium: "中等风险",
          high: "高风险",
          unknown: "数据未知"
        },
        noSelection: "等待目标锁定...",
        ranking: "安全光谱排名"
      },
      podcast: {
        title: "全球信号拦截站",
        subtitle: "正在扫描领事保护通讯频率...",
        status: {
          offline: "待机中 - 等待传输",
          broadcasting: "接收信号中 - 加密连接"
        },
        listTitle: "拦截日志 (Intercepted Logs)",
        controls: {
          play: "开始解码",
          pause: "暂停传输",
          next: "扫描下一频率",
          prev: "重连上一频率"
        },
        episodes: [
          {
            id: "ep1",
            title: "EP.01: 消失的护照之谜",
            duration: "12:34",
            freq: "98.4 MHz",
            desc: "在异国他乡丢失护照后的黄金24小时生存指南。"
          },
          {
            id: "ep2",
            title: "EP.02: 赛博诈骗防御术",
            duration: "08:15",
            freq: "102.1 MHz",
            desc: "揭秘AI换脸与虚拟绑架的技术原理与破解之道。"
          },
          {
            id: "ep3",
            title: "EP.03: 边境线上的红色警戒",
            duration: "15:20",
            freq: "88.9 MHz",
            desc: "误入冲突区域如何自救？真实撤侨故事回顾。"
          },
          {
            id: "ep4",
            title: "EP.04: 法律边界行走者",
            duration: "10:45",
            freq: "95.5 MHz",
            desc: "那些你以为合法，在国外却会被捕的行为。"
          }
        ]
      },
      video: {
        title: "V.I.D. 视觉情报数据库",
        subtitle: "正在接入全球领保监控网络...",
        viewerCount: "在线特工",
        bandwidth: "传输速率",
        playBtn: "初始化影像",
        listTitle: "数据存储磁带 (Data Tapes)",
        categories: {
          doc: "证件协议",
          fraud: "反诈协议",
          emergency: "紧急协议"
        },
        videos: [
          {
            id: "v1",
            title: "丢失护照应急预案",
            category: "doc",
            length: "01:00",
            views: "8,942",
            desc: "紧急！护照丢失后的标准操作程序演示。",
            thumbnailColor: "bg-red-900"
          },
          {
            id: "v2",
            title: "识别虚拟绑架信号",
            category: "fraud",
            length: "00:58",
            views: "12,403",
            desc: "诈骗集团如何伪造音频？一分钟识破骗局。",
            thumbnailColor: "bg-purple-900"
          },
          {
            id: "v3",
            title: "机场过境禁忌扫描",
            category: "doc",
            length: "01:05",
            views: "6,211",
            desc: "不要携带这些物品！各国海关违禁品清单可视化。",
            thumbnailColor: "bg-blue-900"
          },
          {
            id: "v4",
            title: "遭遇暴乱撤离路线",
            category: "emergency",
            length: "01:12",
            views: "5,590",
            desc: "身处冲突区域的掩体寻找与撤离路线规划。",
            thumbnailColor: "bg-orange-900"
          }
        ]
      },
      difficulty: {
        title: "紧急状况诊断终端",
        subtitle: "请选择当前遭遇的异常状况...",
        systemStatus: "系统状态：等待输入",
        protocolLabel: "已加载应对协议",
        categories: [
          {
            id: "money",
            icon: "💸",
            label: "财产全失",
            color: "yellow",
            desc: "现金、信用卡被盗或遗失，身无分文。",
            steps: [
              "联系家人汇款：通过西联汇款 (Western Union) 等速汇服务。",
              "暂时借款：如情况紧急，可向使领馆申请暂垫回国费用（需签署还款保证书）。",
              "冻结账户：立即联系银行挂失信用卡。"
            ],
            action: "启动资产冻结程序"
          },
          {
            id: "doc",
            icon: "🛂",
            label: "证件遗失",
            color: "blue",
            desc: "护照或旅行证件遗失/被盗，无法回国。",
            steps: [
              "报警：向当地警方报案，索取报案证明。",
              "补办：前往最近的中国使领馆申请旅行证。",
              "澳门居民：使用「澳门一户通」寻求协助。"
            ],
            action: "启动身份恢复程序"
          },
          {
            id: "health",
            icon: "🏥",
            label: "突发疾病",
            color: "red",
            desc: "遭遇严重疾病或意外伤害，需要医疗援助。",
            steps: [
              "急救：拨打当地急救电话。",
              "保险：联系保险公司启动医疗救援。",
              "使领馆：请求协助通知国内亲属或推荐医生。"
            ],
            action: "启动医疗支援协议"
          },
          {
            id: "legal",
            icon: "⚖️",
            label: "法律纠纷",
            color: "purple",
            desc: "被拘留、逮捕或卷入法律诉讼。",
            steps: [
              "保持沉默：要求联系中国领事官员。",
              "领事探视：领事官员可探视并了解情况。",
              "律师：索取当地律师名单（费用自理）。"
            ],
            action: "启动法律援助接口"
          },
          {
            id: "missing",
            icon: "🔍",
            label: "亲友失联",
            color: "orange",
            desc: "与在海外的亲友失去联系超过24小时。",
            steps: [
              "多方联系：尝试电话、社交软件、同行人员。",
              "报警：向当地警方报案。",
              "求助：联系外交部12308或使领馆协助寻人。"
            ],
            action: "启动搜索信号追踪"
          }
        ]
      },
      download: {
        title: "战术物资补给舱",
        subtitle: "正在建立安全传输链路...",
        storage: "可用存储",
        speed: "传输带宽",
        encryption: "加密等级",
        filterAll: "全部物资",
        items: [
          {
            id: "guide2025",
            title: "海外生存战术手册 v2025",
            type: "manual",
            size: "12.4 MB",
            format: "PDF",
            icon: "📘",
            desc: "包含全球190+国家使领馆联系方式及标准求助流程。",
            color: "blue"
          },
          {
            id: "sos_card",
            title: "SOS 信号发射模板",
            type: "card",
            size: "2.1 MB",
            format: "IMG",
            icon: "🚨",
            desc: "多语言紧急求助卡片，适用于语言不通的紧急状况。",
            color: "red"
          },
          {
            id: "legal_codex",
            title: "外交礼仪与法规协议",
            type: "legal",
            size: "5.8 MB",
            format: "PDF",
            icon: "⚖️",
            desc: "文明旅游公约及常见海外法律红线清单。",
            color: "purple"
          },
          {
            id: "app_mod",
            title: "12308 智能终端模块",
            type: "manual",
            size: "45.2 MB",
            format: "APK",
            icon: "📱",
            desc: "外交部官方客户端，支持一键求助与实时咨询。",
            color: "yellow"
          }
        ]
      }
    }
  },
  [Language.PT]: {
    // ... existing translations ...
    title: "Smart Consular: Proteção Consular",
    welcomeTitle: "Proteção e Assistência Consular Inteligente",
    subtitle: "O seu protetor de segurança no exterior",
    scrollDown: "Role para explorar",
    menu: {
      special: "Atividades Especiais",
      weekly: "Desafio Semanal 'Estrela da Proteção'",
      quiz: "Quiz 'Índice de Segurança'",
      emergency: "Serviços de Emergência",
      sos: "Área de Emergência",
      trip: "Vou Viajar",
      difficulty: "Estou com Dificuldades",
      resources: "Recursos",
      map: "Mapa Global de Riscos",
      podcast: "Podcasts",
      video: "Vídeos Curtos",
      download: "Área de Recursos",
      zones: "Áreas de Serviço",
      consular: "Proteção Consular",
      rights: "Direitos dos Residentes",
      schedule: "Calendário"
    },
    // ... globe, features, notifications, footer ...
    globe: {
      loading: "A carregar mapa global...",
      low: "Países Seguros",
      medium: "Risco Médio",
      high: "Alto Risco",
      safe: "Baixo",
      noData: "Sem Dados",
      source: "Fonte: Safest Countries in the World 2025"
    },
    features: {
      title: "Áreas de Serviço",
      emergency: { title: "Área de Emergência", desc: "Contactos de emergência 24 horas" },
      consular: { title: "Área de Proteção Consular", desc: "Conheça os seus direitos no exterior" },
      rights: { title: "Área de Direitos dos Residentes", desc: "Proteja os seus direitos legítimos" },
      schedule: { title: "Calendário de Eventos", desc: "Últimas atividades promocionais" }
    },
    notifications: {
      title: "Últimas Notificações",
      list: [
        { date: "2025-12-15", content: "O 'Concurso de Conhecimentos de Proteção Consular' será realizado no próximo mês. Inscrevam-se!" },
        { date: "2025-12-10", content: "Novo download do e-book 'Guia de Segurança em Viagens ao Exterior' disponível na Área de Recursos." },
        { date: "2025-12-05", content: "A Área de Emergência atualizou as linhas diretas de proteção consular. Por favor, verifiquem." },
        { date: "2025-12-01", content: "Lançamento da interface em português para melhor servir os utilizadores lusófonos." }
      ]
    },
    footer: {
      links: "Links Relacionados",
      linkNames: {
        mfaChina: "Ministério dos Negócios Estrangeiros da RPC",
        mfaPortugal: "Ministério dos Negócios Estrangeiros de Portugal",
        consularChina: "Rede de Serviços Consulares da China",
        commissionMacau: "Comissariado do MNE na RAEM",
        govMacau: "Portal do Governo da RAEM",
        dsiMacau: "Direcção dos Serviços de Identificação da RAEM",
        school: "Escola Luso-Chinesa Técnico-Profissional"
      },
      contact: "Contacte-nos",
      contactText: "Este site foi desenvolvido de forma autónoma por um grupo de estudantes do ensino secundário, com o objetivo de aumentar o conhecimento público sobre proteção consular, serviços de assistência e direitos de identidade dos residentes. Devido à carga académica dos membros da equipa, as informações do site serão atualizadas e mantidas irregularmente. Agradecemos a compreensão.\n\nSinceramente, agradecemos as suas valiosas opiniões sobre a interface do utilizador. Se encontrar informações incorretas, agradecemos a correção.",
      copyright: "© 2025-2026 Grupo de Tradução e Promoção da Proteção Consular e Direitos dos Residentes do 12º Ano da Escola Luso-Chinesa Técnico-Profissional (Escudos de Quíron). Todos os direitos reservados."
    },
    pages: {
      // ... existing pages ...
      emergency: {
        title: "Área de Emergência",
        tabs: {
          hotlines: "Linhas de Emergência",
          guides: "Guias de Emergência",
          antifraud: "Anti-Fraude"
        },
        hotlines: {
          globalTitle: "Linha Global de Emergência para Proteção e Serviços Consulares do MNE",
          macaoTitle: "Para Residentes de Macau",
          localTitle: "Emergência Local",
          china12308: "Linha Global de Emergência (MNE China)",
          macaoCommissioner: "Telefone de Proteção e Assistência Consular do Comissariado do MNE na RAEM",
          macaoTourism: "Linha de Emergência do Gabinete de Gestão de Crises de Turismo da RAEM (24H)",
          macaoPSP: "Linha de Emergência 24H no Exterior da Polícia de Segurança Pública da RAEM",
          macaoDSI: "Direcção dos Serviços de Identificação do Governo da RAEM (Horário de Expediente)",
          localPolice: "Polícia/Emergência Local",
          desc12308: "Serviço 24h para proteção e assistência consular."
        },
        guides: {
          lostDoc: { 
            title: "Perda de Documentos", 
            steps: [
              "Participar à polícia local e obter o relatório.",
              "Residentes de Macau: usar 'Conta Única de Macau' ou site da DSI para 'Assistência em Viagem'.",
              "Contactar a Embaixada/Consulado da China mais próximo.",
              "Preparar fotos e cópias de documentos."
            ] 
          },
          arrested: { 
            title: "Detenção/Prisão", 
            steps: [
              "Manter a calma. Tem direito a contactar o Consulado da China.",
              "O funcionário consular pode visitar e entender a situação.",
              "O funcionário pode fornecer lista de advogados (custos próprios).",
              "Relate qualquer tratamento injusto."
            ] 
          },
          injury: { 
            title: "Ferimentos/Doença", 
            steps: [
              "Ligar para a emergência médica local imediatamente.",
              "Contactar o Consulado para ajudar a informar a família.",
              "Custos médicos são da responsabilidade do próprio/seguro.",
              "Guardar todos os relatórios médicos e recibos."
            ] 
          },
          missing: { 
            title: "Desaparecimento", 
            steps: [
              "Tentar contactar por todos os meios (telefone, redes sociais).",
              "Participar à polícia local.",
              "Pedir assistência ao Consulado da China.",
              "Fornecer detalhes (passaporte, aparência, itinerário)."
            ] 
          },
          rights: {
            canDo: ["Recomendar advogados/médicos", "Ajudar a contactar família", "Emitir documentos de viagem", "Assistir na evacuação em crises"],
            cannotDo: ["Intervir na justiça local", "Pagar multas/custos médicos", "Ser fiador", "Garantir tratamento especial"]
          }
        },
        antifraud: {
          sixDontsTitle: "Os 'Seis Nãos'",
          sixDonts: [
            "NÃO transfira dinheiro a quem diz ser do Consulado/Polícia.",
            "NÃO pague 'cauções' para 'contas seguras'.",
            "NÃO acredite em investimentos 'sem risco' e 'lucro garantido'.",
            "NÃO troque moeda ilegalmente pedindo transferência antecipada.",
            "NÃO acredite se o Consulado recomendar empresas privadas.",
            "NÃO transfira a conhecidos sem confirmar por voz."
          ],
          commonScamsTitle: "Tipos de Burlas Comuns",
          scams: [
            { name: "Falsa Autoridade", desc: "Alegam lavagem de dinheiro/drogas, exigem verificação de fundos." },
            { name: "Falso Sequestro", desc: "Isolam a vítima e exigem resgate à família." },
            { name: "Burla de Câmbio", desc: "Troca privada de moeda, bloqueio após transferência." },
            { name: "Abate de Porcos", desc: "Romance online para induzir investimento/jogo." }
          ],
          tools: "Recomenda-se descarregar a APP 'National Anti-Fraud Center'."
        },
        back: "Voltar"
      },
      consular: {
        title: "Proteção e Assistência Consular",
        definition: {
          title: "O que é?",
          text: "A proteção consular é a assistência prestada pelas missões diplomáticas chinesas a cidadãos no exterior quando os seus direitos legítimos são violados."
        },
        target: {
          title: "Quem é abrangido?",
          text: "Todos os cidadãos com nacionalidade chinesa, incluindo residentes de Hong Kong, Macau e Taiwan, quer estejam estabelecidos no estrangeiro ou em viagem temporária."
        },
        scope: {
          title: "Deveres Consulares",
          canTitle: "O que PODEM fazer",
          canList: [
            "Recomendar advogados, tradutores e médicos.",
            "Ajudar na evacuação em caso de grandes emergências.",
            "Visitar cidadãos detidos ou presos.",
            "Ajudar a contactar familiares na China.",
            "Assistir em caso de acidentes graves.",
            "Emitir documentos de viagem perdidos."
          ],
          cannotTitle: "O que NÃO PODEM fazer",
          cannotList: [
            "Intervir em disputas comerciais ou laborais.",
            "Investigar crimes diretamente.",
            "Interferir na justiça local.",
            "Pagar despesas (hotéis, advogados, multas).",
            "Obter vistos ou autorizações de residência.",
            "Servir de fiador."
          ]
        },
        tips: {
          title: "Notas para Residentes de Macau",
          list: [
            { title: "Nacionalidade", content: "A China não reconhece dupla nacionalidade, mas residentes de Macau com ascendência portuguesa podem escolher." },
            { title: "Perda de Documentos", content: "Use a aplicação 'Conta Única de Macau' para pedir ajuda." },
            { title: "Registo", content: "Registe-se no 'China Consular Service' antes de viajar." },
            { title: "Respeito", content: "Respeite as leis e costumes locais." }
          ]
        },
        back: "Voltar"
      },
      rights: {
        title: "Área de Direitos dos Residentes",
        subtitle: "A Lei Básica de Macau garante os seus direitos fundamentais",
        intro: "Residentes da RAEM, incluindo residentes permanentes e não permanentes. O Capítulo III da Lei Básica estipula os amplos direitos e liberdades dos residentes.",
        cards: [
          {
            icon: "🛂",
            title: "Entrada, Saída e Residência",
            desc: "Liberdade de movimento e residência.",
            details: [
              "Residentes permanentes têm direito de residência em Macau.",
              "Liberdade para entrar e sair da RAEM.",
              "Não sujeitos a condições de permanência nem deportação.",
              "Direito ao Bilhete de Identidade de Residente Permanente."
            ]
          },
          {
            icon: "⚖️",
            title: "Direitos Legais e Políticos",
            desc: "Igualdade perante a lei.",
            details: [
              "Igualdade perante a lei, sem discriminação.",
              "Direito de votar e ser eleito (residentes permanentes).",
              "Liberdade de expressão, imprensa e publicação.",
              "Liberdade de associação, reunião, desfile e manifestação."
            ]
          },
          {
            icon: "🛡️",
            title: "Liberdade Pessoal e Dignidade",
            desc: "Proteção contra detenção arbitrária.",
            details: [
              "A liberdade pessoal é inviolável; sem detenção ilegal.",
              "A dignidade humana é inviolável; proibição de tortura.",
              "O domicílio é inviolável; proibição de buscas ilegais.",
              "Liberdade e sigilo de comunicação protegidos por lei."
            ]
          },
          {
            icon: "🎓",
            title: "Direitos Sociais e Culturais",
            desc: "Educação, religião e trabalho.",
            details: [
              "Liberdade de crença religiosa.",
              "Liberdade de escolha de profissão e trabalho.",
              "Liberdade de educação e pesquisa académica.",
              "Direito ao bem-estar social e segurança na reforma."
            ]
          }
        ],
        nationality: {
          title: "Nota Importante sobre Nacionalidade",
          content: "A Lei da Nacionalidade da RPC aplica-se na RAEM. Residentes de ascendência chinesa nascidos em território chinês (incluindo Macau) são cidadãos chineses.",
          note: "Nota Especial: Residentes de ascendência chinesa e portuguesa podem escolher entre nacionalidade chinesa ou portuguesa. A escolha de uma implica a renúncia da outra na RAEM (para efeitos de nacionalidade chinesa)."
        },
        back: "Voltar"
      },
      schedule: {
        title: "Plano de Voo de Segurança",
        subtitle: "O seu horário de proteção consular e segurança",
        filters: {
          all: "Todos os Voos",
          seminar: "Seminários",
          competition: "Concursos",
          community: "Comunidade"
        },
        status: {
          boarding: "Embarque (Aberto)",
          inflight: "No Ar (Em Curso)",
          landed: "Aterrou (Concluído)"
        },
        events: [
          {
            id: 1,
            date: "2025-11-15",
            time: "14:30",
            title: "Proteção Consular no Campus",
            location: "Auditório da Escola Luso-Chinesa Técnico-Profissional",
            type: "seminar",
            status: "boarding",
            desc: "Preparação antes da partida e guia anti-fraude para estudantes finalistas."
          },
          {
            id: 2,
            date: "2025-12-01",
            time: "09:00",
            title: "Concurso de Conhecimentos de Proteção Consular",
            location: "Online",
            type: "competition",
            status: "boarding",
            desc: "Desafie os seus conhecimentos e ganhe prémios! Abrange vistos e emergências."
          },
          {
            id: 3,
            date: "2026-01-10",
            time: "15:00",
            title: "Anti-Fraude: Detetar Deepfakes AI",
            location: "Centro de Ciência de Macau",
            type: "seminar",
            status: "boarding",
            desc: "Especialistas revelam as mais recentes fraudes tecnológicas e 'sequestros virtuais'."
          },
          {
            id: 4,
            date: "2026-02-05",
            time: "10:00",
            title: "Dia Aberto da Linha 12308",
            location: "Comissariado do MNE na RAEM",
            type: "community",
            status: "boarding",
            desc: "Conheça a história por trás da linha direta global de proteção consular."
          },
          {
            id: 5,
            date: "2025-10-01",
            time: "10:00",
            title: "Semana de Viagens Seguras",
            location: "Largo do Senado",
            type: "community",
            status: "landed",
            desc: "Distribuição de cartões de emergência e promoção do miniprograma '12308'."
          }
        ],
        back: "Voltar"
      },
      quiz: {
        title: "Desafio 'Estrela da Proteção'",
        missionTitle: "Missão Semanal: Caçador de Fraudes",
        missionDesc: "Código 'Seis Nãos'. A sua missão é identificar crises de fraude. Decisões erradas custarão caro. Boa sorte, Agente.",
        startBtn: "ACEITAR MISSÃO",
        questionCount: "CRISE",
        questions: [
          {
            id: 1,
            scenario: "Recebe uma chamada do 'Consulado' a dizer que está envolvido em lavagem de dinheiro e exige transferência para 'conta segura'.",
            options: [
              { text: "Transferir imediatamente", isCorrect: false, feedback: "Erro! O Consulado nunca pede transferências!" },
              { text: "Desligar, é fraude", isCorrect: true, feedback: "Correto! Contas seguras não existem." },
              { text: "Dar a senha do banco", isCorrect: false, feedback: "Perigo! Nunca revele a sua senha." }
            ]
          },
          {
            id: 2,
            scenario: "Um amigo online sugere um investimento em criptomoedas com 'lucro garantido' através de uma APP específica.",
            options: [
              { text: "Pedir dinheiro emprestado para investir", isCorrect: false, feedback: "Erro! Não existe lucro garantido." },
              { text: "Tentar com pouco dinheiro", isCorrect: false, feedback: "Erro! É um esquema 'Pig Butchering'." },
              { text: "Recusar e bloquear", isCorrect: true, feedback: "Correto! Investimentos sem risco são fraude." }
            ]
          },
          {
            id: 3,
            scenario: "Precisa de trocar moeda no estrangeiro. Alguém no WeChat oferece uma taxa ótima mas pede transferência primeiro.",
            options: [
              { text: "Transferir, confiar no compatriota", isCorrect: false, feedback: "Erro! Troca privada é muito arriscada." },
              { text: "Encontrar pessoalmente", isCorrect: false, feedback: "Perigo! Risco de roubo." },
              { text: "Usar banco oficial", isCorrect: true, feedback: "Correto! Use sempre canais oficiais." }
            ]
          }
        ],
        results: {
          perfect: { title: "Guardião Lendário", desc: "Julgamento perfeito! Domina os 'Seis Nãos' e nenhum burlão o consegue enganar." },
          good: { title: "Diplomata Sénior", desc: "Bom trabalho, mas mantenha-se alerta. Nunca confie em chamadas desconhecidas." },
          fail: { title: "Agente Estagiário", desc: "Missão falhada. A sua consciência de segurança é fraca. Leia o guia anti-fraude imediatamente." },
          retry: "REINICIAR",
          back: "VOLTAR À BASE"
        }
      },
      safetyQuiz: {
        title: "I.R.A.S. Avaliação de Risco Inteligente",
        intro: {
          welcome: "A Identificar...",
          desc: "Bem-vindo ao I.R.A.S. O sistema irá analisar a sua consciência de segurança e gerar um 'Radar de Segurança' exclusivo.",
          startBtn: "Iniciar Digitalização"
        },
        categories: {
          fraud: "Defesa Fraude",
          prep: "Preparação",
          legal: "Leis",
          emergency: "Emergência"
        },
        questions: [
          {
            id: 1,
            category: "prep",
            question: "[Digitalização Preparação] Verificou a validade do seu passaporte. Quanto tempo deve restar?",
            options: [
              { text: "Desde que não esteja expirado", score: 3 },
              { text: "Pelo menos 6 meses", score: 10 },
              { text: "Não sei, nunca vi", score: 0 }
            ]
          },
          {
            id: 2,
            category: "emergency",
            question: "[Digitalização Com.] Em caso de emergência, qual é o número da linha global de proteção consular da China?",
            options: [
              { text: "12345", score: 0 },
              { text: "12308", score: 10 },
              { text: "911", score: 5 }
            ]
          },
          {
            id: 3,
            category: "fraud",
            question: "[Interceção de Sinal] Recebe uma chamada da 'Polícia' exigindo transferência para 'conta segura'. O sistema sugere?",
            options: [
              { text: "Desligar imediatamente", score: 10 },
              { text: "Transferir um pouco", score: 0 },
              { text: "Duvidar, pedir número de agente", score: 5 }
            ]
          },
          {
            id: 4,
            category: "legal",
            question: "[Digitalização Permissões] Se for detido no estrangeiro, o que pode o funcionário consular fazer?",
            options: [
              { text: "Ordenar a libertação", score: 0 },
              { text: "Fornecer advogados e visitar", score: 10 },
              { text: "Pagar a fiança", score: 0 }
            ]
          },
          {
            id: 5,
            category: "fraud",
            question: "[Digitalização Rede] Alguém nas redes sociais recomenda investimento 'sem risco'. A sua decisão?",
            options: [
              { text: "Tentar com pouco dinheiro", score: 0 },
              { text: "É fraude, bloquear", score: 10 },
              { text: "Pode ser verdade, observar", score: 2 }
            ]
          },
          {
            id: 6,
            category: "emergency",
            question: "[Digitalização Ativos] O passaporte foi roubado no estrangeiro. O seu primeiro procedimento?",
            options: [
              { text: "Ir para o aeroporto", score: 0 },
              { text: "Polícia e Consulado", score: 10 },
              { text: "Pedir ajuda nas redes sociais", score: 2 }
            ]
          },
          {
            id: 7,
            category: "prep",
            question: "[Backup de Dados] Antes de partir, registou-se na plataforma 'Ministério dos Negócios Estrangeiros'?",
            options: [
              { text: "Sim, registado", score: 10 },
              { text: "Ouvi falar, mas não fiz", score: 5 },
              { text: "O que é isso?", score: 0 }
            ]
          },
          {
            id: 8,
            category: "legal",
            question: "[Digitalização Comportamento] Com visto de turista, pode trabalhar legalmente?",
            options: [
              { text: "Se ninguém verificar, sim", score: 0 },
              { text: "Proibido, é ilegal", score: 10 },
              { text: "Ajudar amigos não conta", score: 3 }
            ]
          },
          {
            id: 9,
            category: "fraud",
            question: "[Digitalização Transação] Grupo WeChat oferece 'taxa preferencial', mas pede transferência primeiro. Risco?",
            options: [
              { text: "Alto risco, recusar", score: 10 },
              { text: "Risco médio, ver credibilidade", score: 2 },
              { text: "Baixo risco, ajuda mútua", score: 0 }
            ]
          },
          {
            id: 10,
            category: "prep",
            question: "[Digitalização Defesa] Sobre o seguro de viagem, a sua configuração é?",
            options: [
              { text: "Cobertura total (médica/acidente)", score: 10 },
              { text: "Nenhum", score: 0 },
              { text: "Apenas atraso de voo", score: 5 }
            ]
          }
        ],
        result: {
          analyzing: "A analisar dados da rede neural...",
          title: "Relatório de Avaliação",
          scoreText: "Índice Geral",
          advice: {
            high: "Classificação: S [Diplomata Sénior]. Consciência de segurança impecável. Modelo para viajantes.",
            medium: "Classificação: A [Explorador Cauteloso]. Tem noções básicas, mas precisa de melhorar alguns módulos.",
            low: "Classificação: C [Novato em Risco]. A firewall de segurança é frágil! Leia os guias urgentemente!"
          },
          retry: "Recalibrar",
          home: "Voltar à Base"
        }
      },
      trip: {
        title: "Gerador de Escudo de Segurança",
        subtitle: "Complete os itens para carregar a sua viagem",
        status: {
          charging: "A Carregar Energia...",
          ready: "Escudo Operacional"
        },
        modules: {
          docs: {
            title: "Autenticação (Documentos)",
            items: [
              { id: 'passport', text: "Validade do Passaporte > 6 meses" },
              { id: 'visa', text: "Visto de destino obtido" },
              { id: 'copy', text: "Cópias de segurança (Digital+Papel)" }
            ]
          },
          health: {
            title: "Suporte de Vida (Saúde & Finanças)",
            items: [
              { id: 'insurance', text: "Seguro de viagem comprado" },
              { id: 'vaccine', text: "Vacinas tomadas / Medicamentos" },
              { id: 'bank', text: "Banco notificado sobre viagem" }
            ]
          },
          comm: {
            title: "Ligação (Comunicação)",
            items: [
              { id: 'register', text: "Registo 'Viagem ao Exterior' feito" },
              { id: 'roaming', text: "Roaming/Cartão SIM ativado" },
              { id: 'contacts', text: "Números de emergência 12308 guardados" }
            ]
          },
          law: {
            title: "Protocolo (Leis & Costumes)",
            items: [
              { id: 'customs', text: "Verificar itens proibidos (Alfândega)" },
              { id: 'laws', text: "Conhecer leis locais (Drones/Álcool)" },
              { id: 'culture', text: "Respeitar costumes e religião" }
            ]
          }
        },
        back: "Voltar à Base"
      },
      riskMap: {
        title: "G.S.S.A.S. Sistema Global de Consciência Situacional de Segurança",
        searchPlaceholder: "Introduzir coordenadas do país...",
        stats: {
          safetyIndex: "Índice de Segurança",
          peaceIndex: "Índice de Paz",
          riskLevel: "Nível de Ameaça",
          globalRank: "Rank Global"
        },
        levels: {
          low: "Baixo Risco",
          medium: "Risco Médio",
          high: "Alto Risco",
          unknown: "Dados Desconhecidos"
        },
        noSelection: "A aguardar bloqueio de alvo...",
        ranking: "Ranking do Espectro de Segurança"
      },
      podcast: {
        title: "Estação Global de Interceção de Sinais",
        subtitle: "A verificar frequências de proteção consular...",
        status: {
          offline: "Standby - A aguardar transmissão",
          broadcasting: "A receber sinal - Ligação encriptada"
        },
        listTitle: "Registos Intercetados (Logs)",
        controls: {
          play: "Iniciar Descodificação",
          pause: "Pausar Transmissão",
          next: "Verificar Próxima Frequência",
          prev: "Reconectar Anterior"
        },
        episodes: [
          {
            id: "ep1",
            title: "EP.01: O Mistério do Passaporte Perdido",
            duration: "12:34",
            freq: "98.4 MHz",
            desc: "Guia de sobrevivência de 24 horas após perder o passaporte no estrangeiro."
          },
          {
            id: "ep2",
            title: "EP.02: Defesa Contra Ciberfraude",
            duration: "08:15",
            freq: "102.1 MHz",
            desc: "Revelando os princípios técnicos e soluções para deepfakes de IA e sequestros virtuais."
          },
          {
            id: "ep3",
            title: "EP.03: Alerta Vermelho na Fronteira",
            duration: "15:20",
            freq: "88.9 MHz",
            desc: "Como salvar-se em zonas de conflito? Histórias reais de evacuação."
          },
          {
            id: "ep4",
            title: "EP.04: Caminhante na Fronteira Legal",
            duration: "10:45",
            freq: "95.5 MHz",
            desc: "Comportamentos que pensa serem legais, mas que podem levar à prisão no estrangeiro."
          }
        ]
      },
      video: {
        title: "V.I.D. Base de Dados de Inteligência Visual",
        subtitle: "A aceder à rede de vigilância consular...",
        viewerCount: "Agentes Online",
        bandwidth: "Taxa de Transferência",
        playBtn: "Iniciar Visualização",
        listTitle: "Fitas de Dados (Data Tapes)",
        categories: {
          doc: "Documentos",
          fraud: "Anti-Fraude",
          emergency: "Emergência"
        },
        videos: [
          {
            id: "v1",
            title: "Plano de Emergência: Passaporte Perdido",
            category: "doc",
            length: "01:00",
            views: "8,942",
            desc: "Urgente! Procedimentos padrão após perda de passaporte.",
            thumbnailColor: "bg-red-900"
          },
          {
            id: "v2",
            title: "Identificar Sinais de Sequestro Virtual",
            category: "fraud",
            length: "00:58",
            views: "12,403",
            desc: "Como os burlões falsificam áudio? Detete em um minuto.",
            thumbnailColor: "bg-purple-900"
          },
          {
            id: "v3",
            title: "Scan de Proibições de Trânsito",
            category: "doc",
            length: "01:05",
            views: "6,211",
            desc: "Não leve estes itens! Visualização de listas proibidas.",
            thumbnailColor: "bg-blue-900"
          },
          {
            id: "v4",
            title: "Rota de Evacuação em Tumultos",
            category: "emergency",
            length: "01:12",
            views: "5,590",
            desc: "Planeamento de rotas de fuga em zonas de conflito.",
            thumbnailColor: "bg-orange-900"
          }
        ]
      },
      difficulty: {
        title: "Terminal de Diagnóstico de Emergência",
        subtitle: "Selecione a anomalia atual...",
        systemStatus: "Estado do Sistema: Aguardando Entrada",
        protocolLabel: "Protocolo de Resposta Carregado",
        categories: [
          {
            id: "money",
            icon: "💸",
            label: "Sem Dinheiro",
            color: "yellow",
            desc: "Dinheiro e cartões roubados ou perdidos, sem recursos.",
            steps: [
              "Western Union: Contacte a família para transferência rápida.",
              "Empréstimo Temporário: Pedir ajuda ao Consulado (requer garantia de reembolso).",
              "Congelar Contas: Contacte o banco imediatamente."
            ],
            action: "Iniciar Congelamento de Ativos"
          },
          {
            id: "doc",
            icon: "🛂",
            label: "Perda de Docs",
            color: "blue",
            desc: "Passaporte perdido/roubado, impossível regressar.",
            steps: [
              "Polícia: Participar e obter o relatório.",
              "Substituição: Ir ao Consulado Chinês mais próximo.",
              "Macau: Usar 'Conta Única de Macau' para assistência."
            ],
            action: "Iniciar Recuperação de Identidade"
          },
          {
            id: "health",
            icon: "🏥",
            label: "Doença Súbita",
            color: "red",
            desc: "Doença grave ou acidente a necessitar de ajuda médica.",
            steps: [
              "Emergência: Ligar para o número local.",
              "Seguro: Ativar assistência médica.",
              "Consulado: Pedir ajuda para contactar família."
            ],
            action: "Iniciar Suporte Médico"
          },
          {
            id: "legal",
            icon: "⚖️",
            label: "Problemas Legais",
            color: "purple",
            desc: "Detido, preso ou envolvido em processo judicial.",
            steps: [
              "Silêncio: Exigir contactar o funcionário consular.",
              "Visita: O Consulado pode visitar.",
              "Advogado: Pedir lista de advogados locais."
            ],
            action: "Iniciar Interface Legal"
          },
          {
            id: "missing",
            icon: "🔍",
            label: "Desaparecido",
            color: "orange",
            desc: "Sem contacto com familiares há mais de 24h.",
            steps: [
              "Contactos Múltiplos: Telefone, redes sociais, amigos.",
              "Polícia: Participar o desaparecimento.",
              "Ajuda: Contactar 12308 ou Consulado."
            ],
            action: "Iniciar Rastreio de Sinal"
          }
        ]
      },
      download: {
        title: "Cápsula de Abastecimento Tático",
        subtitle: "A estabelecer ligação segura de transferência...",
        storage: "Armazenamento",
        speed: "Largura de Banda",
        encryption: "Encriptação",
        filterAll: "Todos os Itens",
        items: [
          {
            id: "guide2025",
            title: "Manual Tático de Sobrevivência v2025",
            type: "manual",
            size: "12.4 MB",
            format: "PDF",
            icon: "📘",
            desc: "Contactos de 190+ embaixadas e protocolos de ajuda padrão.",
            color: "blue"
          },
          {
            id: "sos_card",
            title: "Modelo de Emissor de Sinal SOS",
            type: "card",
            size: "2.1 MB",
            format: "IMG",
            icon: "🚨",
            desc: "Cartão multilingue para emergências em barreiras linguísticas.",
            color: "red"
          },
          {
            id: "legal_codex",
            title: "Protocolos Legais e Diplomáticos",
            type: "legal",
            size: "5.8 MB",
            format: "PDF",
            icon: "⚖️",
            desc: "Convenção de turismo civilizado e lista de leis locais críticas.",
            color: "purple"
          },
          {
            id: "app_mod",
            title: "Módulo Terminal Inteligente 12308",
            type: "manual",
            size: "45.2 MB",
            format: "APK",
            icon: "📱",
            desc: "Cliente oficial do MNE para assistência e consultoria em tempo real.",
            color: "yellow"
          }
        ]
      }
    }
  }
};