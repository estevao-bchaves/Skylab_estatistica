/**
 * It opens the navigation side bar.
 */
function openSideBar() {
    document.getElementById("side-nav").style.width = "270px";
}

/**
 * It closes the navigation side bar.
 */
function closeSideBar() {
    document.getElementById("side-nav").style.width = "30px";
}

/**
 * It hides the homepage when other page is opened.
 */
function hideHome() {
    document.getElementById('layout').style = 'display: none'
}