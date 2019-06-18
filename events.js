$(document).ready(function(){
	$('#vectorbox').hide();
	$('#genusbox').hide();
	$('#ignitedbox').hide();
	$('#fabricabox').hide();
	$('#agnitiobox').hide();
	$('#polarisbox').hide();
	$('#synecticsbox').hide();
	$('#panaceabox').hide();
	$('#bullseyebox').hide();
	$('#anabox').hide();
	$('#2').hide();
	$('#3').hide();
	$('#4').hide();
	$('#5').hide();
	$('#7').hide();
	$('#8').hide();
	$('#9').hide();
	$('#10').hide();
	$('#12').hide();
	$('#13').hide();
	$('#14').hide();
	$('#15').hide();

	$('#1').click(function(e) {
    e.preventDefault();
	});
	$('#2').click(function(e) {
    e.preventDefault();
	});
	$('#3').click(function(e) {
    e.preventDefault();
	});
	$('#4').click(function(e) {
    e.preventDefault();
	});
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
	$('#9').click(function(e) {
    e.preventDefault();
	});
	$('#10').click(function(e) {
    e.preventDefault();
	});
	$('#11').click(function(e) {
    e.preventDefault();
	});
	$('#12').click(function(e) {
    e.preventDefault();
	});
	$('#13').click(function(e) {
    e.preventDefault();
	});
	$('#14').click(function(e) {
    e.preventDefault();
	});
	$('#15').click(function(e) {
    e.preventDefault();
	});
	$('#16').click(function(e) {
    e.preventDefault();
	});

	$('#1').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#2').css("border-bottom","0px");
		$('#3').css("border-bottom","0px");
		$('#4').css("border-bottom","0px");
		$('#2').fadeIn(400, 'linear');
		$('#3').fadeIn(800, 'linear');
		$('#4').fadeIn(1200, 'linear');
		$('#5').fadeIn(1600, 'linear');
		$('#fabricabox').hide(400);
		$('#agnitiobox').hide(400);
		$('#polarisbox').hide(400);
		$('#synecticsbox').hide(400);
		$('#panaceabox').hide(400);
		$('#bullseyebox').hide(400);
	});

	$('#2').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#1').css("border-bottom","0px");
		$('#3').css("border-bottom","0px");
		$('#4').css("border-bottom","0px");
		$('#5').css("border-bottom","0px");
		$('#genusbox').hide();
		$('#ignitedbox').hide();
		$('#vectorbox').fadeIn(1500, 'linear');
		$('#fabricabox').hide(400);
		$('#agnitiobox').hide(400);
		$('#polarisbox').hide(400);
		$('#synecticsbox').hide(400);
		$('#panaceabox').hide(400);
		$('#bullseyebox').hide(400);
	});
	$('#3').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#1').css("border-bottom","0px");
		$('#2').css("border-bottom","0px");
		$('#4').css("border-bottom","0px");
		$('#5').css("border-bottom","0px");
		$('#ignitedbox').hide();
		$('#vectorbox').hide();
		$('#genusbox').fadeIn(1500, 'linear');
		$('#fabricabox').hide(400);
		$('#agnitiobox').hide(400);
		$('#polarisbox').hide(400);
		$('#synecticsbox').hide(400);
		$('#panaceabox').hide(400);
		$('#bullseyebox').hide(400);
	});
	$('#4').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#1').css("border-bottom","0px");
		$('#3').css("border-bottom","0px");
		$('#2').css("border-bottom","0px");
		$('#5').css("border-bottom","0px");
		$('#genusbox').hide();
		$('#vectorbox').hide();
		$('#ignitedbox').fadeIn(1500, 'linear');
		$('#fabricabox').hide(400);
		$('#agnitiobox').hide(400);
		$('#polarisbox').hide(400);
		$('#synecticsbox').hide(400);
		$('#panaceabox').hide(400);
		$('#bullseyebox').hide(400);
	});
	$('#5').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#4').fadeOut(400, 'linear');
		$('#1').css("border-bottom","0");
		$(this).fadeOut(200,'linear');
		$('#3').fadeOut(800,'linear');
		$('#2').fadeOut(1200,'linear');
		$('#genusbox').hide(400);
		$('#vectorbox').hide(400);
		$('#ignitedbox').hide(400);
		$('#fabricabox').hide(400);
		$('#agnitiobox').hide(400);
		$('#polarisbox').hide(400);
		$('#synecticsbox').hide(400);
		$('#panaceabox').hide(400);
		$('#bullseyebox').hide(400);
	});


	$('#6').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#7').css("border-bottom","0px");
		$('#8').css("border-bottom","0px");
		$('#9').css("border-bottom","0px");
		$('#7').fadeIn(400, 'linear');
		$('#8').fadeIn(800, 'linear');
		$('#9').fadeIn(1200, 'linear');
		$('#10').fadeIn(1600, 'linear');
		$('#genusbox').hide(400);
		$('#vectorbox').hide(400);
		$('#ignitedbox').hide(400);
		$('#synecticsbox').hide(400);
		$('#panaceabox').hide(400);
		$('#bullseyebox').hide(400);
	});

	$('#7').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#6').css("border-bottom","0px");
		$('#8').css("border-bottom","0px");
		$('#9').css("border-bottom","0px");
		$('#10').css("border-bottom","0px");
		$('#agnitiobox').hide();
		$('#fabricabox').fadeIn(1500, 'linear');
		$('#polarisbox').hide();
		$('#genusbox').hide(400);
		$('#vectorbox').hide(400);
		$('#ignitedbox').hide(400);
		$('#synecticsbox').hide(400);
		$('#panaceabox').hide(400);
		$('#bullseyebox').hide(400);
	});
	$('#8').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#6').css("border-bottom","0px");
		$('#7').css("border-bottom","0px");
		$('#9').css("border-bottom","0px");
		$('#10').css("border-bottom","0px");
		$('#fabricabox').hide();
		$('#agnitiobox').hide();
		$('#polarisbox').fadeIn(1500, 'linear');
		$('#genusbox').hide(400);
		$('#vectorbox').hide(400);
		$('#ignitedbox').hide(400);
		$('#synecticsbox').hide(400);
		$('#panaceabox').hide(400);
		$('#bullseyebox').hide(400);
	});
	$('#9').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#6').css("border-bottom","0px");
		$('#8').css("border-bottom","0px");
		$('#7').css("border-bottom","0px");
		$('#10').css("border-bottom","0px");
		$('#fabricabox').hide();
		$('#polarisbox').hide();
		$('#agnitiobox').fadeIn(1500, 'linear');
		$('#genusbox').hide(400);
		$('#vectorbox').hide(400);
		$('#ignitedbox').hide(400);
		$('#synecticsbox').hide(400);
		$('#panaceabox').hide(400);
		$('#bullseyebox').hide(400);
	});
	$('#10').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#9').fadeOut(400, 'linear');
		$('#6').css("border-bottom","0");
		$(this).fadeOut(200,'linear');
		$('#8').fadeOut(800,'linear');
		$('#7').fadeOut(1200,'linear');
		$('#fabricabox').hide(400);
		$('#agnitiobox').hide(400);
		$('#polarisbox').hide(400);
		$('#genusbox').hide(400);
		$('#vectorbox').hide(400);
		$('#ignitedbox').hide(400);
		$('#synecticsbox').hide(400);
		$('#panaceabox').hide(400);
		$('#bullseyebox').hide(400);
	});

	
	$('#11').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#12').css("border-bottom","0px");
		$('#13').css("border-bottom","0px");
		$('#14').css("border-bottom","0px");
		$('#14').css("border-bottom","0px");
		$('#12').fadeIn(400, 'linear');
		$('#13').fadeIn(800, 'linear');
		$('#14').fadeIn(1200, 'linear');
		$('#15').fadeIn(1600, 'linear');
		$('#genusbox').hide(400);
		$('#vectorbox').hide(400);
		$('#ignitedbox').hide(400);
		$('#fabricabox').hide(400);
		$('#agnitiobox').hide(400);
		$('#polarisbox').hide(400);
		
	});
	$('#12').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#11').css("border-bottom","0px");
		$('#13').css("border-bottom","0px");
		$('#14').css("border-bottom","0px");
		$('#15').css("border-bottom","0px");
		$('#panaceabox').hide();
		$('#synecticsbox').fadeIn(1500, 'linear');
		$('#bullseyebox').hide();
		$('#genusbox').hide(400);
		$('#vectorbox').hide(400);
		$('#ignitedbox').hide(400);
		$('#fabricabox').hide(400);
		$('#agnitiobox').hide(400);
		$('#polarisbox').hide(400);
	});
	$('#13').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#11').css("border-bottom","0px");
		$('#12').css("border-bottom","0px");
		$('#14').css("border-bottom","0px");
		$('#15').css("border-bottom","0px");
		$('#bullseyebox').hide();
		$('#synecticsbox').hide();
		$('#panaceabox').fadeIn(1500, 'linear');
		$('#genusbox').hide(400);
		$('#vectorbox').hide(400);
		$('#ignitedbox').hide(400);
		$('#fabricabox').hide(400);
		$('#agnitiobox').hide(400);
		$('#polarisbox').hide(400);
	});
	$('#14').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#11').css("border-bottom","0px");
		$('#13').css("border-bottom","0px");
		$('#14').css("border-bottom","0px");
		$('#15').css("border-bottom","0px");
		$('#synecticsbox').hide();
		$('#panaceabox').hide();
		$('#bullseyebox').fadeIn(1500, 'linear');
		$('#genusbox').hide(400);
		$('#vectorbox').hide(400);
		$('#ignitedbox').hide(400);
		$('#fabricabox').hide(400);
		$('#agnitiobox').hide(400);
		$('#polarisbox').hide(400);
	});
	$('#15').click(function(){
		$(this).css("border-bottom","3px solid #37B0B0");
		$('#14').fadeOut(400, 'linear');
		$('#11').css("border-bottom","0");
		$(this).fadeOut(200,'linear');
		$('#13').fadeOut(800,'linear');
		$('#12').fadeOut(1200,'linear');
		$('#fabricabox').hide(400);
		$('#agnitiobox').hide(400);
		$('#polarisbox').hide(400);
		$('#genusbox').hide(400);
		$('#vectorbox').hide(400);
		$('#ignitedbox').hide(400);
		$('#synecticsbox').hide(400);
		$('#panaceabox').hide(400);
		$('#bullseyebox').hide(400);
	});


	$('#anamenu').click(function(){
		$('#anabox').toggle(500);
	});

	$('#contentlist').css("height", "0");

    $('#menuicon').click(function(){
    	$('#contentlist').animate({height: "100%"}, 1000, 'easeOutBounce');
    });
   

    $('#closeicon').click(function(){
      $('#contentlist').animate({height: "0"}, 1000, 'easeOutBounce');
    });
});