function translateSite(language){
    //var lang = document.getElementById("lang-select");
    var lang = language.value;
    var url = window.location.href;

    if (url.indexOf('?') > -1){
       url = location.hostname+'?lang='+lang
    }else{
       url += '?lang='+lang
    }
    window.open(url,"_self");
}

function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}
