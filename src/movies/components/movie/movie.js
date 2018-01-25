export class Movie {
  constructor (movieData) {
    this.html =
    `<div class="movie" data-categoryid="${movieData.categoryid}">
      <div class="movie__front">
        <img class="movie__poster" src="${movieData.imgURL}" alt="${movieData.title} poster">
        <h2 class="movie__title">${movieData.title}</h2>
      </div>
      <div class="movie__back">
        <p class="movie__description">${movieData.synopsis}</p>
        <br />
        <h2 class="movie__title">${movieData.title}</h2>
      </div>
    </div>`
    /* eslint-disable */
    this.node = new DOMParser().parseFromString(this.html, 'text/html').body.children[0]
    /* eslint-enable */
    this.elements = {}
    this.elements.movieFront = this.node.querySelector('.movie__front')
    this.elements.movieBack = this.node.querySelector('.movie__back')
    this.setEvents()
  }

  setEvents () {
    this.node.addEventListener('click', this.flipCard.bind(this))
  }

  flipCard () {
    this.elements.movieFront.classList.toggle('movie__front--turn')
    this.elements.movieBack.classList.toggle('movie__back--turn')
  }
}
