$("#menu-toggle").click(function(e){
    e.preventDefault();$("#wrapper").toggleClass("toggled");
});

//Modal Functions - authored by Anthony Piquette
// Get the modal
var modalopen = document.getElementById('welcomeModal');
var modal2 = document.getElementById('welcomeModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

//Get Hamburger Menu element in order to close modal when clicked
var hamburgerClose = document.getElementsByClassName("navbar navbar-default")[0];

//Get Search Bar element in order to close modal when clicked
var searchBarClose = document.getElementsByClassName("input-group col-md-3 col-md-offset-4 floatburger front ")[0];

var openWelcomeModal = document.getElementById('reopenWelcomeModal');

var closeSideBar = document.getElementById('slidebar-white');

// Modal opens on page load
function welcomeModal() {
    if(sessionStorage.getItem("siteVisits") > 1){
        modalopen.style.display = "none";
    } else {
        modalopen.style.display = "block";
    }
}
window.onload =welcomeModal;

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalopen.style.display = "none";
}

// closes the welcome modal on reset
function ribbonClose(){
    modalopen.style.display = "none";
}

// When the user clicks on <Hamburger Menu> Modal is closed
hamburgerClose.onclick = function(){
    modalopen.style.display ="none";
    closeSideBar.style.display = "block";
}
// When the user clicks on <Search Bar> Modal is closed
searchBarClose.onclick = function(){
    modalopen.style.display ="none";
    $("#wrapper").toggleClass("toggled",true);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modalopen.style.display = "none";
    }
}

// When user clicks on welcome button in navigation menu, the welcome modal is displayed 
openWelcomeModal.onclick = function(){
    modalopen.innerHTML = '<div id="modalContent" class="modal-content2 autoModal ">'
    
                +'<div class="modal-header2 autoModal">'
                    +'<div class= "modal-image2"><img src="http://i.imgur.com/A35ss2e.png" alt="argo"></div>'
                    +'<div class="modal-title2">Welcome to the NDNU Campus Tour!</div>'
                    +'<span onClick="ribbonClose()" class="close2">&times;</span>'
                +'</div>'

                +'<div id="modalPrime" class="modal-body2 autoModal">'
                    +'<h4>This is an interactive map.</h4>'
                    +'<p><u>Helpful Hints</u></p>'
                    +'<p2><span class="glyphicon glyphicon-check"></span>  Use the search bar above to search for a location, or click on map locations for a popup description.<br> <span class="glyphicon glyphicon-check"></span> Use the navigation menu in the upper left corner to see a list of campus buildings, find printable school documents or browse FAQ\'s.<br><span class="glyphicon glyphicon-check"></span> To close a popup window: click the close button in the top right, or click anywhere on the map. </p2>'
                +'</div>'
                +'<div class="modal-footer2 autoModal">'
                +'</div>'
            +'</div>';
    modalopen.className = "modal2 autoModal";
    modalopen.style.display = "block";
    
    $("#wrapper").toggleClass("toggled");
}

// When the user clicks on the more info button, displays a modal
function popUpModal(title,history,vid,image,description){
    modal2.style.display = "block";
    document.getElementById("modalContent").className = "modModal modal-content2 autoModal";
    document.getElementById("modalContent").innerHTML = '<h3>' + title + '</h3><iframe  class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto"  src="' + image + '"></iframe><p>' + history + '</p>';
}