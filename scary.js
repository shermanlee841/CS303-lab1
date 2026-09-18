const scaryButton = document.getElementById("scaryButton");
const cuteContent = document.getElementById("cuteContent");
const scaryContent = document.getElementById("scaryContent");

let isScary = false;

function toggleScary() {
    if (isScary === false) {
        cuteContent.style.display = "none";
        scaryContent.style.display = "block";
        isScary = true;
    }
    else {
        cuteContent.style.display = "block";
        scaryContent.style.display = "none";
        isScary = false;
    }
}
scaryButton.addEventListener("click", toggleScary);