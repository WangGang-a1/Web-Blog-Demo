var clickCount = 0;
		var lastObj = null;
		var successCount = 0;
		var inited = false;
		var failCount = 0;

		function start() {
		
		clickCount = 0;
		lastObj = null;
		successCount = 0;
		failCount = 0;
		
		$(".success").html(successCount)
		$(".fail").html(failCount)
		relive($(".two"));
		$(".two").css("opacity",1).removeClass("show");
		
		randomImg($(".three"),"img");
		}
		
		start();
		
		$(".two").click(function(){
		
			if (!checkAble($(this))) {
			return;
			}
			
			if (clickCount == 0) {
			    showFront($(this));
				lastObj=$(this);
				clickCount=1;
			}else if (clickCount == 1) {
				showFront($(this));
				if (lastObj.find(".three").attr("src") == $(this).find(".three").attr("src") && lastObj[0] != $(this)[0]) {

					hideDiv(lastObj,500);
					hideDiv($(this),500);
					successCount++;
					zongCount = failCount + successCount;
				    lvCount = successCount / zongCount;
					lvvCount = Math.round(lvCount * 10000) / 100;
					lvvCount += '%';
					if (successCount >= 8) {
						if(lvCount >= 0.3){
							$(".success").html(successCount)
							alert("游戏成功！");
							if(confirm("已经通过一关，是否进入下一关"))
							{
								window.location.href='./level2.html';	
							}
						}else{
							alert("通关失败！");
							if(confirm("是否重新开始"))
							{
								window.location.href='./level1.html';	
							}
						}
					}
				}else {
					failCount++;
					hideFront(lastObj,500);
					hideFront($(this),500);
				}
				zongCount = failCount + successCount;
				lvCount = successCount / zongCount;
				lvvCount = Math.round(lvCount * 10000) / 100;
				lvvCount += '%';
				clickCount = 0;
				$(".success").html(successCount)
				$(".fail").html(failCount)
				$(".lv").html(lvCount)
				$(".lvv").html(lvvCount)
				$(".zong").html(zongCount)
			}
		});