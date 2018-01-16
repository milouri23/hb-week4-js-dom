export class Movie {
  constructor (movieData) {
    this.html = `<img class="movie__poster" src="${movieData.imgURL}" alt="${movieData.title} poster" data-categoryid="${movieData.categoryid}">`
    /*
    `<div class="movie">
      <div class="movie__front">
        <img class="movie__poster" src="${movieData.imgURL}" alt="${movieData.title} poster" data-categoryid="${movieData.categoryid}">
      </div>
      <div class="movie__back"
        <p>back</p>
      </div>
    </div>
    `
    */
  }
}
