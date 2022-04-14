if (navigator.serviceWorker){
    //console.log("soporta sw");
    navigator.serviceWorker.register("/pwaa/sw.js");
}
else{
    alert(":(no soporta el sw)");
}
