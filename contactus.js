$(document).ready(function(){

    $('#contentlist').css("height", "0");

    $('#menuicon').click(function(){
    	$('#contentlist').animate({height: "100%"}, 1000, 'easeOutBounce');
    });
   

    $('#closeicon').click(function(){
      $('#contentlist').animate({height: "0"}, 1000, 'easeOutBounce');
    });
    
});