
<html>
    <head>
      <!--  <script type="text/javascript" lang="javascript" src="ScriptLog.js"></script> -->
    </head>
    <body>
        <?php
            $dbconn= pg_connect("host=localhost port=5432 dbname=CinemaMarcoPolo user=postgres password=admin")
            or die('Could not connect: ' . pg_last_error());
            if(!(isset($_POST['loginButton']))){    //accesso solo da html
                header("Location: ../homepage.html");
            }else{
                $email=$_POST['inputEmail'];
                $q1="select * from utenti where email=$1";
                $result=pg_query_params($dbconn, $q1, array($email));
                if(!($line=pg_fetch_array($result, null, PGSQL_ASSOC))){
                    echo "<h1> Non sei registrato</h1>
                    <a href=../paginaRegistrazione/registrazione.html>
                    Clicca qui per registrarti
                    </a>";
                }else{
                    $password = md5($_POST['inputPassword']);
                    $q2="select * from utenti where email=$1 and password=$2";
                    $result=pg_query_params($dbconn,$q2, array($email,$password));
                    if(!($line=pg_fetch_array($result,null, PGSQL_ASSOC))){
                        echo "<h1> Password errata</h1>
                        <a href=login.html>Clicca qui per il login
                        </a>";
                    }else{
                        $x = $line['nome'];
                        header("Location: ./redirect.php?username=$x");
                    }
                }
           }  
        ?>
    </body>
</html>