$(document).ready(function(){
	$('.convenertextbox').hide();
	$('.bajiyaposttextbox').hide();
	$('.gajjuposttextbox').hide();
	$('.hospitextbox').hide();
	$('.markettextbox').hide();
	$('.regtextbox').hide();


	$('.convenerdetailbox').click(function(){
		$('.convenertextbox').toggle(500, 'easeOutBounce');
	});

	$('.bajiyapostdetailbox').click(function(){
		$('.bajiyaposttextbox').toggle(500, 'easeOutBounce');
	});

	$('.gajjupostdetailbox').click(function(){
		$('.gajjuposttextbox').toggle(500, 'easeOutBounce');
	});

	$('.hospidetailbox').click(function(){
		$('.hospitextbox').toggle(500, 'easeOutBounce');
	});

	$('.marketdetailbox').click(function(){
		$('.markettextbox').toggle(500, 'easeOutBounce');
	});

	$('.regdetailbox').click(function(){
		$('.regtextbox').toggle(500, 'easeOutBounce');
	});

	$('.fb').hover(function(){
		$(this).css("border-radius", "50%");
	},function(){
		$(this).css("border-radius", "0");
	});

	$('.li').hover(function(){
		$(this).css("border-radius", "50%");
	},function(){
		$(this).css("border-radius", "0");
	});

	$('#contentlist').css("height", "0");

    $('#menuicon').click(function(){
    	$('#contentlist').animate({height: "100%"}, 1000, 'easeOutBounce');
    });
   

    $('#closeicon').click(function(){
      $('#contentlist').animate({height: "0"}, 1000, 'easeOutBounce');
    });
	
});