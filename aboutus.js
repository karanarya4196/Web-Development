$(document).ready(function(){
	
    $('#imageslider img:gt(0)').hide();
    setInterval(function(){
      $('#imageslider :first-child').fadeOut(0)
         .next('img').fadeIn(2000)
         .end().appendTo('#imageslider');
     }, 3000);

    $('#contentlist').css("height", "0");

    $('#menuicon').click(function(){
        $('#contentlist').animate({height: "100%"}, 1000, 'easeOutBounce');
    });
   

    $('#closeicon').click(function(){
      $('#contentlist').animate({height: "0"}, 1000, 'easeOutBounce');
    });

});