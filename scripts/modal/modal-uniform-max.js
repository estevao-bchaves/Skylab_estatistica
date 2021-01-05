// Get the modal
let modalMax = document.getElementById("modal-uniform-max");

// Get the button that opens the modal
let helpMax = document.getElementById("help-uniform-max");

// Get the <span> element that closes the modal
let spanMax = document.getElementsByClassName("close")[7];

// When the user clicks on the button, it opens the modal
helpMax.onclick = function() {
    modalMax.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanMax.onclick = function() {
    modalMax.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalMax.style.display = "none";
    }
}