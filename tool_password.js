$(document).ready(function() {

	$("body").append(""+
		"<style>"+
			".tool_show_password{position:absolute;float:right;min-width:10px;min-height:10px;}"+
		"</style>"+
	"");

	function findPos(obj){

	    var curleft = 0;
	    var static = 1;

	    if (obj.offsetParent) 
	    {
	        curleft = obj.offsetLeft

	        while (obj = obj.offsetParent) 
	        {
	        	if(static)
	        	{
	        		if($(obj).css("position") != "static")
	        		{
	        			static = 0;
	        		}

	        		curleft += obj.offsetLeft
	        	}
	            
	        }
	    }
	    return curleft;
	}

	function handler_password()
	{
		var position = $(this).parent().find($("input:password"));


		var start = findPos($(position).get(0));
		var taille = position.width();


		var calcul = start + taille - position.height(); //calcul distance élément initial + sa longueur - la taille que va faire le nouvelle élément


		$(this).css({
	      	"left": calcul,
	      	"height": position.height(),
	      	"width": position.height(),
	    });
	}


	$("input:password").parent().append("<img class='tool_show_password' src='https://raw.githubusercontent.com/Shycin/tool_password/master/show_password.png'>");

	$(".tool_show_password").on( "load" , handler_password );

	$(window).resize(function(){

		$("input:password").each(function() {

			var position = $(this);
			var element = $(this).parent().find($("img.tool_show_password"));

			var start = findPos($(position).get(0));
			var taille = position.width();


			var calcul = start + taille - position.height(); //calcul distance élément initial + sa longueur - la taille que va faire le nouvelle élément


			$(element).css({
		      	"left": calcul,
		      	"height": position.height(),
		      	"width": position.height(),
		    });
		});

	});

	

	$( "input:password" ).parent().find(".tool_show_password")
	.on("mousedown",function(){

		var element = $(this).parent().find($("input:password"));

		$(element).attr("type","text");
		$(element).addClass( "add_show_password" );
	})
	.on("mouseup",function(){

		var element = $(this).parents().find($("input.add_show_password"));

		$(element).attr("type","password");
		$(element).removeClass( "add_show_password" );
	});

});
