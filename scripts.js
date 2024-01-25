function nextPage() { 
    window.location.href = "yes.html";
}

function moveButton() {
    var button = document.getElementById('noButton');
    var x = Math.random() * (window.innerWidth - button.offsetWidth);
    var y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    console.log("moveButton function called");
}

document.addEventListener('DOMContentLoaded', function() {

});