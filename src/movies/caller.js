export class Caller {
  constructor (node, values, callback) {
    this.node = node
    this.elements = {}
    this.callback = callback

    this.inflateHTML(values)
    this.setEvents()
  }

  static get MODIFERS () {
    return {
      SELECTED: 'caller__button--selected'
    }
  }

  static get FIXED_HTML () {
    return (
      `<div class="caller">
        <ul class="caller__buttons-container"></ul>
      </div>`
    )
  }

  toButtonHTML (value) {
    return (
    `<li class="caller__button-container">
      <button class="caller__button">${value}</button>
    </li>`
    )
  }

  inflateHTML (values) {
    console.log(values)
    this.node.innerHTML = Caller.FIXED_HTML
    this.elements.buttonsContainer = this.node.querySelector('.caller__buttons-container')
    this.elements.buttonsContainer.innerHTML = values.map(this.toButtonHTML).join('')
    this.elements.buttons = this.node.querySelectorAll('.caller__button')
  }

  addButton (value) {
    this.elements.buttonsContainer.innerHTML += this.toButtonHTML(value)
    this.elements.buttons = this.node.querySelectorAll('.caller__button')
  }

  setEvents () {
    this.elements.buttonsContainer.removeEventListener('click', this.buttonHandler.bind(this))
    this.elements.buttonsContainer.addEventListener('click', this.buttonHandler.bind(this))
  }

  buttonHandler (event) {
    const isButton = event.target.classList.contains('caller__button')

    if (isButton) {
      this.resetPainting()
      event.target.classList.add(Caller.MODIFERS.SELECTED)
      this.callback(event.target)
    }
  }

  resetPainting () {
    this.elements.buttons.forEach(button => button.classList.remove(Caller.MODIFERS.SELECTED))
  }
}
