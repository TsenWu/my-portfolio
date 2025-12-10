const portfolioData = [
  // --- 1. 海報類 (多圖模式) ---
  {
    category: "posters",
    title: "宣傳海報設計 1 (多圖展示)",
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
    title: "宣傳海報設計 2 (多圖展示)",
    images: [
       "posters/金鍏_海報B (1).jpg",
       "posters/金鍏_海報B (2).jpg"
    ],
    description: "宣傳光板燈之主視覺海報。"
  },

  // --- 2. 型錄類 (OneDrive PDF) ---
  {
    category: "catalogs",
    title: "金鍏電子 V.13版產品型錄",
    image: "catalogs/金鍏_V.13_公司產品型錄 (1).png",
    link: "https://1drv.ms/b/c/343d546307ac6ea3/IQCjbqwHY1Q9IIA0Ik8CAAAAAfHX2pXVt08S_ruGi7y56Nk?e=34lcEI",
    type: "pdf"
  },

  // --- 3. 簡報類 (混搭示範) ---
  {
    category: "presentations",
    title: "碳費徵收相關機制簡報 (Canva)",
    image: "presentations/(延伸)碳費徵收相關機制簡報.jpg",
    link: "https://www.canva.com/design/DAGVf0SdmTs/nIGzL34ekdDe7TorcfpU9A/view",
    type: "canva"
  },
  {
    category: "presentations",
    title: "產品技術分析簡報 (PDF)",
    // 這裡我補上了 presentations/ 路徑，並加上了逗號
    images: [ 
        "presentations/金鍏_利弊分析書冊 (1).png",
        "presentations/金鍏_利弊分析書冊 (2).jpg",
        "presentations/金鍏_利弊分析書冊 (2).png",
        "presentations/金鍏_利弊分析書冊 (3).png"
    ],
    link: "https://1drv.ms/b/c/343d546307ac6ea3/IQCjbqwHY1Q9IIA0tVUCAAAAAZ8FwBbXR9TGI9NgOjhsC-s?e=RukvHF", 
    type: "pdf"
  },
    
  // --- 4. 周邊設計 (merchandise) ---
  {
    category: "merchandise",
    title: "企業形象 T-shirt",
    images: [
        "merchandise/AIWA_衣服 (1).jpg"
    ],
    description: "員工制服與活動贈品設計。"
  }
];