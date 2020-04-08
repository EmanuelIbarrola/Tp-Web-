var cant=0;
$(document).ready(function(){
	$(".curso-inscripcion-link").click(function(){
		cant++;
		$(".pts-compras").text(cant);
		var pts=$(".pts-compras").val();
		localStorage.getItem(pts);
			$(".pts-compras").append(pts);
	});
	$(".restar").click(function(){
		if (cant>0) {
		cant--;
		$(".pts-compras").text(cant);
	  }
	});

});