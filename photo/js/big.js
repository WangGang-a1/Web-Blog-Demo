$(function(){
    $('.drawing').click(function(){
        //查看大图
        $(this).after("<div class='wrapper'></div>");
                $('.wrapper').fadeOut(0);
                //修改大小
                $(".wrapper").width(324).height(576);
                //获取图片
        var imgSrc = $(this).attr('src');
                //图片设置背景
                $(".wrapper").css("background-image", "url(" + imgSrc + ")").fadeIn(2000);
        //关闭并移除图层
        $('.wrapper').click(function(){
            $('.wrapper').fadeOut(2000);
        });  
    });
    });