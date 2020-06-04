function cambiaBarraBlu() {
    if(window.sessionStorage.getItem("nomeUtente")){
        var nome = window.sessionStorage.getItem("nomeUtente");
        document.getElementById("barraBlu").innerHTML = "<h1 style='color:white;'><strong>Benvenuto " + nome + "!</h1>";
    }
    else{
        var nome = window.sessionStorage.getItem("nomeUtente");
    }
    return true;
}

function rimuoviOrdine(indiceOrdine) {
    var laLista = JSON.parse(sessionStorage.getItem("listaOrdini"));
    for(i=0; i<laLista.length; ++i) {
        if(indiceOrdine==laLista[i].indice) break;  //salvo l'indice del film da rimuovere
    }
    laLista.splice(i, 1);   //rimuovo l'ordine
    var arrayJSON = JSON.stringify(laLista);
    sessionStorage.setItem("listaOrdini", arrayJSON);   //aggiorno il sessionStorage
    location=location;
    return true;
}

function mostraAcquisti() {

    var contenuto = "";
    var laLista = JSON.parse(sessionStorage.getItem("listaOrdini"));
    var tot=0;    //importo totale
    for (i=0; i<laLista.length; i++) {
       
        contenuto += ("<div class='container table-responsive' style='border: solid black 3px; height: 320px; margin-top: 30px; color: black; background-color: rgb(253, 231, 170);'>" 
        + "<br><span style='float: left;'><h1>" + laLista[i].titoloFilm + "</h1></span><span style='float: right;'><img name=" + laLista[i].indice + " onclick='return rimuoviOrdine(this.name);' src='/img/remove.png' style='cursor: pointer;' width='30px'/></span><h3><br><br>Giorno: "
        +laLista[i].giornoSelezionato +"<br>Orario: "+ laLista[i].orarioSelezionato + ":00" +
        "<br>Numero biglietti: "+laLista[i].n_biglietti +"</h3>"+
        "<span style='font-style: normal; font-size: x-large;'><strong  name='prodotto'>"+"Importo: " +laLista[i].importo+"</strong></span>" +
        "<span style='font-style: normal; font-size: x-large;'><strong>"+"€</strong></span>" + "</div>");
        tot = parseFloat(laLista[i].importo)+tot;

        }
       
    document.getElementById("daRiempire").innerHTML = contenuto;
    document.getElementById("importo_tot").innerHTML = tot.toFixed(2)+"€";
    
    return true;
}

function inviaDati() {

    //controllo accesso utente
    if (window.sessionStorage.getItem("nomeUtente")==null) { alert("Devi prima accedere per poter comprare dei biglietti!"); return; }

    var film = document.getElementById("form_titolofilm").innerHTML;

    var e1 = document.getElementById("giorno");
    var day = e1.options[e1.selectedIndex].value; 
    //controllo dati non vuoti
    if (day=="") { alert("Seleziona un giorno!"); return; }

    var e2 = document.getElementById("orario");
    var hour = e2.options[e2.selectedIndex].value;
    //controllo dati non vuoti
    if (hour=="") { alert("Seleziona un orario!"); return; }

    var num =  document.getElementById("num_biglietti").value;
    //controllo dati non vuoti
    if (num<1) { alert("Seleziona un numero positivo di biglietti!"); return; }

    var costo =  document.getElementById("importo").innerHTML;

    var laLista = JSON.parse(sessionStorage.getItem("listaOrdini"));    //gli ordini finora

    var x = (laLista.length + 1);   
    x = "ordine" + x;   //nome nuovo ordine
    
    // creazione nuovo oggetto ordine
    var oggetto = { titoloFilm: film, giornoSelezionato: day, orarioSelezionato: hour, n_biglietti: num, importo: costo, indice: x };

    laLista.push(oggetto);

    var laListaStringifata = JSON.stringify(laLista);   //stringifiamo la lista per poi riaggiungerla al sessionStorage

    sessionStorage.setItem("listaOrdini", laListaStringifata);

    alert("Aggiunto al carrello!");

    location=location;  //per aggiornare l'icona cart-full
}

function calcolaPrezzo() {
    var giorno = document.getElementById("giorno").value;
    var n = document.getElementById("num_biglietti").value;
    var tipo = document.forms.form_carrello.tipo.value;
    if(giorno == "" || n<=0){return true;}
    if((giorno == "Sabato") || (giorno=="Domenica")){
      
        if(tipo=="studente"){
            var costo =(5.50*n).toFixed(2);
            document.getElementById("importo").innerHTML=costo;
        }
        else if(tipo=="minorenne"){
            var costo = (6.50*n).toFixed(2);
            document.getElementById("importo").innerHTML=costo;
        }
        else{
            var costo = (9.50*n).toFixed(2);
            document.getElementById("importo").innerHTML=costo;
        }
    }
    else{
        if(tipo=="studente"){
            var costo = (3.30*n).toFixed(2);
            document.getElementById("importo").innerHTML=costo;
        }
        else if(tipo=="minorenne"){
            var costo = (5.00*n).toFixed(2);
            document.getElementById("importo").innerHTML=costo;
        }
        else{
            var costo = (7.50*n).toFixed(2);
            document.getElementById("importo").innerHTML=costo;
        }
    }
    return true;
}

function passaTitolo(titolo) {
    document.getElementById('form_titolofilm').innerHTML=titolo;
    return true;
}

function cambiaLogo() {
    var ilMetodo=$("#metodoPagamento").val();
    if (ilMetodo=="") $("span.logo2").html("");
    else if (ilMetodo=="Visa") $("span.logo2").html("<i class='fa fa-cc-visa' style='color: chocolate; font-size: 60px;'></i></div>");
    else if (ilMetodo=="Mastercard") $("span.logo2").html("<i class='fa fa-cc-mastercard' style='color: chocolate; font-size: 60px;'></i></div>");
    else $("span.logo2").html("<i class='fa fa-cc-amex' style='color: chocolate; font-size: 60px;'></i></div>");
}

function controllaCompra() {
    if(JSON.parse(sessionStorage.getItem("listaOrdini")).length==0) { alert("Aggiungi prima qualcosa nel carrello!"); location="/programmazione.html"; return false; }
    if(document.getElementById("metodoPagamento").value=="") { alert("Inserisci un metodo di pagamento!"); return false; }
    if(document.getElementById("numeroCarta").value.length!=16) { alert("Inserisci un numero di carta corretto!"); return false; }
    var pattern = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if(!(document.getElementById("scadenza").value.match(pattern))) { alert("Inserisci una data di scadenza corretta!"); return false; }
    if(document.getElementById("cvv").value.length!=3) { alert("Inserisci un cvv corretto!"); return false; }
    if(!document.getElementById("check").checked) { alert("Accetta termini e condizioni d'uso!"); return false; }
    else { 
        var arrayVuoto = new Array();
        var arrayVuotoJSON = JSON.stringify(arrayVuoto);
        sessionStorage.setItem("listaOrdini", arrayVuotoJSON);
        alert("Acquisto andato a buon fine!");
        location="/homepage.html"; 
        return true;
    }   
}

function verificaAccesso() {
    var nome = sessionStorage.getItem("nomeUtente");
    if(nome!=null) {
        var destinazione = "/invia.php?name=" + nome;
        document.getElementById("form").action = destinazione;  //(contatti.php, riga 63)
    }
    else {
        document.getElementById("ilBottone").disabled=true;
        document.getElementById("laTextArea").disabled=true;
        document.getElementById("laTextArea").placeholder="Per mandarci un messaggio devi accedere al sito!";
    }
    return true;
}

function cambiaBarra() {
    document.getElementById("valore").innerHTML = document.getElementById("barra").value;
}