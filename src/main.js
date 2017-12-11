/*
import { Gallery } from './gallery/gallery.js'
import data from './gallery/galleryData.js'

const gallery = new Gallery(document.querySelector('.gallery'), 0)
gallery.inflateHTML(data)
*/

/* const anotherGallery = new Gallery(document.querySelector('.gallery2'), 1)
anotherGallery.inflateHTML(data) */

// import { Movie } from './movie/movie.js'
import data from './movies/movieData.js'
import { Movie } from './movies/movie.js'
import { Grid } from './movies/grid.js'

const movies = data.map(movieData => new Movie(movieData))
const grid = new Grid(document.querySelector('.grid'), movies)
console.log(grid)
