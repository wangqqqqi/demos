window.onload=function(){
	let canvas=document.querySelector('canvas');
	let mask=document.querySelector('.mask');
	let palette=new Palette(canvas,mask);
	
	let duobian=document.querySelector('.icon-rectangle');
	let star=document.querySelector('.icon-icon');
	
	let left1=document.querySelectorAll('.left1>label');
	let styleBT=document.querySelectorAll('.style');
	let colors=document.querySelectorAll('.color');
	
	
	let eraser=document.querySelector('.icon-xiangpica_s');
	let texts=document.querySelector('.icon-wenzi');
	let save=document.querySelector('.icon-baocun');
	
	left1.forEach(element=>{
		element.onclick=function(){
			let active=document.querySelector('label[active=true]');
			active.setAttribute('active',false);
			this.setAttribute('active',true);
			if(this.id=='Pencil'){
				palette.Pencil();
			}
			else if(this.id=='Duobian'){
				let bian=prompt('请输入你的角数',5);
				palette.Duobian(bian);
				palette.lishi();
			}
			else if(this.id=='Star'){
				let jiao=prompt('请输入你的角数',5);
				palette.Star(jiao);
				palette.lishi();
			}else{
				palette.draw(this.id);
				palette.lishi();
			}
		}
	})
	styleBT.forEach(element=>{
		element.onclick=function(){
			for(let i=0;i<styleBT.length;i++){
				styleBT[i].setAttribute('active',false)
			}
			this.setAttribute('active',true);
			palette.style=this.id;
		}
	})
	colors.forEach((element,index)=>{
		element.onchange=function(){
			if(index==0){
				palette.strokeStyle=this.value;
			}else if(index==1){
				palette.fillStyle=this.value;
			}
		}
	})
	let eraserObj=document.querySelector('.eraser');
	eraser.onclick=function(){
		palette.eraser(eraserObj,20,20);
//		palette.lishi();
	}
	texts.onclick=function(){
		palette.font();
		palette.lishi();
	}
	save.onclick=function(){
		save.href=canvas.toDataURL('image/png');
		save.download='a.png';
	}
	let fan=document.querySelector('.icon-fanse');
	fan.onclick=function(){
		palette.Fan();
	}
	let caiqie=document.querySelector('.icon-caiqie');
	let clipObj=document.querySelector('.clip');
	caiqie.onclick=function(){
		palette.Clip(clipObj);
		palette.lishi();
	}
}
