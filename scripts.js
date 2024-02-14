document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noButton');

    noButton.addEventListener('click', function(event) {
        event.preventDefault();
    });

    noButton.addEventListener('touchstart', function(event) {
        event.preventDefault();

        moveButton();
    });
})

function moveButton() {
    const button = document.getElementById('noButton');
    const margin = parseFloat(window.getComputedStyle(button).marginLeft);
    const maxX = window.innerWidth - button.offsetWidth - margin;
    const maxY = window.innerHeight - button.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    console.log("moveButton function called");
}