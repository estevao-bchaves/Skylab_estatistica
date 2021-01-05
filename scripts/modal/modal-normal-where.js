// Get the modal
let modalNormalWhere = document.getElementById("modal-normal-where");

// Get the button that opens the modal
let helpNormalWhere = document.getElementById("help-normal-where");

// Get the <span> element that closes the modal
let spanNormalWhere = document.getElementsByClassName("close")[5];

// When the user clicks on the button, it opens the modal
helpNormalWhere.onclick = function() {
    modalNormalWhere.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanNormalWhere.onclick = function() {
    modalNormalWhere.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalNormalWhere.style.display = "none";
    }
}