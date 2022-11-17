window.onload=function(){
    var User=document.getElementById('usernameup');
    var Pwd=document.getElementById('passwordup');
    var zcBtn=document.getElementById('zhuce');

    var oUser=document.getElementById('username');
    var oPwd=document.getElementById('password');
    var dlBtn=document.getElementById('denglu');
    
    zcBtn.onclick=function(){
        var upData=null;
        var repeat=null;
        if (User.value&&Pwd.value) {
            if (window.localStorage.getItem('list')) {
                upData={'username':User.value,'password':Pwd.value};
                var dataJson=window.localStorage.getItem('list');
                dataJson=eval('('+dataJson+')');
                for (var i=0;i<dataJson.length;i++) {
                    if (dataJson[i].username==upData.username) {
                        alert('用户名重复');
                        repeat=1;
                    }
                }
                var text= document.getElementById("passwordup").value;
                var i=8;
                if (i>text.length){
                    alert('密码不能小于八位');
                    repeat=1;
                }
                var re =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{0,32}$/;
                var result=  re.test(text);
                if(result)
                {
                }else
                {
                    alert("密码至少包含大写字母，小写字母");
                    repeat=1;
                }

                if (repeat==null) {
                    alert('注册成功');
                    dataJson.push(upData);
                    dataJson=JSON.stringify(dataJson);
                    window.localStorage.setItem('list',dataJson);
                    console.log(window.localStorage.getItem('list'));
                }
            } else {
                upData={'usernameup':User.value,'passwordup':Pwd.value};
                console.log(upData);
                var data=[];
                data.push(upData);
                data=JSON.stringify(data);
                window.localStorage.setItem('list',data);
                alert('注册成功');
                console.log(window.localStorage.getItem('list'));
            }
        }
    }

    dlBtn.onclick=function(){
        var login={'username':oUser.value,'password':oPwd.value};
        var dataJson=window.localStorage.getItem('list');
        var success=null;
        var d =new Date();
        var next=null;
        dataJson=eval('(' + dataJson + ')');
        for (var i=0;i<dataJson.length;i++) {
            if (dataJson[i].username==login.username&&dataJson[i].password==login.password) {
                success=1;
                next = '<a id=1>'+'登录名: '+oUser.value+'</a>'+'<br>'+'<a id=2>'+'IP: '+returnCitySN["cip"]+'</a>'+'<br>'+'<a id=3>'+'IP所在地: '+
                                returnCitySN["cname"]+'(仅供参考)'+'</a>'+'<br>'+'<a id=4>'+'登录时间详细: '+d+'</a>';
                document.write('<h1>恭喜登录成功</h1>'+next+
                                '<br>'+'将在三秒内自动保存日志并跳转到管理页面'+
                                "<script>"+
                                    ''+
                                        "var a1=document.getElementById('1').innerText;"+
                                        "var a2=document.getElementById('2').innerText;"+
                                        "var a3=document.getElementById('3').innerText;"+
                                        "var a4=document.getElementById('4').innerText;"+
                                        "var next = a1+';     '+a2+';     '+a3+';     '+a4;"+
                                        "var blob = new Blob([next],{ type: 'text/plain;charset=utf-8'});"+
                                        'saveAs(blob, "log.txt");'+
                                '</script>');
                function jump(){
                    window.location.href='../admin/index.html';
                }
                setTimeout(jump,3000);
            }
        }
        if (success==null) {
            alert('用户名或密码错误');
        }
    }
}