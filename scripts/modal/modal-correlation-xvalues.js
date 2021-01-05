// Get the modal
let modalXvalues = document.getElementById("modal-xvalues");

// Get the button that opens the modal
let helpXvalues = document.getElementById("help-xvalues");

// Get the <span> element that closes the modal
let spanXvalues = document.getElementsByClassName("close")[1];

// When the user clicks on the button, it opens the modal
helpXvalues.onclick = function() {
    modalXvalues.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanXvalues.onclick = function() {
    modalXvalues.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalXvalues.style.display = "none";
    }
}