export class Movie {
  constructor (movieData) {
    this.html = `<img src=${movieData.imgURL}, alt=${movieData.title}, data-category=${movieData.categoryID}>`
  }
}
