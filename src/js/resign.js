$(function(){
	// 表单验证插件
	$("#form1").validate({
		// 设置验证规则
		rules:{
			email:{required:true,email:true},
			username:{required:true,rangelength:[4,16]},
			password:{required:true,minlength:8},
			password2:{required:true,equalTo:"#password"},
			checkbox:{required:true}						
		},

		// 设置提示信息
		messages:{
			email:{email:'邮箱格式不正确'},
			username:{rangelength:'用户名为4-6个字符'},
			parssword:{rangelength:'为了账户安全，建议最少为6个字符以上'},
			password2:{equalTo: "密码不一致"},
			checkbox:{required:""},
			error:$('.msgRed1 error')
		}
	});

	var oCheck = document.getElementById("check");
	// 调用自己的函数，来获取当前页面中的 cookie
	var username = getCookie("username");
	var username1 = getCookie("username1");
	var password = getCookie("password");
	var password2 = getCookie("password2");

	if (username && username1 && password && password2)
	{
		$("#username").val(username);
		$("#username1").val(username1);
		$("#password").val(password);
		$("#password2").val(password2);
	}

	$("#btn").click(function() {
		if (oCheck.checked)
		{
			// 取出用户名和密码
			var strUsername = $("#username").val();
			var strUsername1 = $("#username1").val();
			var strPassword = $("#password").val();
			var strPassword2 = $("#password2").val();
			
			// 调用自己写的函数，实现添加 cookie
			addCookie("username", strUsername, 7);
			addCookie("username1", strUsername1, 7);
			addCookie("password", strPassword, 7);
			addCookie("password2", strPassword2, 7);
		}
	});
		alert("注册成功");	
});