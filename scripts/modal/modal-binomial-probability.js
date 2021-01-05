// Get the modal
let modalBinomialProb = document.getElementById("modal-binomial-probability");

// Get the button that opens the modal
let helpProbability = document.getElementById("help-binomial-probability");

// Get the <span> element that closes the modal
let spanProbability = document.getElementsByClassName("close")[0];

// When the user clicks on the button, it opens the modal
helpProbability.onclick = function() {
    modalBinomialProb.style.display = "block";
}

// When the user clicks on <span> (x), it closes the modal
spanProbability.onclick = function() {
    modalBinomialProb.style.display = "none";
}

// When the user clicks anywhere outside of the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modalBinomialProb.style.display = "none";
    }
}