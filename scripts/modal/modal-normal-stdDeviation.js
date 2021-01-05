// Get the modal
let modalDeviation = document.getElementById("modal-normal-stdDeviation");

// Get the button that opens the modal
let helpDeviation = document.getElementById("help-normal-stdDeviation");

// Get the <span> element that closes the modal
let spanDeviation = document.getElementsByClassName("close")[4];

// When the user clicks on the button, it opens the modal
helpDeviation.onclick = function() {
    modalDeviation.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanDeviation.onclick = function() {
    modalDeviation.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalDeviation.style.display = "none";
    }
}