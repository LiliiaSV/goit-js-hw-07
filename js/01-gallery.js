import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryCards = createGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryCards);

function createGallery(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                    </a>
                </li>`;
    })
    .join('');
};

gallery.addEventListener('click', selectGalleryCard);

function selectGalleryCard(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source} "width="800" height="600">`);
    instance.show();
};
