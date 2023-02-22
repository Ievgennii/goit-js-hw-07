import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulGaleryEl = document.querySelector('.gallery');

// console.log(divGaleryEl);

const addImagesGalery = createImagesGalery(galleryItems);
ulGaleryEl.innerHTML = addImagesGalery;

ulGaleryEl.addEventListener('click', onClickImage);

function createImagesGalery(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="" title=${description}""
        />
      </a>`
    )
    .join('');
}

function onClickImage(evt) {
  evt.preventDefault();
  // console.log(evt);
  // console.log(evt.target.nodeName);

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  var lightbox = new SimpleLightbox('.gallery a');
  lightbox.open();  
}
