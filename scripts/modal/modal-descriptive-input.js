// Get the modal
let modalData = document.getElementById("modal-data");

// Get the button that opens the modal
let helpData = document.getElementById("help-data");

// Get the <span> element that closes the modal
let spanData = document.getElementsByClassName("close")[1];

// When the user clicks on the button, it opens the modal
helpData.onclick = function() {
    modalData.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanData.onclick = function() {
    modalData.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalData.style.display = "none";
    }
}
