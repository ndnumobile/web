if(typeof(Storage) !== "undefined"){
            if(sessionStorage.getItem("siteVisits") == null){
                sessionStorage.setItem("siteVisits",1);
            } else {
                sessionStorage.siteVisits = Number(sessionStorage.siteVisits)+1;
            }
        }