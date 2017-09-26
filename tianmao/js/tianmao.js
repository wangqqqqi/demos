window.onload=function(){
	/*轮播*/
	$(function(){
		let now=next=0;
		let imgs=$('.banner-img');
		let buttons=$(".dots>li");
		buttons.each(function(index,obj){
			$(this).mouseenter(function(){
				if(index<now){
					imgs.eq(index).css({left:-1030})
					imgs.eq(now).animate({left:1030})
					imgs.eq(index).animate({left:0})
					buttons.css({background:"#a2a2a2"});
					buttons.eq(index).css({background:"#fff"});
					now=next=index;
				}
				if(index>now){
					imgs.eq(index).css({left:1030})
					imgs.eq(now).animate({left:-1030})
					imgs.eq(index).animate({left:0})
					buttons.css({background:"#a2a2a2"});
					buttons.eq(index).css({background:"#fff"});
					now=next=index;
				}
			})
		})
		let t=setInterval(fn,3000);
		function fn(){
			if(next==imgs.length-1){
				next=0
			}
			next++;
			imgs.eq(next).css({left:1030})
			imgs.eq(now).animate({left:-1030})
			imgs.eq(next).animate({left:0})
			buttons.css({background:"#a2a2a2"});
			buttons.eq(next).css({background:"#fff"});
			now=next;
		}
		$('.imgBox').mouseenter(function(){
			clearInterval(t);
		})
		$('.imgBox').mouseleave(function(){
			t=setInterval(fn,3000);
		})
	})
	/*测导航隐藏*/
	$(function(){
		$(".aside>li").each(function(index,obj){
			$(this).mouseenter(function(){
				$(".aside-hidden").eq(index).css({display:"block"})
			})
			$(this).mouseleave(function(){
				$(".aside-hidden").eq(index).css({display:"none"})
			})
		})
	})
	/*固定窗口*/
	$(function(){
		let gao=window.innerHeight;
		let floor=$("section");
		let newarr=[];
		let anjian=$(".box");
		let nthfloor=0;
		
		anjian.each(function(index,obj){
			$(this).click(function(){
				$('body,html').animate({scrollTop:newarr[index]});
			})
		})
		floor.each(function(index,obj){
			newarr.push($(obj).offset().top);
		})
	})
	$(window).scroll(function(){
			let juli=$(document).scrollTop();
			console.log(juli);
			let search=$(".search");
			let flag=true;
			
			if(juli>500){
				if(flag){
					flag=false;
					search.animate({top:'-50px'},500);
				}
			}else{
				search.animate({top:'0px'},500);
			}
		})
}
