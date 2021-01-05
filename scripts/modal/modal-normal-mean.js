// Get the modal
let modalMean = document.getElementById("modal-normal-mean");

// Get the button that opens the modal
let helpMean = document.getElementById("help-normal-mean");

// Get the <span> element that closes the modal
let spanMean = document.getElementsByClassName("close")[3];

// When the user clicks on the button, it opens the modal
helpMean.onclick = function() {
    modalMean.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanMean.onclick = function() {
    modalMean.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalMean.style.display = "none";
    }
}