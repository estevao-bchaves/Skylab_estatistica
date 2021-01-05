//Get the modal
let modalUnifWhere = document.getElementById("modal-uniform-where");

// Get the button that opens the modal
let btnUnifWhere = document.getElementById("help-uniform-where");

// Get the <span> element that closes the modal
let spanUnifWhere = document.getElementsByClassName("close")[8];

// When the user clicks on the button, it opens the modal
btnUnifWhere.onclick = function() {
    modalUnifWhere.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanUnifWhere.onclick = function() {
    modalUnifWhere.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalUnifWhere.style.display = "none";
    }
}