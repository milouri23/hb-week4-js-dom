export class Grid {
  constructor (node, dataSet) {
    this.node = node
    this.elements = {}

    this.inflateGrid(dataSet)
  }

  static get FIXED_HTML () {
    return (
      `<ul class="grid__items-container"></ul>`
    )
  }

  inflateGrid (dataSet) {
    this.node.innerHTML = Grid.FIXED_HTML
    this.elements.gridContainer = this.node.querySelector('.grid__items-container')
    this.elements.gridContainer.innerHTML = dataSet.map(item =>
      `<li class="grid__item-container">
        ${item.html}
      </li>`
    ).join('')
  }
}

// <li class="grid__item-container">
