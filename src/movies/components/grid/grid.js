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
      </li>`
    ).join('')
    this.elements.itemContainers = this.node.querySelectorAll('.grid__item-container')
    data.forEach((item, index) =>
      this.elements.itemContainers[index].appendChild(item)
    )
    this.elements.items = Array.from(this.elements.itemContainers).map(itemContainer => itemContainer.firstElementChild)
  }

  hideGridItemByDataSet (dataSetID, dataSetValue) {
    this.showEverything()

    this.elements.items.forEach(item => {
      if (item.dataset[dataSetID] !== dataSetValue) {
        item.parentElement.classList.add(Grid.MODIFIERS.HIDDEN)
      }
    })
  }

  showEverything () {
    this.elements.itemContainers.forEach(itemContainer => itemContainer.classList.remove(Grid.MODIFIERS.HIDDEN))
  }
}
