# tool_password

auteur : JACQUES Antony

Description : Utiliser tool_password.js pour inclure dans vos projets un bouton pour rendre visible les mots de passes de vos champs type = "password" tant que le clic est maintenu 

Utilisation : Pour inclure cet feature vous n'avez qu'à ajouter le fichier tool_password.js à votre projet, où sur vos pages contenants des input de type = "password"

Inclure le fichier dans votre projet par le biais d'un script<br> 
<BLOCKQUOTE> <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js "></script><br> 
 <script type="text/javascript"><br> 
$(document).ready(function()<br> 
{<br> 
$.get( "https://raw.githubusercontent.com/Shycin/tool_password/master/tool_password.js", function( data ) {<br> 
$("body").prepend("<script>"+data+"<\/script>");<br> 
});<br> 
});<br> 
</script><br> 
