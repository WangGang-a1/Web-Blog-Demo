$(document).ready(function(){
    var auto = false;
    var player = document.getElementById("player");
 
    $("#bth").on("click", function(){
        auto = !auto;
        this.innerText = (auto ? '自动连续播放下一个' : '单视频循环播放');
        this.className = (auto ? 'zdlb' : 'xhms');
    });
	

    player.addEventListener('ended', function () {
        console.log("播放结束");
        if (auto == false) {
            player.play();
        } else {
            players();
        }
    }, false);

    var touchtime = new Date().getTime();
    $("#player").on("click", function(){
        if( new Date().getTime() - touchtime < 500 ){
            console.log("dblclick");
            FullScreen();
        }else{
            touchtime = new Date().getTime();
            console.log("click");
            if (player.paused) {
                player.play();
            } else {
                player.pause();
            }
        }
    });
});
function FullScreen() {
    if (player .requestFullscreen) {
        player .requestFullscreen();
        player.play();
    } else if (player .mozRequestFullScreen) {
        player .mozRequestFullScreen();
        player.play();
    } else if (player .webkitRequestFullScreen) {
        player .webkitRequestFullScreen();
        player.play();
    }
}
function players() {
	var video=document.getElementById("player");	
	var array = video.src;
	//alert(array);
	var arr = array.split('@')[1];
	var subarr = arr.split('.');
	//alert(subarr[0]);
	if(subarr[0]<5){
		video.src= "src/@"+(parseInt(subarr[0])+1)+".mp4";
		//alert(parseInt(subarr[0])+1);
	}else{
		video.src= "src/@"+(parseInt(subarr[0])-4)+".mp4";
	}
}