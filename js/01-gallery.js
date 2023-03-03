import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const createGallery = document.querySelector(".gallery");
createGallery.classList.add("gallery__item");

for (let i = 0; i < galleryItems.length; i++) {
  const link = document.createElement("a");
  const img = document.createElement("img");
  createGallery.append(link);
  link.append(img);
  link.classList.add("gallery__link");
  img.classList.add("gallery__image");
  img.setAttribute("src", `${galleryItems[i].preview}`);
  img.setAttribute("alt", `${galleryItems[i].description}`);
  img.dataset.source = `${galleryItems[i].original}`;
  link.setAttribute("href", `${galleryItems[i].original}`);
}

createGallery.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.classList.value);
  
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="1280" height="720">
`);

    instance.show();

    document.addEventListener("keydown", event => {
        if(event.key === 'Escape') {
            instance.close();
        }
      });
});
 
