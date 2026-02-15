const swatches = document.querySelectorAll('.swatch');

function changeColor() {
    const colorVal = this.dataset.color;
    this.style.backgroundColor = colorVal;
}

swatches.forEach(function(swatch) {
    swatch.addEventListener('click', changeColor);
});
