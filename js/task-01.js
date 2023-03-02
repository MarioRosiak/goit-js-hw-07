const numCategories = document.querySelectorAll("li.item");

console.log(`Number of categories = ${numCategories.length}`)

numCategories.forEach(function(element) {
  console.log(`Category: ${element.childNodes[1].textContent}`);
  console.log(`Elements: ${element.childNodes[3].children.length}`)
})



