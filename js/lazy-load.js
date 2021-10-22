const lazyImages = document.querySelectorAll('img[data-src]');
const loadMapBlock = document.querySelector('._load-map');
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPosition = [];

if (lazyImages.length > 0) {
  lazyImages.forEach(img => {
    if (img.dataset.src) {
      lazyImagesPosition.push(img.getBoundingClientRect().top + scrollY);
      lazyScrollCheck();
    }
  });
}

window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
  if (document.querySelectorAll('img[data-src]').length > 0) {
    lazyScrollCheck();
  }
  if (!loadMapBlock.classList.contains('_loaded')) {
    getMap();
  }
}

function lazyScrollCheck() {
  let imgIndex = lazyImagesPosition.findIndex(
    item => scrollY > item - windowHeight
  );
  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute('data-src');
    }
    delete lazyImagesPosition[imgIndex];
  }
}

function getMap() {
  const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + scrollY;
  if (scrollY > loadMapBlockPos - windowHeight) {
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    loadMapBlock.classList.add('_loaded');
  }
}