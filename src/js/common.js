$(function(){
				//鼠标滑过首页时出现窗口
				$('.first').on('mouseenter',function(){
					$('.window').show();
				});
				
				//鼠标滑过select热门城市时出现弹窗
				$('#over').on('mouseover',function(){
					$('.city').show();
				})
				//点击关闭按钮隐藏弹窗
				$('.city').on('click','.btnClose',function(){
					$('.city').hide();
				})
				
				//客服小窗口随滚动条移动，
				$(window).scroll(function() {		
					var top = $(window).scrollTop();			
						$(".kefu").css({ top: top + "px" });			
				});
				//回到顶部
				$(".topBack").click(function(){
					$('.kefu').animate({top:0},1000);
					$('body,html').animate({'scrollTop':0},1000);
				})
	})