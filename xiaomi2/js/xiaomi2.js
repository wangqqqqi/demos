window.onload=function(){
	
	/*导航隐藏栏*/
	$(function(){
		$(".navi-name1").each(function(index,obj){
			$(this).mouseenter(function(){
				$(".hidden").eq(index).css({display:"block"});
			})
			$(this).mouseleave(function(){
				$(".hidden").eq(index).css({display:"none"});
			})
		})
	})
	/*侧导航隐藏*/
	$(function(){
		$(".slide-main>li").hover(function(){
			$(".slide-main>li>.aside-hidden").hide();
			$(this).css({background:'#FF6700'})
			$(this).children().css({display:'flex'})
		})
		$(".slide-main>li").mouseleave(function(){
			$(this).css({background:'none'})
			$(this).children(".aside-hidden").css({display:'none'})
		})
	})
	
	/*banner*/
	$(function(){
		/*自动轮播*/
		let t=setInterval(fn,3000);
		let num=0;
		function fn(){
			num++;
			if(num==$('.imgbox-main>li').length){
				num=0;
			}
			$('.imgbox-main>li').each(function(index,obj){
				$(this).css({opacity:0,transition:'opacity 1s'});
				$('.lb-button>li').eq(index).css({background:'#757575'})
			})
			$('.imgbox-main>li').eq(num).css({opacity:1,transition:'opacity 1s'});
			$('.lb-button>li').eq(num).css({background:'#fff'})
		}
		function fn2(){
			num--;
			if(num==-1){
				num=$('.imgbox-main>li').length-1;
			}
			$('.imgbox-main>li').each(function(index,obj){
				$(this).css({opacity:0,transition:'opacity 1s'});
				$('.lb-button>li').eq(index).css({background:'#757575'})
			})
			$('.imgbox-main>li').eq(num).css({opacity:1,transition:'opacity 1s'});
			$('.lb-button>li').eq(num).css({background:'#fff'})
		}
		$('.banner').mouseenter(function(){
			clearInterval(t);
		}).mouseleave(function(){
			t=setInterval(fn,3000);
		})
		
		/*banner 6个小按钮*/
		$('.lb-button>li').click(function(){
			num=$(this).index()-1;
			fn();
		})
		/*左右按钮*/
		$('.zy-button>li:eq(1)').click(function(){
			fn();
		})
		$('.zy-button>li:eq(0)').click(function(){
			fn2();
		})
	})
	
	/*小米精品*/
	$(function(){
		/*小米精品动画*/
	    let t1=setInterval(lunbo,3000);
	    let mat=0;
	    let flag=true;
	    function lunbo(){
	    	mat++;
	    	if(mat==2){
	    		mat=0;
	    		$(".five-main").animate({left:-1226*mat});
	    	}
	    	$(".five-main").animate({left:-1226*mat});
	    }
	    /*小米精品左右切换*/
	    $(".mijian2").click(function(){
	    	clearInterval(t1);
	    	mat++;
	    	if(mat==1){
	    		$(".mijian2").attr("disabled","disabled");
	    	}
	    	$(".mijian1").removeAttr("disabled");
	    	$(".five-main").animate({left:-1226*mat});
	    })
	    $(".mijian1").click(function(){
	   		clearInterval(t1);
	    	mat--;
	    	if(mat==0){
	    		$(".mijian1").attr("disabled","disabled");
	    	}
	    	$(".mijian2").removeAttr("disabled");
	    	$(".five-main").animate({left:1226*mat});
	    })
	})
    /*硬件切换*/
    $(function(){
    	$(".remenBT").each(function(index,obj){
    		$(this).mouseenter(function(){
    			$(".remenBT").css({color:"#424242",borderBottom:"none"})
    			$('.remen-hidden').css({display:"none",zIndex:'0'});
    			$(".remenBT").eq(index).css({color:"#ff6709",borderBottom:"2px solid #ff6709"})
    			$('.remen-hidden').eq(index).css({display:"block",zIndex:'0'});
    		})
    	})
    })
    /*搭配切换*/
    $(function(){
    	$(".DPhidden").each(function(index,obj){
    		$(this).mouseenter(function(){
    			$(".DPhidden").css({color:"#424242",borderBottom:"none"})
    			$('.dapei-hidden').css({display:"none",zIndex:'0'});
    			$(".DPhidden").eq(index).css({color:"#ff6709",borderBottom:"2px solid #ff6709"})
    			$('.dapei-hidden').eq(index).css({display:"block",zIndex:'0'});
    		})
    	})
    })
    /*配件切换*/
    $(function(){
    	$(".PJhidden").each(function(index,obj){
    		$(this).mouseenter(function(){
    			$(".PJhidden").css({color:"#424242",borderBottom:"none"})
    			$('.peijian-hidden').css({display:"none",zIndex:'0'});
    			$(".PJhidden").eq(index).css({color:"#ff6709",borderBottom:"2px solid #ff6709"})
    			$('.peijian-hidden').eq(index).css({display:"block",zIndex:'0'});
    		})
    	})
    })
    /*周边切换*/
    $(function(){
    	$(".zhoubianBT").each(function(index,obj){
    		$(this).mouseenter(function(){
    			$(".zhoubianBT").css({color:"#424242",borderBottom:"none"})
    			$('.zhoubian-hidden').css({display:"none",zIndex:'0'});
    			$(".zhoubianBT").eq(index).css({color:"#ff6709",borderBottom:"2px solid #ff6709"})
    			$('.zhoubian-hidden').eq(index).css({display:"block",zIndex:'0'});
    		})
    	})
    })
    /*为你推荐*/
    $(function(){
    	let Number=0;
	    $(".anjian2").click(function(){
	    	Number++;
	    	if(Number==3){
	    		$(this).attr("disabled",true);
	    	}
	    	$(".anjian1").removeAttr("disabled");
	    	$('.tuijian').animate({left:-1226*Number});
	    })
	    $(".anjian1").click(function(){
	    	Number--;
	    	if(Number==0){
	    		$(".anjian1").attr("disabled",true);
	    	}
	    	$(".anjian2").removeAttr("disabled");
	    	$('.tuijian').animate({left:-1226*Number});
	    })
    })
    
    /*内容*/
    $(function(){
    	let Now=Next=0;
    	let books=$('.book1');
	    let Buttons=$('div.point').eq(0).children();
    	$('.iconfont6').eq(0).click(function(){
    		if(Next==1){
    		$('.iconfont6').eq(0).attr("disabled",true);
    		}
    		$('.iconfont5').eq(0).removeAttr("disabled");
    		Next++;
    		books.eq(Next).css({left:296});
    		books.eq(Now).animate({left:-296});
    		books.eq(Next).animate({left:0});
    		Buttons.css({background:'#b0b0b0',border:"none"})
    		Buttons.eq(Next).css({background:'#fff',border:"1px solid #FF6700"});
    		Now=Next;
    	})
    	$('.iconfont5').eq(0).click(function(){
    		if(Next==1){
    		$('.iconfont5').eq(0).attr("disabled",true);
    		}
    		$('.iconfont6').eq(0).removeAttr("disabled");
    		Next--;
    		books.eq(Next).css({left:-296});
    		books.eq(Now).animate({left:296});
    		books.eq(Next).animate({left:0});
    		Buttons.css({background:'#b0b0b0',border:"none"})
    		Buttons.eq(Next).css({background:'#fff',border:"1px solid #FF6700"});
    		Now=Next;
    	})
    	Buttons.each(function(index,obj){
    		$(this).click(function(){
    			if(index<Now){
		            books.eq(index).css({left:-296});
		            books.eq(Now).animate({left:296});
		            books.eq(index).animate({left:0});
		            Buttons.css({background:'#b0b0b0',border:"none"})
	    			Buttons.eq(index).css({background:'#fff',border:"1px solid #FF6700"});
	    			Now=Next=index;
	    		}
    			if(index>Now){
		            books.eq(index).css({left:296});
		            books.eq(Now).animate({left:-296});
		            books.eq(index).animate({left:0});
		            Buttons.css({background:'#b0b0b0',border:"none"})
	    			Buttons.eq(index).css({background:'#fff',border:"1px solid #FF6700"});
	    			Now=Next=index;
	    		}
    		})
    	})
    })
    $(function(){
    	let Now=Next=0;
    	let books=$('.book3');
	    let Buttons=$('div.point').eq(2).children();
    	$('.iconfont6').eq(2).click(function(){
    		if(Next==1){
    		$('.iconfont6').eq(2).attr("disabled",true);
    		}
    		$('.iconfont5').eq(2).removeAttr("disabled");
    		Next++;
    		books.eq(Next).css({left:296});
    		books.eq(Now).animate({left:-296});
    		books.eq(Next).animate({left:0});
    		Buttons.css({background:'#b0b0b0',border:"none"})
    		Buttons.eq(Next).css({background:'#fff',border:"1px solid #FF6700"});
    		Now=Next;
    	})
    	$('.iconfont5').eq(2).click(function(){
    		if(Next==1){
    		$('.iconfont5').eq(2).attr("disabled",true);
    		}
    		$('.iconfont6').eq(2).removeAttr("disabled");
    		Next--;
    		books.eq(Next).css({left:-296});
    		books.eq(Now).animate({left:296});
    		books.eq(Next).animate({left:0});
    		Buttons.css({background:'#b0b0b0',border:"none"})
    		Buttons.eq(Next).css({background:'#fff',border:"1px solid #FF6700"});
    		Now=Next;
    	})
    	Buttons.each(function(index,obj){
    		$(this).click(function(){
    			if(index<Now){
		            books.eq(index).css({left:-296});
		            books.eq(Now).animate({left:296});
		            books.eq(index).animate({left:0});
		            Buttons.css({background:'#b0b0b0',border:"none"})
	    			Buttons.eq(index).css({background:'#fff',border:"1px solid #FF6700"});
	    			Now=Next=index;
	    		}
    			if(index>Now){
		            books.eq(index).css({left:296});
		            books.eq(Now).animate({left:-296});
		            books.eq(index).animate({left:0});
		            Buttons.css({background:'#b0b0b0',border:"none"})
	    			Buttons.eq(index).css({background:'#fff',border:"1px solid #FF6700"});
	    			Now=Next=index;
	    		}
    		})
    	})
    })
    $(function(){
    	let Now=Next=0;
    	let books=$('.book2');
	    let Buttons=$('div.point').eq(1).children();
    	$('.iconfont6').eq(1).click(function(){
    		if(Next==1){
    		$('.iconfont6').eq(1).attr("disabled",true);
    		}
    		$('.iconfont5').eq(1).removeAttr("disabled");
    		Next++;
    		books.eq(Next).css({left:296});
    		books.eq(Now).animate({left:-296});
    		books.eq(Next).animate({left:0});
    		Buttons.css({background:'#b0b0b0',border:"none"})
    		Buttons.eq(Next).css({background:'#fff',border:"1px solid #FF6700"});
    		Now=Next;
    	})
    	$('.iconfont5').eq(1).click(function(){
    		if(Next==1){
    		$('.iconfont5').eq(1).attr("disabled",true);
    		}
    		$('.iconfont6').eq(1).removeAttr("disabled");
    		Next--;
    		books.eq(Next).css({left:-296});
    		books.eq(Now).animate({left:296});
    		books.eq(Next).animate({left:0});
    		Buttons.css({background:'#b0b0b0',border:"none"})
    		Buttons.eq(Next).css({background:'#fff',border:"1px solid #FF6700"});
    		Now=Next;
    	})
    	Buttons.each(function(index,obj){
    		$(this).click(function(){
    			if(index<Now){
		            books.eq(index).css({left:-296});
		            books.eq(Now).animate({left:296});
		            books.eq(index).animate({left:0});
		            Buttons.css({background:'#b0b0b0',border:"none"})
	    			Buttons.eq(index).css({background:'#fff',border:"1px solid #FF6700"});
	    			Now=Next=index;
	    		}
    			if(index>Now){
		            books.eq(index).css({left:296});
		            books.eq(Now).animate({left:-296});
		            books.eq(index).animate({left:0});
		            Buttons.css({background:'#b0b0b0',border:"none"})
	    			Buttons.eq(index).css({background:'#fff',border:"1px solid #FF6700"});
	    			Now=Next=index;
	    		}
    		})
    	})
    })
    $(function(){
    	let Now=Next=0;
    	let books=$('.book4');
	    let Buttons=$('div.point').eq(3).children();
    	$('.iconfont6').eq(3).click(function(){
    		if(Next==1){
    		$('.iconfont6').eq(3).attr("disabled",true);
    		}
    		$('.iconfont5').eq(3).removeAttr("disabled");
    		Next++;
    		books.eq(Next).css({left:296});
    		books.eq(Now).animate({left:-296});
    		books.eq(Next).animate({left:0});
    		Buttons.css({background:'#b0b0b0',border:"none"})
    		Buttons.eq(Next).css({background:'#fff',border:"1px solid #FF6700"});
    		Now=Next;
    	})
    	$('.iconfont5').eq(3).click(function(){
    		if(Next==1){
    		$('.iconfont5').eq(3).attr("disabled",true);
    		}
    		$('.iconfont6').eq(3).removeAttr("disabled");
    		Next--;
    		books.eq(Next).css({left:-296});
    		books.eq(Now).animate({left:296});
    		books.eq(Next).animate({left:0});
    		Buttons.css({background:'#b0b0b0',border:"none"})
    		Buttons.eq(Next).css({background:'#fff',border:"1px solid #FF6700"});
    		Now=Next;
    	})
    	Buttons.each(function(index,obj){
    		$(this).click(function(){
    			if(index<Now){
		            books.eq(index).css({left:-296});
		            books.eq(Now).animate({left:296});
		            books.eq(index).animate({left:0});
		            Buttons.css({background:'#b0b0b0',border:"none"})
	    			Buttons.eq(index).css({background:'#fff',border:"1px solid #FF6700"});
	    			Now=Next=index;
	    		}
    			if(index>Now){
		            books.eq(index).css({left:296});
		            books.eq(Now).animate({left:-296});
		            books.eq(index).animate({left:0});
		            Buttons.css({background:'#b0b0b0',border:"none"})
	    			Buttons.eq(index).css({background:'#fff',border:"1px solid #FF6700"});
	    			Now=Next=index;
	    		}
    		})
    	})
    })
}
