function showFront(div){
 	if(div.data("die") == 1){
		return;
	}
	div.addClass("show");
}
function hideFront(div,time){
 	if(time == 0){
		div.removeClass("show");
	}else{
		div.data("hiding",1);
		setTimeout(function(){
			div.removeClass("show");
			div.data("hiding",0);
		},time);
	}
	
 }
 function hideDiv(div,time){
 	div.data("die",1);
	setTimeout(function(){
		div.css("opacity",0);
	},time);
 }
 function randomImg (imgs, dir) {
	var arr = ["/ic_img1.png",
			"/ic_img2.png",
			"/ic_img3.png",
			"/ic_img4.png",
			"/ic_img5.png",
			"/ic_img6.png",
			"/ic_img7.png",
			"/ic_img8.png",
			"/ic_img1.png",
			"/ic_img2.png",
			"/ic_img3.png",
			"/ic_img4.png",
			"/ic_img5.png",
			"/ic_img6.png",
			"/ic_img7.png",
			"/ic_img8.png",
			]; // 长度16
	imgs.each(function (index, tag) {
	
		if (arr.length == 1) {
			var src = dir + arr[0];
		}else{
			var randomInd = Math.floor(Math.random() * arr.length);
			var src = dir + arr[randomInd];
			arr.splice(randomInd,1);
		}
		$(tag).attr("src",src);
	})
}
function relive(divs){
	divs.each(function(i,key){
		$(key).data("die",0);
	})
}
function checkAble(div){
	if(div.data("die") == 1 || div.data("hiding") == 1){
		return false;
	}else{
		return true;
	}
	
}
function _alert(msg){
	uexWindow.alert("HTML5记忆游戏",msg,"点我啊~");
}
function _confirm(msg){
	uexWindow.confirm("HTML5记忆游戏",msg,["确定","取消"]);
}
uexWindow.cbConfirm = function(id,dType,ind){
	if (ind == 0){
		start();
	}else{
		
	}
};