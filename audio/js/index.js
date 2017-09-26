window.onload=function(){
	let song=document.querySelector('.songs');
	let singer=document.querySelector('.singer');
	let list=document.querySelector('.bottom');
	let audio=document.querySelector('audio');
	let play=document.querySelector('.pause1');
	let pause=document.querySelector('.pause2');
	let progress=document.querySelector('.progress-main');
	let alltime=document.querySelector('.times2');
	let protime=document.querySelector('.times1');
	let imgs=document.querySelector('.head-main>img');
	let before=document.querySelector('.before');
	let after=document.querySelector('.after');
	let volbtn=document.querySelector('.volbtn');
	let volmain=document.querySelector('.tiao-main');
	
	let num=0;
	audio.volume=`${volmain.offsetWidth/100}`;
	after.onclick=function(){
		num++;
		render(database[num]);
	}
	before.onclick=function(){
		num--;
		render(database[num]);
	}
	audio.onended=function(){
		num++;
		render(database[num]);
	}
	play.onclick=function(){
		if(audio.pasued){
			audio.pause();
		}else{
			audio.play();
			pause.style.display='block';
			play.style.display='none';
		}
	}
	pause.onclick=function(){
		if(audio.played){
			audio.pause();
			pause.style.display='none';
			play.style.display='block';
		}else{
			audio.pause();
		}
	}
	audio.ontimeupdate=function(){
	   let bili=audio.currentTime/audio.duration*100;
	   progress.style.width=`${bili}%`;
	   let ct=time(audio.currentTime);
	   protime.innerText=ct;
	   database[num].lyrics.forEach((element,index)=>{
	   	  if(element.time==ct){
	   	  	let a=index;
	   	  	list.innerHTML='';
	   	  	if(index<4){
	   	  		index=0;
	   	  	}else{
	   	  		index-=4;
	   	  	}
	   	  	for(let j=index;j<database[num].lyrics.length;j++){
	   	  		list.innerHTML+=`<li class="list${j}">${database[num].lyrics[j].lyric}</li>`
	   	  	}
	   	  	let obj=document.querySelector(`.list${a}`);
	   	  	obj.style.color='#4B4B4B';
	   	  	obj.style.fontSize='23px'
	   	  }
	   })
	}
	function time(data){
		let m=Math.floor(data/60)>=10?Math.floor(data/60):`0${Math.floor(data/60)}`;
		let n=Math.floor(data%60)>=10?Math.floor(data%60):`0${Math.floor(data%60)}`;
		return `${m}:${n}`
	}
	
	render(database[num]);
	function render(data){
		song.innerText=data.songs;
		singer.innerText=data.name;
		alltime.innerText=data.alltime;
		imgs.src=data.photo;
		audio.src=data.src;
		list.innerHTML='';
		for(let i=0;i<data.lyrics.length;i++){
			list.innerHTML+=`<li>${data.lyrics[i].lyric}</li>`
		}
	}
	volbtn.onmousedown=function(e){
		let ox=e.clientX;
		let left=volbtn.offsetLeft;
		document.onmousemove=function(e){
			let cx=e.clientX;
			let lefts=cx-ox+left;
			if(lefts<=-4){
				lefts=-4;
			}
			if(lefts>=100-8+4){
				lefts=100-8+4
			}
			volbtn.style.left=`${lefts}px`;
			volmain.style.width=`${lefts+4}px`
			audio.volume=`${volmain.offsetWidth/100}`;
		}
		volbtn.onmouseup=function(){
			document.onmousemove=null;
			volbtn.onmouseup=null;
		}
	}
}
