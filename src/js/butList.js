      jQuery(function($){	         	    	         	    
	    var $buyList = $('.buyList');
			var pageNum = 1;
			
			
			// 全局配置
			$.ajaxSetup({
				url:'goodList.json',
				data:{pageNo:pageNum},
				dataType:'json',
				success:function(res){
					console.log(res);
					
					var $ul = $('<ul/>');
					$.each(res,function(idx,item){
						var html = '<p class="tex">'+item.title+'</p>' 
							+ '<p class="buyImg" >'+'<img src="'+item.imgurl+'" />'+'</p>'
							+ '<p class="price">'+item.price+'</p>'
							+'<p class="cost">'+"原价："+'<del>'+item.oldprice+'</del>'+'<span class="rate">'+"折扣："
							+'<span class="red">'+item.off+'</span>'+"折"+'<span class="red red1">'
							+item.buyCount+'</span>'+"人已购买"+"</span>"+'</p>';
						$('<li/>').html(html).appendTo($ul);
					});

					$buyList.append($ul);
				}
			});

			//页面一加载就请求服务器的数据
			$.ajax();

			$(window).on('scroll',function(){
				var scrollTop = $(window).scrollTop();

				// 懒加载：滚动《快到底部》的时候再加载
				if(scrollTop >= $(document).height() - $(window).height()){
					pageNum++;
					if(pageNum==5){
						pageNum=1;
					}
					$.ajax({
						data:{pageNo:pageNum}
					});
				}
			});	
			// 手动触发滚动事件
			$(window).trigger('scroll');
			//获取用户名
			var str=getCookie("username");
			$("#login").html(str).css("color","orangered");
	})	            