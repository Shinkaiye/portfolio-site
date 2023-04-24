/* AYAKATA
================================================================== */


// Project images overlay
(function projectImages() {
  if (document.querySelector('.project-images')) {
    let imageContainers = document.querySelectorAll('.project-images')
    let imageOverlay = document.querySelector('.image-overlay')
    let imageOverlayContent = document.querySelector('.image-overlay-content')
    let imageNext = document.querySelector('.image-overlay-next')
    let imagePrev = document.querySelector('.image-overlay-prev')
    let imageClose = document.querySelector('.image-overlay-close')
    for (let i = 0; i < imageContainers.length; i++) {
      let imageContainer = imageContainers[i]
      let images = imageContainer.querySelectorAll('img')

      for (let j = 0; j < images.length; j++) {
        images[j].addEventListener('click', function() {
          let currentImage = j
          let nextImage;
          let imageList = images
          let thisSrc = this.getAttribute('src')
          imageOverlayContent.innerHTML = `<img src="${thisSrc}" alt="">`
          document.querySelector('body').classList.add('image-overlay-active')

          imageNext.addEventListener('click', function() {
            currentImage < images.length - 1 ? currentImage++ : currentImage = 0
            nextImage = currentImage
            let nextSrc = images[nextImage].getAttribute('src')
            imageOverlayContent.innerHTML = `<img src="${nextSrc}" alt="">`
          })

          imagePrev.addEventListener('click', function() {
            currentImage > 0 ? currentImage-- : currentImage = images.length - 1
            nextImage = currentImage
            let nextSrc = images[nextImage].getAttribute('src')
            imageOverlayContent.innerHTML = `<img src="${nextSrc}" alt="">`
          })
          
        })
      }

    }
    imageClose.addEventListener('click', function() {
      document.querySelector('body').classList.remove('image-overlay-active')
    })
  }
})();



