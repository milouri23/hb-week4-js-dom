export class Grid {
  constructor (selector, data) {
    this.node = document.querySelector(selector)
    this.elements = {}

    this.inflateGrid(data)
  }

  static get MODIFIERS () {
    return {
      HIDDEN: 'grid__item-container--hidden'
    }
  }
  static get FIXED_HTML () {
    return (
      `<ul class="grid__items-container"></ul>`
    )
  }

  inflateGrid (data) {
    this.node.className = 'grid'
    this.node.innerHTML = Grid.FIXED_HTML
    this.elements.gridContainer = this.node.querySelector('.grid__items-container')
    this.elements.gridContainer.innerHTML = data.map(item =>
      `<li class="grid__item-container">
        ${item.html}
      </li>`
    ).join('')
    this.elements.itemContainers = this.node.querySelectorAll('.grid__item-container')
    this.elements.items = Array.from(this.elements.itemContainers).map(itemContainer => itemContainer.firstElementChild)
    console.log('coming')
    console.log(this.elements.items)
  }

  hideGridItemByDataSet (dataSetID, dataSetValue) {
    this.showEverything()

    this.elements.items.forEach(item => {
      console.log(item.dataset[dataSetID])
      console.log(dataSetValue)
      console.log(item)
      if (item.dataset[dataSetID] !== dataSetValue) {
        item.parentElement.classList.add(Grid.MODIFIERS.HIDDEN)
      }
    })
  }

  showEverything () {
    this.elements.itemContainers.forEach(itemContainer => itemContainer.classList.remove(Grid.MODIFIERS.HIDDEN))
  }
}
