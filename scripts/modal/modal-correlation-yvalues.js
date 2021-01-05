// Get the modal
let modalYvalues = document.getElementById("modal-yvalues");

// Get the button that opens the modal
let helpYvalues = document.getElementById("help-yvalues");

// Get the <span> element that closes the modal
let spanYvalues = document.getElementsByClassName("close")[3];

// When the user clicks on the button, it opens the modal
helpYvalues.onclick = function() {
    modalYvalues.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanYvalues.onclick = function() {
    modalYvalues.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalYvalues.style.display = "none";
    }
}