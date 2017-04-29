$("#menu-toggle").click(function(e){
    e.preventDefault();$("#wrapper").toggleClass("toggled");
});

window.onload =welcomeModal, $("#wrapper").toggleClass("toggled",false);

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
var openGeneralHistoryModal = document.getElementById('reopenGeneralHistoryModal');
var openWelcomeModal_es = document.getElementById('reopenWelcomeModal_es');
var openGeneralHistoryModal_es = document.getElementById('reopenGeneralHistoryModal_es');
var closeSideBar = document.getElementById('slidebar-white');

// Modal opens on page load
function welcomeModal() {
    if(sessionStorage.getItem("siteVisits") > 1){
        modalopen.style.display = "none";
    } else {
        modalopen.style.display = "block";
    }
}

// closes the welcome modal on reset
function ribbonClose(){
    modalopen.style.display = "none";
}

// When the user clicks on <Hamburger Menu> Modal is closed
hamburgerClose.onclick = function(){
    modalopen.style.display ="none";
    closeSideBar.style.display = "block";
    var closeSummaryModal = document.getElementsByClassName("mapboxgl-popup mapboxgl-popup-anchor-bottom");
    if(closeSummaryModal[0] != null){
       closeSummaryModal[0].style.display = "none";
    }

}
// When the user clicks on <Search Bar> Modal is closed
searchBarClose.onclick = function(){
    modalopen.style.display ="none";      //mapboxgl-popup mapboxgl-popup-anchor-bottom
    var closeSummaryModal = document.getElementsByClassName("mapboxgl-popup mapboxgl-popup-anchor-bottom");
    if(closeSummaryModal[0] != null){
       closeSummaryModal[0].style.display = "none";
    }
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
                    +'<h4>Created by students of Computer Science department, Class of 2017</h4>'
                    +'<p><u>Helpful Hints</u></p>'

                    +'<p2><span class="glyphicon glyphicon-check"></span> Use the search bar above to search for a location, or click on map locations for a pop-up description.<br><span class="glyphicon glyphicon-check"></span>Use the navigation menu in the upper left corner to see a list of campus buildings, find printable school documents or browse FAQs.<br><span class="glyphicon glyphicon-check"></span> To close a pop-up window: click the close button in the top right, or click on map locations for a pop-up description.<br><span class="glyphicon glyphicon-check"></span>  In the lower right corner, you can center the map, zoom in and out, and reset the map to north.<br><span class="glyphicon glyphicon-check"></span> Hold the Control key and drag the mouse to enter 3D mode. Click the \'Center Map\' button to exit.<br><span class="glyphicon glyphicon-check"></span> As you zoom in, the names of the buildings will automatically show on the map.<br></p2>'
                    +'</div>'
                    +'<div class="modal-footer2 autoModal">'
                    +'</div>'
                +'</div>';
    modalopen.className = "modal2 autoModal";
    modalopen.style.display = "block";

    $("#wrapper").toggleClass("toggled");

}

openGeneralHistoryModal.onclick = function(){
    modalopen.innerHTML = '<div id="modalContent" class="modal-content2 autoModal ">'
                +'<div class="modal-header2 autoModal">'
                    +'<div class= "modal-image2"><img src="http://i.imgur.com/A35ss2e.png" alt="argo"></div>'
                    +'<div class="modal-title2">Notre Dame de Namur University</div>'
                    +'<span onClick="ribbonClose()" class="close2">&times;</span>'
                +'</div>'

                +'<div id="modalPrime" class="modal-body2 autoModal">'
                    +'<h4>General History</h4>'
                    +'<p2><span class="glyphicon glyphicon-check"></span> In 1851, the Sisters of Notre Dame de Namur came to the San Francisco Bay Area from their mission schools in Oregon and established the College of Notre Dame in San Jose, California<br><span class="glyphicon glyphicon-check"></span> The College of Notre Dame was chartered as the first college in the state of California authorized to grant the baccalaureate degree to women.<br><span class="glyphicon glyphicon-check"></span> Now called Notre Dame de Namur University, NDNU is a Catholic, not-for-profit, coeducational institution serving approximately 1,700 traditional-aged and adult students from diverse backgrounds. <br><span class="glyphicon glyphicon-check"></span> NDNU maintains a strong commitment to access for diverse populations, academic excellence, social justice and community engagement.<br><span class="glyphicon glyphicon-check"></span> The university is fully accredited and offers a rich variety of undergraduate, graduate and credential programs. The historic, 50-acre campus is located on the San Francisco Peninsula in Silicon Valley.<br></p2>'
                    +'</div>'
                    +'<div class="modal-footer2 autoModal">'
                    +'</div>'
                +'</div>';
    modalopen.className = "modal2 autoModal";
    modalopen.style.display = "block";

    $("#wrapper").toggleClass("toggled");

}

openWelcomeModal_es.onclick = function(){
    modalopen.innerHTML = '<div id="modalContent" class="modal-content2 autoModal ">'
                +'<div class="modal-header2 autoModal">'
                    +'<div class= "modal-image2"><img src="http://i.imgur.com/A35ss2e.png" alt="argo"></div>'
                    +'<div class="modal-title2">¡Bienvenido al Campus Tour de NDNU!</div>'
                    +'<span onClick="ribbonClose()" class="close2">&times;</span>'
                +'</div>'

                +'<div id="modalPrime" class="modal-body2 autoModal">'
                    +'<h4>Este es un mapa interactivo.</h4>'
                    +'<p><u>Consejos útiles</u></p>'

                    +'<p2><span class="glyphicon glyphicon-check"></span> Utilice la barra de búsqueda anterior para buscar una ubicación o haga clic en las ubicaciones del mapa para obtener una descripción emergente.<br><span class="glyphicon glyphicon-check"></span>  Utilice el menú de navegación en la esquina superior izquierda para ver una lista de edificios del campus, encontrar documentos para imprimir en la escuela o navegar por las preguntas frecuentes.<br><span class="glyphicon glyphicon-check"></span> Para cerrar una ventana emergente: haga clic en el botón cerrar en la parte superior derecha o haga clic en cualquier parte del mapa.<br><span class="glyphicon glyphicon-check"></span>  Al acercar, los nombres de los edificios se mostrarán automáticamente en el mapa.<br></p2>'
                    +'</div>'
                +'<div class="modal-footer2 autoModal">'
                +'</div>'
            +'</div>';
    modalopen.className = "modal2 autoModal";
    modalopen.style.display = "block";

    $("#wrapper").toggleClass("toggled");

}

openGeneralHistoryModal_es.onclick = function(){
    modalopen.innerHTML = '<div id="modalContent" class="modal-content2 autoModal ">'
                +'<div class="modal-header2 autoModal">'
                    +'<div class= "modal-image2"><img src="http://i.imgur.com/A35ss2e.png" alt="argo"></div>'
                    +'<div class="modal-title2">Universidad de Notre Dame de Namur</div>'
                    +'<span onClick="ribbonClose()" class="close2">&times;</span>'
                +'</div>'

                +'<div id="modalPrime" class="modal-body2 autoModal">'
                    +'<h4>Historia General</h4>'
                    +'<p2><span class="glyphicon glyphicon-check"></span>  En 1851, las Hermanas de Notre Dame de Namur llegaron al Área de la Bahía de San Francisco de sus escuelas misioneras en Oregon y establecieron el Colegio de Notre Dame en San José, CA<br> <span class="glyphicon glyphicon-check"></span> Fundada hace más de 160 años, somos la tercera universidad más antigua de California. NDNU es una universidad de maestría privada, católica y coeducacional totalmente acreditada, ubicada en la Península de San Francisco en Silicon Valley. Con 2.000 estudiantes de 28 estados y 23 países diferentes, NDNU amplía la perspectiva y la perspectiva de sus estudiantes exponiéndolos a sus pares con antecedentes, culturas y visiones de mundo muy diferentes.<br><span class="glyphicon glyphicon-check"></span> La universidad de Notre Dame fue fundada como la primera universidad en el estado de California autorizada para conceder el grado de bachillerato a las mujeres. </p2>'
                +'</div>'
                +'<div class="modal-footer2 autoModal">'
                +'</div>'
            +'</div>';
    modalopen.className = "modal2 autoModal";
    modalopen.style.display = "block";

    $("#wrapper").toggleClass("toggled");
}

// When the user clicks on the more info button, displays a modal
function popUpModal(title,history,vid,image,description,audio,id,imageAlt){
    var lang = document.documentElement.lang;
    var closeSummaryModal = document.getElementsByClassName("mapboxgl-popup mapboxgl-popup-anchor-bottom");
    closeSummaryModal[0].style.display = "none";
    modal2.style.display = "block";
    if (lang == 'es') {
        document.getElementById("modalContent-es").className = "modModal modal-content2 autoModal";
    } else {
        document.getElementById("modalContent").className = "modModal modal-content2 autoModal";
    }

    var detailModal = "<button onClick=\"moreInfoClose()\" data-dismiss=\"modalContent\" class=\"mapboxgl-popup-close-button\">x</button><h3>" + title + "</h3><div id=\"vid-section\" style=\"display:none;\"><iframe class=\"vid-frame\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\" scrolling=\"auto\"  src=\"" + vid + "\"></iframe></div><div id=\"image-alt\" style=\"display:none;\"><img class=\"detail-image\" src=\""+ imageAlt +"\"/></div><p>" + history + "</p><div id=\"audio-section\" style=\"display:none;\"><audio controls id=\"audio-panel\"><source src=\""+ audio + "\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio></div><div id=\"link-section\" style=\"display:none;\"></div>";
    if (lang == 'es') {
        document.getElementById("modalContent-es").innerHTML = detailModal;
    } else {
        document.getElementById("modalContent").innerHTML = detailModal;
    }
    if (audio != '') {
        document.getElementById("audio-section").style.display = "block";
    }
    if (vid != '') {
        document.getElementById("vid-section").style.display = "block";
    }
    if(imageAlt != 'undefined' && imageAlt != '' && imageAlt != null){
        document.getElementById("image-alt").style.display = "block";
    }

    var linkHeader;
    if (document.documentElement.lang == 'es'){
        linkHeader = "Puntos de interés";
    } else {
        linkHeader = "Points of Interest";
    }
    var linkList = "<h5 id=\"link-h\">" + linkHeader + "</h4><ul id=\"linky\">";
    var i;
    for (i in poi.poi) {
        if (poi.poi[i].parentId == id) {
            linkList += "<li><a class=\"linky\" href=\"#\" onClick=\"popUpModal('" + poi.poi[i].title + "','" + poi.poi[i].details + "','" + poi.poi[i].video
                        + "','" + poi.poi[i].image + "','" + '' + "','" + poi.poi[i].audio + "','" + poi.poi[i].id + "')\">"
                        + poi.poi[i].title + "</a></li>";
        }
    }
    linkList += "</ul>";
    document.getElementById("link-section").innerHTML = linkList;
    if (document.getElementById('link-section').getElementsByTagName('li').length >= 1){
        document.getElementById("link-section").style.display = "block";
    }
}

function moreInfoClose(){
    modal2.style.display = "none";
    ctrMapFunc();
}

//The Following functions prevent the Campus Location list from closing when the loaction is selected
$('#location0').click(function (e) {
  e.stopPropagation()
});
$('#location1').click(function (e) {
  e.stopPropagation()
});
$('#location2').click(function (e) {
  e.stopPropagation()
});
$('#location3').click(function (e) {
  e.stopPropagation()
});
$('#location4').click(function (e) {
  e.stopPropagation()
});
$('#location5').click(function (e) {
  e.stopPropagation()
});
$('#location5a').click(function (e) {
  e.stopPropagation()
});
$('#location6').click(function (e) {
  e.stopPropagation()
});
$('#location7').click(function (e) {
  e.stopPropagation()
});
$('#location8').click(function (e) {
  e.stopPropagation()
});
$('#location9').click(function (e) {
  e.stopPropagation()
});
$('#location10').click(function (e) {
  e.stopPropagation()
});
$('#location11').click(function (e) {
  e.stopPropagation()
});
$('#location12').click(function (e) {
  e.stopPropagation()
});
$('#location13').click(function (e) {
  e.stopPropagation()
});
$('#location14').click(function (e) {
  e.stopPropagation()
});
$('#location15').click(function (e) {
  e.stopPropagation()
});
$('#location16').click(function (e) {
  e.stopPropagation()
});
$('#location17').click(function (e) {
  e.stopPropagation()
});
$('#location18').click(function (e) {
  e.stopPropagation()
});
$('#location19').click(function (e) {
  e.stopPropagation()
});
$('#location20').click(function (e) {
  e.stopPropagation()
});
$('#location21').click(function (e) {
  e.stopPropagation()
});
$('#location21b').click(function (e) {
  e.stopPropagation()
});
$('#location22').click(function (e) {
  e.stopPropagation()
});
$('#location23').click(function (e) {
  e.stopPropagation()
});
$('#location23b').click(function (e) {
  e.stopPropagation()
});
$('#location24').click(function (e) {
  e.stopPropagation()
});
$('#location25').click(function (e) {
  e.stopPropagation()
});
$('#location25a').click(function (e) {
  e.stopPropagation()
});
$('#location26').click(function (e) {
  e.stopPropagation()
});
$('#location27').click(function (e) {
  e.stopPropagation()
});
$('#location28').click(function (e) {
  e.stopPropagation()
});
$('#location29').click(function (e) {
  e.stopPropagation()
});
$('#location30').click(function (e) {
  e.stopPropagation()
});
$('#location31').click(function (e) {
  e.stopPropagation()
});
$('#location32').click(function (e) {
  e.stopPropagation()
});
$('#location32a').click(function (e) {
  e.stopPropagation()
});
$('#location32b').click(function (e) {
  e.stopPropagation()
});
$('#location33').click(function (e) {
  e.stopPropagation()
});
$('#location34').click(function (e) {
  e.stopPropagation()
});
$('#location35').click(function (e) {
  e.stopPropagation()
});
$('#location36').click(function (e) {
  e.stopPropagation()
});
$('#location37').click(function (e) {
  e.stopPropagation()
});
$('#location38').click(function (e) {
  e.stopPropagation()
});
$('#location39').click(function (e) {
  e.stopPropagation()
});
$('#location40').click(function (e) {
  e.stopPropagation()
});
$('#location0es').click(function (e) {
  e.stopPropagation()
});
$('#location1es').click(function (e) {
  e.stopPropagation()
});
$('#location2es').click(function (e) {
  e.stopPropagation()
});
$('#location3es').click(function (e) {
  e.stopPropagation()
});
$('#location4es').click(function (e) {
  e.stopPropagation()
});
$('#location5es').click(function (e) {
  e.stopPropagation()
});
$('#location6es').click(function (e) {
  e.stopPropagation()
});
$('#location7es').click(function (e) {
  e.stopPropagation()
});
$('#location8es').click(function (e) {
  e.stopPropagation()
});
$('#location9es').click(function (e) {
  e.stopPropagation()
});
$('#location10es').click(function (e) {
  e.stopPropagation()
});
$('#location11es').click(function (e) {
  e.stopPropagation()
});
$('#location12es').click(function (e) {
  e.stopPropagation()
});
$('#location13es').click(function (e) {
  e.stopPropagation()
});
$('#location14es').click(function (e) {
  e.stopPropagation()
});
$('#location15es').click(function (e) {
  e.stopPropagation()
});
$('#location16es').click(function (e) {
  e.stopPropagation()
});
$('#location17es').click(function (e) {
  e.stopPropagation()
});
$('#location18es').click(function (e) {
  e.stopPropagation()
});
$('#location19es').click(function (e) {
  e.stopPropagation()
});
$('#location20es').click(function (e) {
  e.stopPropagation()
});
$('#location21es').click(function (e) {
  e.stopPropagation()
});
$('#location22es').click(function (e) {
  e.stopPropagation()
});
$('#location23es').click(function (e) {
  e.stopPropagation()
});
$('#location24es').click(function (e) {
  e.stopPropagation()
});
$('#location25es').click(function (e) {
  e.stopPropagation()
});
$('#location26es').click(function (e) {
  e.stopPropagation()
});
$('#location27es').click(function (e) {
  e.stopPropagation()
});
$('#location28es').click(function (e) {
  e.stopPropagation()
});
$('#location29es').click(function (e) {
  e.stopPropagation()
});
$('#location30es').click(function (e) {
  e.stopPropagation()
});
$('#location31es').click(function (e) {
  e.stopPropagation()
});
$('#location32es').click(function (e) {
  e.stopPropagation()
});
$('#location33es').click(function (e) {
  e.stopPropagation()
});
$('#location34es').click(function (e) {
  e.stopPropagation()
});
$('#location35es').click(function (e) {
  e.stopPropagation()
});
$('#location36es').click(function (e) {
  e.stopPropagation()
});
$('#location37es').click(function (e) {
  e.stopPropagation()
});
$('#location38es').click(function (e) {
  e.stopPropagation()
});
$('#location39es').click(function (e) {
  e.stopPropagation()
});
