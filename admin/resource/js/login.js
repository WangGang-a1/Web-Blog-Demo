function login() {
	var loginer_Username = $("#loginer_Username").val();
	var loginer_Password = $("#loginer_Password").val();
	if (loginer_Username == "用户名" || loginer_Username == "") {
		alert("请输入用户名！");
	} else if (loginer_Password == "密码" || loginer_Password == "") {
		alert("请输入密码！");
	} else {
		$("#loginForm").submit();
	}
}

function changeInputWord(i) {
	if (i == 1) {
		$("#usernameTd")
				.html(
						"<input id='loginer_Username' name='loginer_Username' type='text' class='login_two_right_userinfo_textfield' onblur='blurInput(1)' />");
		window.setTimeout(function() {
			$("#loginer_Username").focus();
		}, 30);
	} else {
		$("#passwordTd")
				.html(
						"<input id='loginer_Password' name='loginer_Password' type='password' class='login_two_right_userinfo_textfield' onblur='blurInput(2)' />");
		window.setTimeout(function() {
			$("#loginer_Password").focus();
		}, 30);
	}
}

function blurInput(i) {
	if (i == 1) {
		if ($("#loginer_Username").val() == "") {
			$("#usernameTd")
					.html(
							"<input id='loginer_Username' name='loginer_Username' class='login_two_right_userinfo_textfield' type='text' value='用户名' onfocus='changeInputWord(1)' />");
		}

	} else {
		if ($("#loginer_Password").val() == "") {
			$("#passwordTd")
					.html(
							"<input id='loginer_Password' name='loginer_Password' class='login_two_right_userinfo_textfield' type='text' value='密码' onfocus='changeInputWord(2)' />");
		}
	}

}