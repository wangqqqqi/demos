/*
 
 * 属性
 * 	线宽  端点  颜色  边数  角   尺寸  historys width height  canvas...
 * 方法
 *	画线  画虚线  铅笔  多边形  圆  矩形  多角形
 * 	橡皮  裁切  文字
 * 	新建  保存
 * */  
 	function Palette(canvas,mask){
 		this.canvas=canvas;
 		this.mask=mask;
	 	this.ctx=this.canvas.getContext('2d');
	 	
	 	//historys  canvas  尺寸
	 	this.historys=[];
	 	this.cw=this.canvas.width;
	 	this.ch=this.canvas.height;
	 	
	 	//样式
	 	this.lineWidth=1;
	 	this.lineCap='butt';
	 	this.fillStyle='#000';
	 	this.strokeStyle='#000';
	 	
	 	//描边 填充
	 	this.style='stroke'
	 	
	 	//裁切
	 	this.temp=null;
 	}
 	Palette.prototype = {
 		lishi:function(){
 			let that=this;
 			document.onkeydown=function(e){
				if(e.ctrlKey&&e.keyCode==90){
					let img=that.historys.pop();
					that.ctx.putImageData(img,0,0);
				}
				if(that.historys.length==0){
					that.ctx.clearRect(0,0,that.cw,that.ch);
				}	
 		    }
 		},
 		init:function(){
 			this.ctx.lineWidth=this.lineWidth;
 			this.ctx.lineCap=this.lineCap;
 			this.ctx.fillStyle=this.fillStyle;
 			this.ctx.strokeStyle=this.strokeStyle;
 			this.ctx.setLineDash([0,0]);
 		},
 		line:function(ox,oy,cx,cy){
			let that=this;
			that.ctx.beginPath();
			that.ctx.moveTo(ox,oy);
			//虚线
			that.ctx.setLineDash([0,0])
			that.ctx.lineTo(cx,cy);
			that.ctx.closePath();
			that.ctx.stroke();
			that.ctx.strokeStyle=that.strokeStyle;
 		},
 		Spanline:function(ox,oy,cx,cy){
 			let that=this;
 			that.ctx.beginPath();
			that.ctx.moveTo(ox,oy);
			//虚线
			that.ctx.setLineDash([10,10]);
			that.ctx.lineTo(cx,cy);
			that.ctx.closePath();
			that.ctx.stroke();
			that.ctx.strokeStyle=that.strokestyle;
 		},
 		Pencil:function(){
 			let that=this;
 			this.mask.onmousedown=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				if(that.historys.length>0){
					that.ctx.putImageData(that.historys[that.historys.length-1],0,0)
				}
				that.ctx.beginPath();
				that.ctx.setLineDash([0,0]);
				that.ctx.moveTo(ox,oy);
				that.mask.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY;
					that.ctx.lineTo(cx,cy);
					that.ctx.stroke();
					that.ctx.strokeStyle=that.strokeStyle;
				}
				that.mask.onmouseup=function(){
					that.historys.push(that.ctx.getImageData(0,0,that.cw,that.ch));
					that.mask.onmousemove=null;
					that.mask.onmouseup=null;
				}
			}
 		},
 		Duobian:function(bian){
 			let that=this;
 			this.mask.onmousedown=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				that.mask.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY;
					let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
					fn(ox,oy,bian,r);
				}
				that.mask.onmouseup=function(){
					that.historys.push(that.ctx.getImageData(0,0,that.cw,that.ch));
					that.mask.onmousemove=null;
					that.mask.onmouseup=null;
				}
			}
			
			function fn(x,y,bian,r){
				let ang=360/bian/180*Math.PI;
				that.ctx.clearRect(0,0,that.cw,that.ch);
				if(that.historys.length>0){
						that.ctx.putImageData(that.historys[that.historys.length-1],0,0)
				}
				that.ctx.beginPath();
				that.ctx.setLineDash([0,0]);
				that.ctx.moveTo(x+r,y);
				for(let i=1;i<bian;i++){
					that.ctx.lineTo(x+r*Math.cos(ang*i),y+r*Math.sin(ang*i));
				}
				that.ctx.closePath();
				that.ctx[that.style]();
				that.ctx.strokeStyle=that.strokeStyle;
			    that.ctx.fillStyle=that.fillStyle;
			}
 		},
 		Circle:function(ox,oy,cx,cy){
 			let that=this;
			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
			that.ctx.beginPath();
			that.ctx.setLineDash([0,0])
			that.ctx.arc(ox,oy,r,0,2*Math.PI,true);
			that.ctx.closePath();
		    that.ctx[that.style]();
		    that.ctx.strokeStyle=that.strokeStyle;
			that.ctx.fillStyle=that.fillStyle;
 		},
 		Juxing:function(ox,oy,cx,cy){
 			let that=this;
			let w=cx-ox,h=cy-oy;		
			that.ctx.beginPath();
			that.ctx.setLineDash([0,0])
			that.ctx.moveTo(ox,oy);
			that.ctx.lineTo(ox,cy);
			that.ctx.lineTo(cx,cy);
			that.ctx.lineTo(cx,oy);
			that.ctx.closePath();
			that.ctx[that.style]();
			that.ctx.strokeStyle=that.strokeStyle;
			that.ctx.fillStyle=that.fillStyle;
 		},
 		Star:function(jiao){
 			let that=this;
 			this.mask.onmousedown=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				that.mask.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY;
					let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
					let ang=360/(jiao*2)/180*Math.PI;
					that.ctx.clearRect(0,0,that.cw,that.ch);
					if(that.historys.length>0){
							that.ctx.putImageData(that.historys[that.historys.length-1],0,0)
					}
					let r1=r/2;
					that.ctx.beginPath();
					that.ctx.setLineDash([0,0]);
					that.ctx.moveTo(ox+r,oy);
					for(let i=1;i<jiao*2;i++){
						if(i%2){
							that.ctx.lineTo(ox+r1*Math.cos(ang*i),oy+r1*Math.sin(ang*i));
						}else{
							that.ctx.lineTo(ox+r*Math.cos(ang*i),oy+r*Math.sin(ang*i));
						}
					}
					that.ctx.closePath();
					that.ctx[that.style]();
					that.ctx.strokeStyle=that.strokeStyle;
					that.ctx.fillStyle=that.fillStyle;
				}
				that.mask.onmouseup=function(){
					that.historys.push(that.ctx.getImageData(0,0,that.cw,that.ch));
					that.mask.onmousemove=null;
					that.mask.onmouseup=null;
				}
			}
 		},
 		draw:function(type){
 			let that=this;
			this.mask.onmousedown=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				that.mask.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY;
					that.ctx.clearRect(0,0,that.cw,that.ch);
					if(that.historys.length>0){
						that.ctx.putImageData(that.historys[that.historys.length-1],0,0)
					}
					that[type](ox,oy,cx,cy);
				}
				that.mask.onmouseup=function(){
					that.historys.push(that.ctx.getImageData(0,0,that.cw,that.ch));
					that.mask.onmousemove=null;
					that.mask.onmouseup=null;
				}
			}
 		},
 		eraser:function(obj,w,h){
 			let that=this;
 			that.mask.onmousedown=function(){
   				obj.style.display='block';
 				that.mask.onmousemove=function(e){
 					let ox=e.offsetX,oy=e.offsetY;
 					let lefts=ox-w/2,tops=oy-h/2;
 					if(lefts<=0){
 						lefts=0;
 					}
 					if(lefts>=that.cw-w){
 						lefts=that.cw-w;
 					}
 					if(tops<=0){
 						tops=0;
 					}
 					if(tops>=that.ch-h){
 						tops=that.ch-h;
 					}
 					obj.style.left=`${lefts}px`;
 					obj.style.top=`${tops}px`;
 					that.ctx.clearRect(lefts,tops,w,h)
 				}
 				that.mask.onmouseup=function(){
 					that.historys.push(that.ctx.getImageData(0,0,that.cw,that.ch));
 					obj.style.display='none';
 					that.mask.onmousemove=null;
 					that.mask.onmouseup=null;
 				}
 			}
 		},
 		font:function(){
 			this.mask.onmousedown=function(e){
 				let that=this;
 				let ox=e.offsetX,oy=e.offsetY;
 				let divs=document.createElement('div');
 				divs.style.cssText=`
 				width:100px;height:30px;border:1px dashed #ccc;outline:none;
 				background:#fff;position:absolute;
 				left:${ox}px;top:${oy}px
 				`;
 				divs.contentEditable=true;
 				this.mask.appendChild(divs);
 				this.mask.onmousedown=null;
 				
 				/*let lefts,tops
 				divs.onmousedown=function(e){
 					let ox=e.offsetX,oy=e.offsetY;
 					let leftsw=e.clientX-ox-this.offsetLeft;
 					let topsw=e.clientY-oy-this.offsetTop;
 					that.mask.onmousemove=function(e){
 						let cx=e.clientX,cy=e.clientY;
 						lefts=cx-ox-leftsw;
 						tops=cy-oy-topsw;
 						divs.style.left=`${lefts}px`
 						divs.style.top=`${tops}px`
 					}
 				}
 				divs.onmouseup=function(){
 					that.mask.onmousemove=null;
 					divs.onmouseup=null;
 				}*/
 				let lefts,tops
 				divs.onmousedown=function(e){
 					let ox=e.clientX,oy=e.clientY;
 					let ol=divs.offsetLeft,ot=divs.offsetTop;
 					that.mask.onmousemove=function(e){
 						let cx=e.clientX,cy=e.clientY;
 						lefts=cx-ox+ol;
 						tops=cy-oy+ot;
 						divs.style.left=`${lefts}px`
 						divs.style.top=`${tops}px`
 					}
	 				divs.onmouseup=function(){
	 					that.mask.onmousemove=null;
	 					divs.onmouseup=null;
	 				}
 				}
 				divs.onblur=function(){
 					let value=this.innerText;
 					that.mask.removeChild(this);
 					that.ctx.textAlign='center';
 					that.ctx.textBaseline='middle';
 					that.ctx.fillText(value,lefts,tops);
 				}
 			}.bind(this);
 		},
 		Fan:function(){
 			let imgData=this.ctx.getImageData(0,0,this.cw,this.ch);
 			let data=imgData.data;
 			for(let i=0;i<data.length;i+=4){
 				data[i]=255-data[i];
 				data[i+1]=255-data[i+1];
 				data[i+2]=255-data[i+2];
 			}
 			this.ctx.putImageData(imgData,0,0);
	    },
	    Clip:function(clipObj){
		   	let that=this;
		   	let w,h,minX,minY;
		   	this.mask.onmousedown=function(e){
		   		let ox=e.offsetX,oy=e.offsetY;
		   		that.mask.onmousemove=function(e){
		   			let cx=e.offsetX,cy=e.offsetY;
		   			minX=cx>ox?ox:cx;
		   			minY=cy>oy?oy:cy;
		   			w=Math.abs(cx-ox);
		   			h=Math.abs(cy-oy);
		   			clipObj.style.cssText=`
		   			display:block;
		   			width:${w}px;height:${h}px;
		   			left:${minX}px;top:${minY}px;
		   			border:1px dashed #000;
		   			`
		   		}
		   		that.mask.onmouseup=function(){
		   			that.temp=that.ctx.getImageData(minX,minY,w,h);
		   			that.ctx.clearRect(minX,minY,w,h);
		   			that.historys.push(that.ctx.getImageData(0,0,that.cw,that.ch));
		   			that.ctx.putImageData(that.temp,minX,minY);
		   			that.mask.onmousemove=null;
		   			that.mask.onmouseup=null;
		   			that.drag(minX,minY,w,h,clipObj)
		   		}
		   	}
	    },
	    drag:function(minX,minY,w,h,clipObj){
	    	let that=this;
	    	this.mask.onmousemove=function(e){
	    		let ox=e.offsetX,oy=e.offsetY;
	    		if(ox>minX&&ox<minX+w&&oy>minY&&oy<minY+h){
	    			that.mask.style.cursor='move';
	    		}else{
	    			that.mask.style.cursor='default';
	    		}
	    	}
	    	this.mask.onmousedown=function(e){
	    		let ox=e.offsetX,oy=e.offsetY;
	    		that.mask.onmousemove=function(e){
		   			let cx=e.offsetX,cy=e.offsetY;
		   			let lefts=cx-ox+minX,tops=cy-oy+minY;
		   			if(lefts<=0){
 						lefts=0;
 					}
 					if(lefts>=that.cw-w){
 						lefts=that.cw-w;
 					}
 					if(tops<=0){
 						tops=0;
 					}
 					if(tops>=that.ch-h){
 						tops=that.ch-h;
 					}
		   			clipObj.style.left=`${lefts}px`;
		   			clipObj.style.top=`${tops}px`;
		   			that.ctx.clearRect(0,0,that.cw,that.ch);
		   			if(that.historys.length>0){
		   				that.ctx.putImageData(that.historys[that.historys.length-1],0,0)
		   			}
		   			that.ctx.putImageData(that.temp,lefts,tops);
		   		}
	    		that.mask.onmouseup=function(){
	    			clipObj.style.display='none';
	    			that.historys.push(that.ctx.getImageData(0,0,that.cw,that.ch));
	    			that.temp=null;
	    			that.mask.onmousemove=null;
	    			that.mask.onmouseup=null;
	    		}
	    	}
	    }
	   
 	}
