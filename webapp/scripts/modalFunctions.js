$("#menu-toggle").click(function(e){e.preventDefault();$("#wrapper").toggleClass("toggled");});

//Modal Functions - authored by Anthony Piquette
// Get the modal
var modal2 = document.getElementById('welcomeModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

//Get Hamburger Menu element in order to close modal when clicked
var hamburgerClose = document.getElementsByClassName("navbar navbar-default")[0];

//Get Search Bar element in order to close modal when clicked
var searchBarClose = document.getElementsByClassName("input-group col-md-3 col-md-offset-4 floatburger front ")[0];

// Modal opens on page load
function welcomeModal() {
    if(sessionStorage.getItem("siteVisits") > 1){
        modal2.style.display = "none";
    } else {
        modal2.style.display = "block";
    }
}
window.onload =welcomeModal;

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks on <Hamburger Menu> Modal is closed
hamburgerClose.onclick = function(){
    modal2.style.display ="none";
}
// When the user clicks on <Search Bar> Modal is closed
searchBarClose.onclick = function(){
    modal2.style.display ="none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
