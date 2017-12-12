import { Gallery } from './gallery/gallery.js'
import data from './gallery/galleryData.js'

const gallery = new Gallery(document.querySelector('.gallery'), 0)
gallery.inflateHTML(data)

const anotherGallery = new Gallery(document.querySelector('.gallery2'), 1)
anotherGallery.inflateHTML(data)
