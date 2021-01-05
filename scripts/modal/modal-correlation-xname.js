// Get the modal
let modalXname = document.getElementById("modal-xname");

// Get the button that opens the modal
let helpXname = document.getElementById("help-xname");

// Get the <span> element that closes the modal
let spanXname = document.getElementsByClassName("close")[0];

// When the user clicks on the button, it opens the modal
helpXname.onclick = function() {
    modalXname.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanXname.onclick = function() {
    modalXname.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalXname.style.display = "none";
    }
}