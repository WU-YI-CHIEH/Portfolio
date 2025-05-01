const container = document.getElementById('homePage');
    let currentPage = null;
  
    function expandOptions() {
      container.classList.add('active');
      const screenWidth = window.innerWidth;
  
  if (screenWidth > 768) {
    container.classList.add('active');
  } else {
    container.style.flexDirection = 'column';
    container.classList.add('active');
  }
    }
  
    container.addEventListener('mouseleave', () => {
      container.classList.remove('active');
    });
  
    function goToPage(pageId) {
      if (currentPage) {
        const oldPage = document.getElementById(currentPage + 'Page');
        if (oldPage) {
          oldPage.classList.remove('slide-in');
          oldPage.classList.add('slide-out');
          setTimeout(() => {
            oldPage.style.display = 'none';
            oldPage.classList.remove('slide-out');
          }, 600);
        }
      }
  
      const newPage = document.getElementById(pageId + 'Page');
      newPage.style.display = 'flex';
      newPage.classList.add('slide-in');
      container.classList.add('hide');
      currentPage = pageId;
    }
    function goToAboutPage(pageNumber) {
        document.getElementById('aboutPage1').style.display = pageNumber === 1 ? 'flex' : 'none';
        document.getElementById('aboutPage2').style.display = pageNumber === 2 ? 'flex' : 'none';
      }
  
    function goToWebsitePage(pageNumber) {
      // 切換 Website 子頁
      document.getElementById('webPage1').style.display = pageNumber === 1 ? 'flex' : 'none';
      document.getElementById('webPage2').style.display = pageNumber === 2 ? 'flex' : 'none';
    }

    function goToGamePage(pageNumber) {
  document.getElementById('gamePage1').style.display = pageNumber === 1 ? 'flex' : 'none';
  document.getElementById('gamePage2').style.display = pageNumber === 2 ? 'flex' : 'none';
}

function goToElsePage(pageNumber) {
  document.getElementById('elsePage1').style.display = pageNumber === 1 ? 'flex' : 'none';
  document.getElementById('elsePage2').style.display = pageNumber === 2 ? 'flex' : 'none';
  document.getElementById('elsePage3').style.display = pageNumber === 3 ? 'flex' : 'none';
}
  
    function goHome() {
      if (currentPage) {
        const fullPage = document.getElementById(currentPage + 'Page');
        if (fullPage) {
          fullPage.classList.remove('slide-in');
          fullPage.classList.add('slide-out');
          setTimeout(() => {
            fullPage.style.display = 'none';
            fullPage.classList.remove('slide-out');
            currentPage = null;
          }, 600);
        }
      }
  
      container.classList.remove('hide');
    }

    const imageLists = {
        'GAMEImage2': ['IMAGE/有購急.png', 'IMAGE/有購急2.png'],
        'WEBSITEImage': ['IMAGE/浪生命不斷線.png','IMAGE/DOG2.png' ],
        'WEBSITEImage2': ['IMAGE/悼源圖.png', 'IMAGE/紀念牆.png','IMAGE/紀念牆2.png'],
        'ELSEImage': ['IMAGE/onion.png', 'IMAGE/Mockup.ONION.png'],
        // 你可以繼續加其他圖片 ID 和對應圖片清單
      };
    
      // 儲存每個圖片目前的 index
      const imageIndices = {};
    
      function cycleImage(id) {
        const img = document.getElementById(id);
        if (!img || !imageLists[id]) return;
    
        if (!(id in imageIndices)) imageIndices[id] = 0;
    
        imageIndices[id] = (imageIndices[id] + 1) % imageLists[id].length;
        img.src = imageLists[id][imageIndices[id]];
    
        // 震動動畫
        img.classList.remove();
        void img.offsetWidth;
        img.classList.add('shake-on-load');
      }
    
      // 初始化：設定所有圖片的初始動畫（僅頁面載入時用）
      window.addEventListener('load', () => {
        Object.keys(imageLists).forEach(id => {
          const img = document.getElementById(id);
          if (img) {
            img.classList.remove();
            void img.offsetWidth;
            img.classList.add('shake-on-load');
          }
        });
      });
