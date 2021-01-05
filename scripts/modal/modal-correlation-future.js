// Get the modal
let modalFuture = document.getElementById("modal-future");

// Get the button that opens the modal
let helpFuture = document.getElementById("help-modal-future");

// Get the <span> element that closes the modal
let spanFuture = document.getElementsByClassName("close")[4];

// When the user clicks on the button, it opens the modal
helpFuture.onclick = function() {
    modalFuture.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanFuture.onclick = function() {
    modalFuture.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalFuture.style.display = "none";
    }
}