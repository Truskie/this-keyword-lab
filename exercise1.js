function changeColor() {
    this.style.backgroundColor = "yellow";
}

const buttons = document.querySelectorAll('.color-btn');

buttons.forEach(function(button) {
    button.addEventListener('click', changeColor);
});