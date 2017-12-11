export class Gallery {
  constructor (node, index = 0) {
    this.node = node
    this.index = index
    this.elements = {}
    this.isInflated = false
  }

  static get MODIFIERS () {
    return {
      DOT_SELECTED: 'gallery__dot--selected',
      IMAGE_SELECTED: 'gallery__image--selected',
      ARROW_DISABLED: 'gallery__arrow--disabled'
    }
  }

  static get staticHTML () {
    return (
      `<button class="gallery__arrow-container gallery__arrow--left"> 
        <
      </button>
      <ul class="gallery__images-container"></ul>
      <button class="gallery__arrow-container gallery__arrow--right">
        >
      </button>
      <ul class="gallery__dots-container"></ul>`
    )
  }

  inflateHTML (data) {
    console.log('Inflating')
    if (data) {
      this.node.tabIndex = 0

      // HTML fill and elements extraction
      this.node.innerHTML = Gallery.staticHTML
      this.elements.imagesContainer = this.node.querySelector('.gallery__images-container')
      this.elements.dotsContainer = this.node.querySelector('.gallery__dots-container')
      this.elements.imagesContainer.innerHTML = data.map(item =>
        `<li class="gallery__image-container">
          <img class="gallery__image" src="${item.url}" alt="${item.alt}" />
        </li>`
      ).join('')
      this.elements.dotsContainer.innerHTML = data.map(item =>
        `<li class="gallery__dot-container">
          <button class="gallery__dot"></button>
        </li>`
      ).join('')
      this.elements.leftArrow = this.node.querySelector('.gallery__arrow--left')
      this.elements.rightArrow = this.node.querySelector('.gallery__arrow--right')
      this.elements.images = this.elements.imagesContainer.querySelectorAll('.gallery__image')
      this.elements.dots = this.elements.dotsContainer.querySelectorAll('.gallery__dot')

      // Setting up initial state
      this.elements.images[this.index].classList.add(Gallery.MODIFIERS.IMAGE_SELECTED)
      this.elements.dots[this.index].classList.add(Gallery.MODIFIERS.DOT_SELECTED)
      this.updateArrows()

      // Setting up event listeners
      this.elements.leftArrow.addEventListener('click', this.goPrevious.bind(this))
      this.elements.rightArrow.addEventListener('click', this.goNext.bind(this))
      this.elements.dotsContainer.addEventListener('click', this.changeIndexByDot.bind(this))
      this.node.addEventListener('keydown', this.changeIndexByKey.bind(this))

      this.isInflated = true
    }
  }

  goPrevious () {
    console.log('going back')
    this.setImageByIndex(this.index - 1)
  }

  goNext () {
    console.log('going next')
    this.setImageByIndex(this.index + 1)
  }

  changeIndexByDot (event) {
    const isDot = event.target.classList.contains('gallery__dot')
    console.log(Array.from(this.elements.dots).indexOf(event.target))
    console.log(isDot)

    if (isDot) {
      this.setImageByIndex(Array.from(this.elements.dots).indexOf(event.target))
    }
  }

  changeIndexByKey ({key}) {
    console.log('hola')
    switch (key) {
      case 'ArrowLeft':
        this.goPrevious()
        break
      case 'ArrowRight':
        this.goNext()
        break
    }
  }

  updateArrows () {
    this.elements.leftArrow.classList.remove(Gallery.MODIFIERS.ARROW_DISABLED)
    this.elements.rightArrow.classList.remove(Gallery.MODIFIERS.ARROW_DISABLED)

    if (this.index === 0) {
      this.elements.leftArrow.classList.add(Gallery.MODIFIERS.ARROW_DISABLED)
    }
    if (this.index === this.elements.images.length - 1) {
      this.elements.rightArrow.classList.add(Gallery.MODIFIERS.ARROW_DISABLED)
    }
  }

  setImageByIndex (index) {
    console.log(index)
    if (index >= 0 && index < this.elements.images.length && index !== this.index) {
      this.elements.images[this.index].classList.remove(Gallery.MODIFIERS.IMAGE_SELECTED)
      this.elements.dots[this.index].classList.remove(Gallery.MODIFIERS.DOT_SELECTED)
      this.index = index
      console.log(index)
      this.elements.images[this.index].classList.add(Gallery.MODIFIERS.IMAGE_SELECTED)
      this.elements.dots[this.index].classList.add(Gallery.MODIFIERS.DOT_SELECTED)
      this.updateArrows()
    }
  }
}

export default Gallery
