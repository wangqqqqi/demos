window.onload=function(){
	setInterval(fn,3000)
	let num=0
	function fn(){
		num++;
		if(num==2){
			num=0;
		}
		$('.banner>li').css({opacity:0,transition:'opacity 1s'});
		$('.banner>li').eq(num).css({opacity:1,transition:'opacity 1s'});
	}
	$('.back').click(function(){
		 $('body,html').animate({scrollTop:0},1000);
	})
}
