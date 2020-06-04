<html>
    <head></head>
    <body>
        <?php
            $dbconn=pg_connect("host=localhost port=5432 dbname=CinemaMarcoPolo user=postgres password=admin")
            or die('Could not connect: ' . pg_last_error());
            if(!(isset($_POST['contattiButton']))){    //accesso solo da html
                header("Location: ../homepage.html");
            }else{
                $nome=$_GET['name'];
                $messaggio=$_POST['ilMessaggio'];
                $voto=$_POST['bar'];
                
                $query="insert into opinioni(nome,messaggio,voto) values ($1,$2,$3)";
                $data=pg_query_params($dbconn,$query,array($nome,$messaggio,$voto));
                if($data) header("Location: /contatti.php");
            }
        ?>
    </body>
</html>