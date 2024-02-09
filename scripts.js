// function nextPage() { 
//     window.location.href = "yes.html";
// }

// function moveButton(){
//     var button = document.getElementById('noButton');
//     var margin = parseFloat(window.getComputedStyle(button).marginLeft);
//     var maxX = window.innerWidth - button.offsetWidth - margin;
//     var maxY = window.innerHeight - button.offsetHeight;

//     var x = Math.random() * maxX;
//     var y = Math.random() * maxY;

//     button.style.left = `${x}px`;
//     button.style.top =`${y}px`;
//     console.log("moveButrton function called");
// }

// document.addEventListener('DOMContentLoaded', function() {

// });

document.addEventListener('DOMContentLoaded', function() {
    var noButton = document.getElementById('noButton');

    noButton.addEventListener('click', function(event) {
        event.preventDefault();
    });

    noButton.addEventListener('touchstart', function(event) {
        event.preventDefault();

        moveButton();
    });
})

function moveButton() {
    var button = document.getElementById('noButton');
    var margin = parseFloat(window.getComputedStyle(button).marginLeft);
    var maxX = window.innerWidth - button.offsetWidth - margin;
    var maxY = window.innerHeight - button.offsetHeight;

    var x = Math.random() * maxX;
    var y = Math.random() * maxY;

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    console.log("moveButton function called");
}