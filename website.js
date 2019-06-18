$(document).ready(function(){
	$('#contentlist').css("height", "0");

    $('#rightmenu').click(function(){
    	$('#contentlist').animate({height: "100%"}, 1000, 'easeInExpo');
    });
   

    $('#closeicon').click(function(){
      $('#contentlist').animate({height: "0"}, 1000, 'easeInExpo');
    });
});