let title = document.querySelector("h1");
let inputText = document.getElementById("input-text");
let inputColor = document.getElementById("input-color");
let inputBackground = document.getElementById("input-background");
inputText.addEventListener("input", function() {
    const value = inputText.value;
    title.innerText = value;
});

inputColor.addEventListener("input", function() {
    const value = inputColor.value;
    title.style.color = value;
});

inputBackground.addEventListener("input", function() {
    const value = inputBackground.value;
    document.body.style.backgroundColor = value;
});