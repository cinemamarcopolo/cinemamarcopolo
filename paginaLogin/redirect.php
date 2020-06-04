<html>
    <head>
        <meta http-equiv = "refresh" content = "0.01; url = ../homepage.html"/>    <!--reindirizzamento dopo 0.01s-->
        <script type="text/javascript" lang="javascript" src="loginFunctions.js"></script>
    </head>

    <?php
        $nome=$_GET['username'];
        echo "<body onload='return goToHome(\"$nome\");'>
        
        <h1>Stai venendo reindirizzato...</h1>
        <a href='../homepage.html'><h2>Clicca qui per andare alla homepage</a>
        
        </body>";
    ?>
</html>