function nextPage() { 
    window.location.href = "yes.html";
}

function moveButton(){
    var button = document.getElementById('noButton');
    var margin = parseFloat(window.getComputedStyle(button).marginLeft);
    var maxX = window.innerWidth - button.offsetWidth - margin;
    var maxY = window.innerHeight - button.offsetHeight;

    maxX *= 0.8;
    maxY *= 0.8;

    var x = Math.random() * maxX;
    var y = Math.random() * maxY;

    button.style.left = `${x}px`;
    button.style.top =`${y}px`;
    console.log("moveButrton function called");
}

document.addEventListener('DOMContentLoaded', function() {
    moveButton();

    var button = document.getElementById('noButton');

    button.addEventListener('click', function(event) {
        event.preventDefault();
        moveButton();
    });

    button.addEventListener('touchstart', function(event) {
        event.preventDefault();
        moveButton();
    });

    window.addEventListener('resize', function() {
        moveButton();
    });

});