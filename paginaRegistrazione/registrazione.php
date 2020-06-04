<html>
    <head>
    <script type="text/javascript" lang="javascript" src="RegistrazioneScript.js"></script>
    </head>
    <body>
        <?php
            $dbconn=pg_connect("host=localhost port=5432 dbname=CinemaMarcoPolo user=postgres password=admin")
            or die('Could not connect: ' . pg_last_error());
            if(!(isset($_POST['registrationButton']))){
                header("Location: ../homepage.html");
            }else{
                $email=$_POST['inputEmail'];
                $q1="select * from utenti where email=$1";
                $result=pg_query_params($dbconn, $q1, array($email));
                if($line=pg_fetch_array($result, null, PGSQL_ASSOC)){
                    echo "<h1>Sei gia registrato</h1>
                    <a href=../paginaLogin/login.html> Clicca qui per il login </a>";
                }else{
                    $nome=$_POST['inputName'];
                    $cognome=$_POST['inputSurname'];
                    $password=md5($_POST['inputPassword']);
                    $q2="insert into utenti(email,nome,cognome,password) values ($1,$2,$3,$4)";
                    $data=pg_query_params($dbconn,$q2,array($email,$nome,$cognome,$password));
                    if($data){
                        header("Location: ../paginaLogin/login.html");
                    }
                }
            }
        ?>
    </body>
</html>