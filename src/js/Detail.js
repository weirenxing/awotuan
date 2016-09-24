
	//倒计时（调用函数）
	var SysSecond;
    var InterValObj;
    $(document).ready(function() {
	SysSecond = 180000;
	InterValObj = window.setInterval(SetRemainTime, 1000);
	
	//鼠标滑过select热门城市时出现弹窗
		$('#over').on('mouseover',function(){
			$('.city').show();
		})
		//点击关闭按钮隐藏弹窗
		$('.city').on('click','.btnClose',function(){
			$('.city').hide();
		})
		
		//加入购物车
		var str = getCookie("arr");			
		// 用于存储所有的商品
		var arr = [];
		console.log(arr);
		//加入购物车按钮
		$('#btnBuy').click (function(){												
			$("#approver").show(function(){						
				$("body").css({"background":"#555","opacity":"0.8"});
				$("#approver").css("opacity","1");
			});
			
		})
		//弹窗确认添加
		$("#approver .add").on("click",function(){
				var obj = {};
				obj.detImg=$('#zoom_01').attr('src');
				obj.tex=$('.tex11').html();
				obj.price = $('.b1').html();					
				// 将创建好的商品添加到数组中
				arr.push(obj);
				addCookie("arr", JSON.stringify(arr));		
				$(".none").show();
			});
			//关闭弹窗
			$("#approver .xx").on("click",function(){
				$("#approver").hide(function(){
					$("body").css({"background":"#f6f6f6","opacity":"1"});
			});
		})
		$("#approver .color").click(function(){
			$(this).addClass("color1").siblings().removeClass("color1");
			var color=$(this).html();
			$(".b").html(color);
		});
		$("#approver .size").click(function(){
			$(this).addClass("color1").siblings().removeClass("color1");
			var size=$(this).html();
			$("i").html(size);
		});
		var i=0;
		$('.tab-add').on('click',function(){
			$(this).prev("input").val(i++);
			$("strong").text(i);
		});
		$('.tab-old').on('click',function(){					
			$(this).next("input").val(i--);
			$("strong").text(i);
		});
		
		// 实现放大镜效果				
		$('#zoom_01').elevateZoom({});

    });

	//封装倒计时函数
    function SetRemainTime() {
	if (SysSecond > 0) {
		SysSecond = SysSecond - 1;
		var second = Math.floor(SysSecond % 60); 
		var minite = Math.floor((SysSecond / 60) % 60);
		var hour = Math.floor((SysSecond / 3600) % 24); 
		var day = Math.floor((SysSecond / 3600) / 24);
		$("#day").html(day).css({'color':'white','position':'relative','top':0,'font-weight':'bold',});
		$('#minues').html(minite).css({'color':'white','position':'relative','top':0});
		$('#hour').html(hour).css({'color':'white','position':'relative','top':0});
		$('#second').html(second).css({'color':'white','position':'relative','top':0});
			$(".endTime").html("距结束时间："+day+"天"+hour+"时"+minite+"分"+second+"秒").css({'color':'orange'});	       	
		} else {
		window.clearInterval(InterValObj);
	}
    }
