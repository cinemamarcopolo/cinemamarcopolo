function goToHome(username) { 
    sessionStorage.setItem("nomeUtente", username);
    var arrayVuoto = new Array();
    var arrayVuotoJSON = JSON.stringify(arrayVuoto);
    sessionStorage.setItem("listaOrdini", arrayVuotoJSON);
    return true;
}