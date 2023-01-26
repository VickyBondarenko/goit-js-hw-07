import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";
// Change code below this line
const gallery = document.querySelector(".gallery");
function renderList() {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");

  gallery.innerHTML = markup;
}
renderList();

gallery.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}'>
`);

    instance.show();

    if (instance.visible()) {
      window.addEventListener("keydown", closeByEsc);

      function closeByEsc({ code }) {
        if (code === "Escape") {
          instance.close();
          window.removeEventListener("keydown", closeByEsc);
        }
      }
    }
  } else {
    return;
  }
}

console.log(galleryItems);
