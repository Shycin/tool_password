$(document).ready(function() {

	$("body").append(""+
		"<style>"+
			".tool_show_password{position:absolute;float:right;min-width:10px;min-height:10px;}"+
		"</style>"+
	"");

	var handler_password = function()
	{
		var position = $(this).parent().find($("input:password"));


		var start = position.position().left;
		var taille = position.width();

		var calcul = start + taille - position.height(); //calcul distance élément initial + sa longueur - la taille que va faire le nouvelle élément

		$(this).css({
	      	"left": ""+calcul+"",
	      	"height": ""+position.height()+"",
	      	"width": ""+position.height()+"",
	    });
	}


	$("input:password").parent().append("<img class='tool_show_password' src='https://raw.githubusercontent.com/Shycin/tool_password/master/show_password.png'>");
	$(".tool_show_password").on( "load", handler_password );


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
