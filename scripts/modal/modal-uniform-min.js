//Get the modal
let modalMin = document.getElementById("modal-uniform-min");

// Get the button that opens the modal
let helpMin = document.getElementById("help-uniform-min");

// Get the <span> element that closes the modal
let spanMin = document.getElementsByClassName("close")[6];

// When the user clicks on the button, it opens the modal
helpMin.onclick = function() {
    modalMin.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanMin.onclick = function() {
    modalMin.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalMin.style.display = "none";
    }
}