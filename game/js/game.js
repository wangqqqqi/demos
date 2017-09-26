/*
 
 * 属性
 * 
 * 
 * 方法
 *  开始
 *  消除
 *  产生字符
 *   个数
 *   那些
 * 下一关
 * 重新开始*/
window.onload=function(){
	function Game(){
		this.charSheet=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
		this.length=5;
		this.speed=5;
		this.elements=[];
		this.positions=[];
		this.score=0;
		this.gq=10;
	}
	Game.prototype={
		start:function(){
			this.getChars(this.length);
			this.drop();
			this.key();
		},
		getChars:function(length){
			for(let i=0;i<length;i++){
				this.getChar();
			}
		},
		checkRepeat:function(num){
			return this.elements.some(value=> value.innerText==this.charSheet[num]);
		},
//		checkPosition:function(lefts){
//			return this.positions.some(function(value){
//				return Math.abs(value-lefts)<50;
//			})
//		},
		getChar:function(){
			let num=Math.floor(Math.random()*this.charSheet.length);
			let divs=document.createElement('div');
			let lefts=(window.innerWidth-200)*Math.random()+100;
			let tops=Math.random()*200;
			
			do{
				num=Math.floor(Math.random()*this.charSheet.length);
			}while(this.checkRepeat(num));
			
//			do{
//				lefts=(window.innerWidth-200)*Math.random()+100;
//			}while(this.checkPosition(lefts));
			
			
			divs.classList.add('divs');
			divs.innerText=this.charSheet[num];
			document.body.appendChild(divs);
			
			divs.style.left=`${lefts}px`;
			divs.style.top=`${tops}px`;
			this.elements.push(divs);
		},
		drop:function(){
			let that=this;
			this.t=setInterval(function(){
				for(let i=0;i<that.elements.length;i++){
					let tops=that.elements[i].offsetTop;
					that.elements[i].style.top=`${tops+that.speed}px`
					let lefts=that.elements[i].offsetLeft;
					that.positions.push(lefts);
					if(tops>500){
						document.body.removeChild(that.elements[i]);
						that.elements.splice(i,1);
						that.positions.splice(i,1);
					}
				}
				if(that.elements.length<that.length){
					that.getChar();
				}
			},100)
		},
		key:function(){
			let that=this;
			let score=document.querySelector('div.score:first-child span');
			document.onkeydown=function(e){
				let char=String.fromCharCode(e.keyCode)
				for(let i=0;i<that.elements.length;i++){
					if(char==that.elements[i].innerText){
						that.score++;
						score.innerText=that.score;
						document.body.removeChild(that.elements[i])
						that.elements.splice(i,1);
						that.positions.splice(i,1);
						that.getChar();
						if(that.score==that.gq){
							that.next();
						}
					}
				}
			}
		},
		next:function(){
			clearInterval(this.t);
			for(let i=0;i<this.elements.length;i++){
				document.body.removeChild(this.elements[i]);
			}
			this.elements=[];
			let flag=confirm('已过关，是否继续该游戏');
			if(flag=false){
				return false;
			}else{
				this.length++;
				this.gq+=10;
				this.start();
			}
			
		}
	}
	
	let game=new Game();
	game.start();
	
}
