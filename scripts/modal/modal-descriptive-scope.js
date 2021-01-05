let modalScope = document.getElementById("modal-scope");

// Get the button that opens the modal
let btnScope = document.getElementById("help-scope");

// Get the <span> element that closes the modal
let spanScope = document.getElementsByClassName("close")[3];

// When the user clicks on the button, it opens the modal
btnScope.onclick = function() {
    modalScope.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanScope.onclick = function() {
    modalScope.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalScope.style.display = "none";
    }
}