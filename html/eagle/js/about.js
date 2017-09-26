window.onload=function(){
	/*function content(){
	    let books=document.querySelectorAll('.banner-main>li')
	    let Buttons=document.querySelectorAll('.btns>li')
	    let widths=window.innerWidth;
	    let banner=document.querySelector('.banner')
	    let Now=Next=0;
	    let t=setInterval(fn,3000);
	    function fn(){
	    	Next++;
			if(Next==books.length){
	    		Next=0;
	    	}
	    	
	    	books[Next].style.left=`${widths}px`;
	    	animate(books[Now],{left:`-${widths}`});
	    	animate(books[Next],{left:0});
	    	for(let j=0;j<Buttons.length;j++){
		         Buttons[j].style.background='none';
	        }
	        Buttons[Next].style.background='#fff';
	    	Now=Next;
	    }
	    for(let i=0;i<Buttons.length;i++){
	    	Buttons[i].onclick=function(){
	    		clearInterval(t);
	    		if(i<Now){
	    			books[i].style.left=`-${widths}px`;
		            animate(books[Now],{left:`${widths}`});
		            animate(books[i],{left:0});
		            for(let j=0;j<Buttons.length;j++){
	    		        Buttons[j].style.background='none';
	    	        }
		            Buttons[i].style.background='#fff';
		            Now=Next=i;
	    		}
	    		else if(i>Now){
	    			books[i].style.left=`${widths}px`;
		            animate(books[Now],{left:`-${widths}`});
		            animate(books[i],{left:0});
		            for(let j=0;j<Buttons.length;j++){
	    		         Buttons[j].style.background='none';
	    	        }
		            Buttons[i].style.background='#fff';
		            Now=Next=i;
	    		}
	    	}
	    }
	    banner.onmouseenter=function(){
	    	clearInterval(t);
	    }
	     banner.onmouseleave=function(){
	    	t=setInterval(fn,3000);
	    }
  
    }
	
	content();*/
	let widths=window.innerWidth;
	let t=setInterval(fn,3000);
	let now=next=0;
	let imgbox=$('.banner-main>li')
	function fn(){
		next++;
		if(next==imgbox.length){
			next=0;
		}
		imgbox.eq(next).css({left:`${widths}px`});
		imgbox.eq(now).animate({left:`-${widths}`});
		imgbox.eq(next).animate({left:0});
		$(".btns>li").css({background:"none"})
		$(".btns>li").eq(next).css({background:"#fff"})
		now=next;
	}
	$(".banner").mouseenter(function(){
		clearInterval(t);
	})
	$(".banner").mouseleave(function(){
		t=setInterval(fn,3000);
	})
	$(".btns>li").each(function(index,obj){
		$(this).click(function(){
			clearInterval(t);
			if(index>now){
				imgbox.eq(index).css({left:`${widths}px`});
				imgbox.eq(now).animate({left:`-${widths}`});
				imgbox.eq(index).animate({left:0});
				$(".btns>li").css({background:"none"})
				$(".btns>li").eq(index).css({background:"#fff"})
				now=next=index;
			}else if(index<now){
				imgbox.eq(index).css({left:`-${widths}px`});
				imgbox.eq(now).animate({left:`${widths}`});
				imgbox.eq(index).animate({left:0});
				$(".btns>li").css({background:"none"})
				$(".btns>li").eq(index).css({background:"#fff"})
				now=next=index;
			}
		})
	})
	$('.back').click(function(){
		 $('body,html').animate({scrollTop:0},1000);
	})
}
