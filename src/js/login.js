$(function(){				
		// 登录按钮				
		var oCheck = document.getElementById("check");
		//获取注册页面注册的用户名、邮箱和密码
		var username1 = getCookie("username1");
		var username=getCookie("username");
		var passw = getCookie("password");
		
		console.log(username1);
		console.log(username);
		console.log(passw);				
		
		//获取当前页面的用户名
		var name = getCookie("name");
		if (name)
		{
			$("#username").val(name);			
		}	
		
		$("#btn").click(function() {
			//当点击记住用户名按钮框时保存cookie
			if (oCheck.checked)
				{
					var strUsername = $("#username").val();
					addCookie("name", strUsername);
				}					
			
			var name1=$("#username").val();
			var name2=$("#password").val();
			//判断输入值是否与cookie保存的注册账户一直
			if ((name1 == username1 || name1 == username) && name2 == passw)
			{
				alert("登录成功！");
			}else{
				alert("用户不存在或密码不正确");
			}
		}); 
})