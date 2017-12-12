export class Movie {
  constructor (movieData) {
    this.html = `<img class="movie__poster" src="${movieData.imgURL}" alt="${movieData.title} poster" data-categoryid="${movieData.categoryid}">`
  }
}
