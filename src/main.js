(function () {
  const IMG_URLS = [
    'https://goo.gl/Mxhn8F',
    'https://goo.gl/v8gpMd',
    'https://goo.gl/ZcsnpW',
    'https://goo.gl/ChoVoB'
  ]
  const CLASSES = {
    GALLERY: 'gallery',
    DOT: 'gallery__dot',
    IMAGE: 'gallery__image',
    DOTS_CONTAINER: 'gallery__dots-container',
    IMAGES_CONTAINER: 'gallery__images-container',
    ARROW_LEFT: 'gallery__arrow--left',
    ARROW_RIGHT: 'gallery__arrow--right'
  }
  const STATES = {
    DOT_SELECTED: 'gallery__dot--selected',
    IMAGE_SELECTED: 'gallery__image--selected',
    ARROW_DISABLED: 'gallery__arrow--disabled'
  }
  const FIXED_HTML = (
    `
    <button class="gallery__arrow-container"> 
      <img class=${CLASSES.ARROW_LEFT} src="arrow_left.svg" />
    </button>
    <ul class=${CLASSES.IMAGES_CONTAINER}></ul>
    <button class="gallery__arrow-container">
      <img class=${CLASSES.ARROW_RIGHT} src="arrow_right.svg" />
    </button>
    <ul class=${CLASSES.DOTS_CONTAINER}></ul>
    `
  )
  const DINAMIC_HTML = {
    IMAGES: (
      `
      <li class="gallery__image-container">
        <img class=${CLASSES.IMAGE} src={src} />
      </li>
      `
    ),
    DOTS: (
      `
      <li class="gallery__dot-container">
        <button class=${CLASSES.DOT} data-index={index}></button>
      </li>
          
      `
    )
  }
  const gallery = document.querySelector(`.${CLASSES.GALLERY}`)
  let currentIndex = 0
  // Filling and extracting DOM Elements
  gallery.innerHTML = FIXED_HTML
  const leftArrow = gallery.querySelector(`.${CLASSES.ARROW_LEFT}`)
  const rightArrow = gallery.querySelector(`.${CLASSES.ARROW_RIGHT}`)
  const imagesContainer = gallery.querySelector(`.${CLASSES.IMAGES_CONTAINER}`)
  const dotsContainer = gallery.querySelector(`.${CLASSES.DOTS_CONTAINER}`)
  IMG_URLS.forEach(function (IMG_URL, index) {
    imagesContainer.innerHTML += DINAMIC_HTML.IMAGES.replace('{src}', IMG_URL)
    dotsContainer.innerHTML += DINAMIC_HTML.DOTS.replace('{index}', String(index))
  })
  const images = document.querySelectorAll(`.${CLASSES.IMAGE}`)
  const dots = document.querySelectorAll(`.${CLASSES.DOT}`)

  // Setting initial state
  images[0].classList.add(STATES.IMAGE_SELECTED)
  dots[0].classList.add(STATES.DOT_SELECTED)
  updateArrows()

  rightArrow.addEventListener('click', goNext)
  leftArrow.addEventListener('click', goPrevious)
  dotsContainer.addEventListener('click', dotHandler)
  document.addEventListener('keyup', keyHandler)

  function keyHandler ({key}) {
    switch (key) {
      case 'ArrowLeft':
        goPrevious()
        break
      case 'ArrowRight':
        goNext()
        break
    }
  }
  function goPrevious () {
    changeImage(currentIndex - 1)
  }
  function goNext () {
    changeImage(currentIndex + 1)
  }
  function dotHandler ({target: clickedElement}) {
    if (clickedElement.classList.contains(CLASSES.DOT)) {
      changeImage(Number(clickedElement.dataset.index))
    }
  }

  function changeImage (index) {
    const isPositive = (index >= 0)
    const isLessThanLength = (index < images.length)
    const isDifferentThanCurrent = (index !== currentIndex)

    if (isPositive && isLessThanLength && isDifferentThanCurrent) {
      images[currentIndex].classList.remove(STATES.IMAGE_SELECTED)
      dots[currentIndex].classList.remove(STATES.DOT_SELECTED)
      currentIndex = index
      images[currentIndex].classList.add(STATES.IMAGE_SELECTED)
      dots[currentIndex].classList.add(STATES.DOT_SELECTED)
      updateArrows()
    }
  }
  function updateArrows () {
    const isFirst = (currentIndex === 0)
    const isLast = (currentIndex === images.length - 1)

    leftArrow.classList.remove(STATES.ARROW_DISABLED)
    rightArrow.classList.remove(STATES.ARROW_DISABLED)

    if (isFirst) {
      leftArrow.classList.add(STATES.ARROW_DISABLED)
    }
    if (isLast) {
      rightArrow.classList.add(STATES.ARROW_DISABLED)
    }
  }
})()
