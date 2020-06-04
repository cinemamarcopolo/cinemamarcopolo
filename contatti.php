<!DOCTYPE html>
<html>
    <head>
        <title>Cinema Marco Polo - Contatti</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> 
        <script src="bootstrap-4.4.1/dist/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="functions.js"></script>
        <script type="text/javascript" src="Vue/vue.min.js"></script>
        <link rel="icon" href="img/icona.ico"/> <!--Icona del sito-->
        <link rel="stylesheet" type="text/css" href="bootstrap-4.4.1/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="bootstrap-4.4.1/dist/css/bootstrap-grid.css"/>
        <link rel="stylesheet" type="text/css" href="stile.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>

    <body onload="return verificaAccesso();">

        <div id="top">
            <barratop v-bind:value="sessione" v-on:fai-logout="updateLogin" v-on:cambia-carrello="updateCarrello"></barratop>
        </div>

        <!-- Fine navbar -->

        <div class="text-center intestazione">
            <h1><strong>Chi siamo</strong></h1>
            <br>
            <p>Cinema Marco Polo è un progetto studentesco indipendente che porta il cinema di qualità a Roma: 
                film in lingua originale, rassegne e promozioni imperdibili.
                <p>Progetto realizzato da: <strong>Giovanni Pecorelli, Jacopo Rossi, Giacomo Venneri</strong>.</p>
            </p>    
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg text-right">
                    <h2 class="titolo-film"><strong>Dove puoi trovarci</strong></h2>
                    <br>
                    <p>
                    Viale dello Scalo S. Lorenzo, 82<br>
                    00159 Roma RM<br><br>
                    
                    <strong>Numero di telefono:</strong> 981-134311<br><br>
                    
                    <strong>Email:</strong> <a href="mailto:cinemamarcopolo@gmail.com"><strong>cinemamarcopolo@gmail.com</strong></a><br><br>
                    
                    <strong>Orari:</strong> Lunedì - Domenica: 17:00 - 00:00</p><br>
                </div>
                <div class="col-xl-8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.8315172882!2d12.518717715700044!3d41.89648037224221!2m3!1f0!2f0!3f0!3m2!1i1024!
                    2i768!4f13.1!3m3!1m2!1s0x132f6184fe1c2b31%3A0x9e480ba3e76e73a9!2sSapienza%20Universit%C3%A0%20di%20Roma%20-%20Ex-Poste!5e0!3m2!1sit!2sit!4v1588327793469!5m2!1sit!2sit"
                    width="100%" height="500px" marginheight="0" marginwidth="0"></iframe>
                </div>  
            </div>
        </div>

        <br><br>

        <div class="text-center div-opinioni" >
            <h1><strong>Facci sapere la tua</strong></h1>
            <br>
            <form id="form" action="" method="POST">
                
                <label>La tua opinione è importante per noi. Raccontaci della tua esperienza al Cinema Marco Polo:</label><br>
                <br><br>

                <div>
                    <label><h3>Dacci un voto:</h3></label>
                    <input id="barra" name='bar' oninput="cambiaBarra()" class="slider" type="range" min="0" max="10" value="10">
                    <span><h3 id="valore">10</h3></span>
                </div>
                <br><br>
                
                <div class="w-100"><label>Mandaci un messaggio:</label><textarea id="laTextArea" name="ilMessaggio" maxlength="500" class="form-control" rows="10" style="resize: none;"></textarea></div><br>
                <button id="ilBottone" name="contattiButton" type="submit" class="btn right button btn-primary">Invia</button>
            </form>

            <?php

                $dbconn=pg_connect("host=localhost port=5432 dbname=CinemaMarcoPolo user=postgres password=admin")
                    or die('Could not connect: ' . pg_last_error());

                $query="select round(avg(voto), 2) from opinioni";
                $result=pg_query($dbconn, $query);
                
                $media="";
                if($line=pg_fetch_array($result, null, PGSQL_ASSOC)) $media = implode($line);
                if($media=="") { echo('<h3>Non abbiamo ancora ricevuto valutazioni.</h3>'); }
                else echo ('<br><h3>La nostra media attuale: ' . implode($line) . '</h3>'); 
            ?>

            <br><br><br>
        </div>

        <!-- Inizio footer -->
        
        <div id="sotto">
            <barrasotto></barrasotto>
        </div>        

        <script type="text/javascript" src="pattern.js"></script>

    </body>
</html>