window.onload=function(){
	let ul=document.querySelector('.banner-main');
	let banners=ul.querySelectorAll('li');
	let widths=banners[0].offsetWidth;
	let num=0;
	let flag=true;
	let Lbutton=document.querySelector('.lbut')
    let Rbutton=document.querySelector('.rbut')
    let btn=document.querySelectorAll('btn');
	
	let t=setInterval(fn,3000);
	function fn(){
		if(flag){
			if(num==2){
				flag=false;
				return;
			}num++;
		}else{
			if(num==0){
				flag=true;
				return;
			}num--;
		}
		animate(ul,{left:-widths*num});
	}
	
	Rbutton.onclick=function(){
	 	clearInterval(t);
    	if(num==2){
    		this.classList.add('disabled');
    		return;
    	}
    	num++;
    	Lbutton.classList.remove('disabled');
    	animate(ul,{left:-widths*num});
    	
    }
    Lbutton.onclick=function(){
    	clearInterval(t);
    	if(num==0){
    		return;
    	}
    	num--;
    	animate(ul,{left:-widths*num});
//  	ul.style.left=`${-width*num}px`;
    	return false;
    }
    for(let i=0;i<btn.length;i++){
    	btn[i].onclick=function(){
    		clearInterval(t);
    		animate(ul,{left:-widths*i});
    	}
    }
}
