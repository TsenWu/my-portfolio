const portfolioData = [
  // --- 1. 海報類 (多圖模式) ---
  {
    category: "posters",
    title: "金鍏電子_宣傳海報設計 1 (多圖展示)",
    images: [
      "posters/金鍏_海報A (1).jpg", 
      "posters/金鍏_海報A (2).jpg", 
      "posters/金鍏_海報A (3).jpg", 
      "posters/金鍏_海報A (4).jpg" 
    ],
    description: "宣傳光板燈之主視覺海報 (點擊可看更多細節)。"
  },
  {
    category: "posters",
    title: "金鍏電子_宣傳海報設計 2 (多圖展示)",
    images: [
       "posters/金鍏_海報B (1).jpg",
       "posters/金鍏_海報B (2).jpg"
    ],
    description: "宣傳光板燈之主視覺海報。"
  },
  {
    category: "posters",
    title: "金鍏電子_宣傳海報設計 3 (多圖展示)",
    images: [
       "posters/金鍏_海報C (1).jpg",
       "posters/金鍏_海報C (2).jpg",
       "posters/金鍏_海報C (3).jpg",
    ],
    description: "宣傳光板燈之主視覺海報。"
  },
  {
    category: "posters",
    title: "愛華國際_電視海報 (多圖展示)",
    images: [
       "posters/AIWA-海報A_01.jpg",
       "posters/AIWA-海報A_02.jpg",
       "posters/AIWA-海報B_01.jpg",
       "posters/AIWA-海報B_02.jpg",
       "posters/AIWA-海報C_01.jpg",
       "posters/AIWA-海報C_02.jpg"
    ],
    description: "為各國代理製作之電視主視覺海報。"
  },
  {
    category: "posters",
    title: "虎山實業_汽車配件海報 (多圖展示)",
    images: [
       "posters/虎山-海報內把手 (2).jpg",
       "posters/虎山-海報升降機 (2).jpg",
       "posters/虎山-海報外把手 (2).jpg",
       "posters/虎山-海報扣件 (2).jpg",
    ],
    description: "汽車各類配件之主視覺海報。"
  },
  {
    category: "posters",
    title: "虎山實業_汽車配件海報 (多圖展示)",
    images: [
       "posters/虎山-海報超長幅 (1).jpg",
       "posters/虎山-海報超長幅 (2).jpg",
    ],
    description: "汽車各類配件之主視覺海報。"
  },
  {
    category: "posters",
    title: "虎山實業_主視覺海報 (多圖展示)",
    images: [
       "posters/虎山-海報虎頭 (1).jpg",
       "posters/虎山-海報虎頭 (2).jpg",
       "posters/虎山-海報虎頭 (3).jpg",
       "posters/虎山-海報虎頭 (4).jpg",
    ],
    description: "公司形象主視覺海報及周邊。"
  },

  // --- 2. 型錄類 (OneDrive PDF) ---
  {
    category: "catalogs",
    title: "金鍏電子 V.13版產品型錄",
    images: [
        "catalogs/金鍏_V.13_公司產品型錄 (1).png", 
        "catalogs/金鍏_V.13_公司產品型錄 (2).png", 
        "catalogs/金鍏_V.13_公司產品型錄 (3).png",
        "catalogs/金鍏_V.13_公司產品型錄 (4).png",
        "catalogs/金鍏_V.13_公司產品型錄 (5).png",
        "catalogs/金鍏_V.13_公司產品型錄 (6).jpg",
        "catalogs/金鍏_V.13_公司產品型錄 (7).jpg"
    ],
    link: "https://1drv.ms/b/c/343d546307ac6ea3/IQSjbqwHY1Q9IIA0Ik8CAAAAAYHhTU3axiEVsDFr0sGlgkg",
    type: "pdf"
  },
  {
    category: "catalogs",
    title: "愛華國際公司簡介",
    images: [
        "catalogs/AIWA_公司簡介 (1).jpg", 
        "catalogs/AIWA_公司簡介 (2).png"      
    ],
    link: "https://1drv.ms/b/c/343d546307ac6ea3/IQSjbqwHY1Q9IIA0hfsAAAAAAe1iHKs8JDa8vU4snj_z9u8",
    type: "pdf"
  },
  {
    category: "catalogs",
    title: "愛華國際產品介紹_直式中文版",
    images: [
        "catalogs/AIWA_型錄 (2).png"
    ],
    link: "https://1drv.ms/b/c/343d546307ac6ea3/IQSjbqwHY1Q9IIA0wkIAAAAAAbGLxceR5AVdUbTwbrjBpaY",
    type: "pdf"
  },
  {
    category: "catalogs",
    title: "愛華國際產品介紹_Earphone",
    images: [
        "catalogs/AIWA_型錄_耳機系列 (1).png", 
        "catalogs/AIWA_型錄_耳機系列 (2).png"      
    ],
    link: "https://1drv.ms/b/c/343d546307ac6ea3/IQSjbqwHY1Q9IIA0XEIAAAAAAf50WT2-cCTx2t2UBeNLj38",
    type: "pdf"
  },
  {
    category: "catalogs",
    title: "愛華國際產品介紹_遠傳藍牙喇叭專案",
    images: [
        "catalogs/AIWA_型錄 (1).png"
    ],
    link: "https://1drv.ms/b/c/343d546307ac6ea3/IQSjbqwHY1Q9IIA0t0IAAAAAARcvUACxaaiaJCapo9498pg",
    type: "pdf"
  },

  // --- 3. 簡報類 (混搭示範) ---
  {
    category: "presentations",
    title: "碳費徵收相關機制簡報 (Canva)",
    // 如果沒有 images 陣列，請確保至少有一個 image 欄位作為封面
    image: "presentations/(延伸)碳費徵收相關機制簡報.jpg", 
    link: "https://www.canva.com/design/DAGVf0SdmTs/nIGzL34ekdDe7TorcfpU9A/view?embed",
    type: "canva"
  },
  {
    category: "presentations",
    title: "產品技術分析簡報 (PDF)",
    images: [ 
        "presentations/金鍏_利弊分析書冊 (1).png",
        "presentations/金鍏_利弊分析書冊 (2).jpg",
        "presentations/金鍏_利弊分析書冊 (2).png",
        "presentations/金鍏_利弊分析書冊 (3).png"
    ],
    link: "https://1drv.ms/b/c/343d546307ac6ea3/IQCjbqwHY1Q9IIA0tVUCAAAAAZ8FwBbXR9TGI9NgOjhsC-s?e=RukvHF", 
    type: "pdf"
  },

  // --- 4. 網站設計類 (混搭示範) ---
  {
    category: "web-design",
    title: "金鍏電子_網站架構提報",
    images: [
        "web-design/金鍏網頁樹狀架構圖.jpg",
    ],
    description: "構思整個網站架構並提交給網頁設計公司。"
  },
  {
    category: "web-design",
    title: "金鍏電子_網頁畫面一覽",
    images: [
        "web-design/GW官網_桌電0.png",
        "web-design/GW官網_桌電1.jpg",
        "web-design/GW官網_桌電3.jpg",
        "web-design/GW官網_桌電4.jpg",
        "web-design/GW官網_手機1.jpg",
        "web-design/GW官網_手機2.jpg",
        "web-design/GW官網_手機3.jpg",
        "web-design/GW官網_手機4.jpg",
    ],
    description: "網頁畫面在電腦版&手機版呈現"
  },
    
  // --- 5. 周邊設計 (merchandise) ---
  {
    category: "merchandise",
    title: "企業形象 T-shirt",
    images: [
        "merchandise/AIWA_衣服 (1).jpg",
        "merchandise/AIWA_衣服 (2).jpg"
    ],
    description: "員工制服與活動贈品設計。"
  },
  {
    category: "merchandise",
    title: "企業形象 收納袋",
    images: [
        "merchandise/AIWA_收納袋.jpg"
    ],
    description: "無線藍牙耳機活動贈品設計。"
  },
  {
    category: "merchandise",
    title: "企業形象 佈置旗幟",
    images: [
        "merchandise/AIWA_旗幟 (1).jpg",
        "merchandise/AIWA_旗幟 (2).jpg",
        "merchandise/AIWA_旗幟 (3).jpg",
    ],
    description: "無線藍牙耳機活動贈品設計。"
  },
];