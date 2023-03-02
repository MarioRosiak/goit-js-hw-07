const textInput = document.querySelector("#validation-input");
const textInputLength = Number(textInput.getAttribute("data-length"));
console.log(textInputLength);

textInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === textInputLength) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }
});