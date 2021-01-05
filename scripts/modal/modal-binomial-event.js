// Get the modal
let modalEvent = document.getElementById("modal-binomial-event");

// Get the button that opens the modal
let helpEvent = document.getElementById("help-binomial-event");

// Get the <span> element that closes the modal
let spanEvent = document.getElementsByClassName("close")[2];

// When the user clicks on the button, it opens the modal
helpEvent.onclick = function() {
    modalEvent.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanEvent.onclick = function() {
    modalEvent.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalEvent.style.display = "none";
    }
}