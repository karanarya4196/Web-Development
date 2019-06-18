
$(document).ready(function(){
	$('#5').click(function(e) {
    e.preventDefault();
	});
	$('#6').click(function(e) {
    e.preventDefault();
	});
	$('#7').click(function(e) {
    e.preventDefault();
	});
	$('#8').click(function(e) {
    e.preventDefault();
	});

	$('#contactusbox').hide();
	$('#reachbox').hide();
	$('#instructionbox').hide();
	$('#1').css("border-bottom", "2px solid #F6FF4D");

	$('#5').click(function(){
		$('#contactusbox').hide();
		$('#reachbox').hide();
		$('#instructionbox').hide();
		$('#introbox').fadeIn('normal','linear');
		$('#1').css("border-bottom", "2px solid #F6FF4D");
		$('#2').css("border-bottom", "0");
		$('#3').css("border-bottom", "0");
		$('#4').css("border-bottom", "0");
	});
	$('#6').click(function(){
		$('#contactusbox').hide();
		$('#introbox').hide();
		$('#instructionbox').hide();
		$('#reachbox').fadeIn('normal','linear');
		$('#2').css("border-bottom", "2px solid #F6FF4D");
		$('#1').css("border-bottom", "0");
		$('#3').css("border-bottom", "0");
		$('#4').css("border-bottom", "0");
	});

	$('#7').click(function(){
		$('#contactusbox').hide();
		$('#introbox').hide();
		$('#reachbox').hide();
		$('#instructionbox').fadeIn('normal','linear');
		$('#3').css("border-bottom", "2px solid #F6FF4D");
		$('#1').css("border-bottom", "0");
		$('#2').css("border-bottom", "0");
		$('#4').css("border-bottom", "0");
	});
	$('#8').click(function(){
		$('#instructionbox').hide();
		$('#introbox').hide();
		$('#reachbox').hide();
		$('#contactusbox').fadeIn('normal','linear');
		$('#4').css("border-bottom", "2px solid #F6FF4D");
		$('#1').css("border-bottom", "0");
		$('#2').css("border-bottom", "0");
		$('#3').css("border-bottom", "0");
	});

	$('#contentlist').css("height", "0");

    $('#menuicon').click(function(){
    	$('#contentlist').animate({height: "100%"}, 1000, 'easeOutBounce');
    });
   

    $('#closeicon').click(function(){
      $('#contentlist').animate({height: "0"}, 1000, 'easeOutBounce');
    });
});