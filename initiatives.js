$(document).ready(function(){
	$('#textdiv').css("opacity","0.5");
	$('#blood').css("opacity", "0.5");
	$('#bigdiv').hover(function(){
		$('#textdiv').fadeTo(100,1);
		$('#bloodtext').css("color", "#185E18");
		$('#blood').css("opacity","1.0").css("box-shadow","0 0 20px #000");
	},function(){
		$('#textdiv').fadeTo(100,0.5);
		$('#bloodtext').css("color", "#000");
		$('#blood').css("opacity","0.5").css("box-shadow","none");
	});

	$('#textdivhealth').css("opacity","0.5");
	$('#health').css("opacity", "0.5");
	$('#bigdivhealth').hover(function(){
		$('#textdivhealth').fadeTo(100,1);
		$('#healthtext').css("color", "#185E18");
		$('#health').css("opacity","1.0").css("box-shadow","0 0 20px #000");
	},function(){
		$('#textdivhealth').fadeTo(100,0.5);
		$('#healthtext').css("color", "#000");
		$('#health').css("opacity","0.5").css("box-shadow","none");
	});

	$('#textdiveye').css("opacity","0.5");
	$('#eye').css("opacity", "0.5");
	$('#bigdiveye').hover(function(){
		$('#textdiveye').fadeTo(100,1);
		$('#eyetext').css("color", "#185E18");
		$('#eye').css("opacity","1.0").css("box-shadow","0 0 20px #000");
	},function(){
		$('#textdiveye').fadeTo(100,0.5);
		$('#eyetext').css("color", "#000");
		$('#eye').css("opacity","0.5").css("box-shadow","none");
	});

	$('#textdivku').css("opacity","0.5");
	$('#ku').css("opacity", "0.5");
	$('#bigdivku').hover(function(){
		$('#textdivku').fadeTo(100,1);
		$('#kutext').css("color", "#185E18");
		$('#ku').css("opacity","1.0").css("box-shadow","0 0 20px #000");
	},function(){
		$('#textdivku').fadeTo(100,0.5);
		$('#kutext').css("color", "#000");
		$('#ku').css("opacity","0.5").css("box-shadow","none");
	});

	$('#contentlist').css("height", "0");

    $('#menuicon').click(function(){
    	$('#contentlist').animate({height: "100%"}, 1000, 'easeOutBounce');
    });
   

    $('#closeicon').click(function(){
      $('#contentlist').animate({height: "0"}, 1000, 'easeOutBounce');
    });
    
    
});

