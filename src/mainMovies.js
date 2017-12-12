import data from './movies/movieData.js'
import { Movie } from './movies/movie.js'
import { Grid } from './movies/grid.js'
import { Caller } from './movies/caller.js'

const movies = data.map(movieData => new Movie(movieData))
const grid = new Grid(document.querySelector('.grid'), movies)
const caller = new Caller(document.querySelector('.caller'), extractNoRepeatedValues(data, 'categoryid'), callGridToAction)
caller.addButton('reset')
caller.setEvents()

function extractNoRepeatedValues (objects, propertyName) {
  const sortedValues = objects.map(object => object[propertyName]).sort()

  return sortedValues.filter(function uniqueValuesExtractor (sortedValue, index, array) {
    const isFirst = index === 0
    return isFirst || sortedValue !== array[index - 1]
  })
}

function callGridToAction ({textContent}) {
  if (textContent === 'reset') {
    grid.showEverything()
    return
  }
  grid.hideGridItemByDataSet('categoryid', textContent)
}
