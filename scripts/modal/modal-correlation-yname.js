// Get the modal
let modalYname = document.getElementById("modal-yname");

// Get the button that opens the modal
let helpYname = document.getElementById("help-yname");

// Get the <span> element that closes the modal
let spanYname = document.getElementsByClassName("close")[2];

// When the user clicks on the button, it opens the modal
helpYname.onclick = function() {
    modalYname.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanYname.onclick = function() {
    modalYname.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalYname.style.display = "none";
    }
}