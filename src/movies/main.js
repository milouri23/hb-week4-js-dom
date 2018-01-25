import data from './moviesData.js'

import { Movie } from './components/movie/movie.js'
import { Grid } from './components/grid/grid.js'
import { Caller } from './components/caller/caller.js'

const movies = data.map(movieData => new Movie(movieData).node)
const grid = new Grid('.griddd', movies)
const caller = new Caller('.callerrr', extractNoRepeatedValues(data, 'categoryid'), callGridToAction)

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

// function callMovieToAction
