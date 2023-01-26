import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
function renderList() {
  const markup = galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"  title="${description}"/>
</a>`
    )
    .join("");

  gallery.innerHTML = markup;
}
renderList();

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionPosition: "bottom",
});

console.log(galleryItems);
