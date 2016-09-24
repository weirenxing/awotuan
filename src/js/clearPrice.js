$(function(){

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

		//添加到购物车
		var str = getCookie("arr");			
		var arr=JSON.parse(str);
		console.log(arr)
		var $table=$("#cart");
		for (var i=0;i<arr.length;i++) {
			
			var $tbody=$('<tbody>');
			$tr2=$('<tr class="fff" id="two">');
			$tr3=$('<tr class="fff" class="three">');
			$tr4=$('<tr class="four"></tr>');
			$('<td>').addClass('tab1').html("<input type='checkbox'/>"+'<span class="buyss">'+'<img src="'
			+arr[i].detImg+'" width="90" height="57"/>'+'</span>'+'<span class="tab1-tex">'
			+arr[i].tex+'</span>').appendTo($tr2);
			$('<td>').html("闫森：黑色    尺码：L").appendTo($tr2);
			$('<td class="price-o">').html(arr[i].price).appendTo($tr2);
			$('<td class="yellow">').html('<p class="pCenter">'+'<span class="tab-old">'+"-"+'</span>'+'<input type="text" class="tab-tex" value="0"/>'+'<span class="tab-add">'+"+"+'</span>'+'</p>').appendTo($tr2);
			$('<td class="sumPrice">').html("59.00").appendTo($tr2);
			$('<td class="del">').html("删除").appendTo($tr2);
			$("<td colspan='6'>").html('<label class="check1">'+'<input type="checkbox" value="全选" />'+"全选"+'</label>'+"<p class='pRight'>"+'数量：'+'<span class="span1">'+"0"+'</span>'+"件  金额：￥"+'<span class="sPrice">'+0.00+'</span>'+ "邮费：￥"+'<span>'+'0'+'</span>'+'</p>').appendTo($tr3);
			$('<td colspan="6" class="tRight"></td>').html("总额："+"<span>"+0.00+"</span>").appendTo($tr4);
			$tr2.appendTo($tbody);
			$tr3.appendTo($tbody);
			$tr4.appendTo($tbody);
			$tbody.appendTo($table);
			
		}
		$('.del').on('click',function(){
			//删除DOM节点
			$(this).parents('tbody').remove();
		});
		//计算金额
		var i=$('.tab-tex').val();
		console.log(i);
		$('.tab-add').on('click',function(){
			$(this).prev("input").val(i++);	
			var num=$(this).prev("input").val();
			console.log(num);
			var newPrice=$(this).parents("td").prev("td").text();
			sum=newPrice*num;
			console.log(sum);
			$(this).parents("td").next("td").html(sum+".00");
			$(this).parents("tr").next("tr").find(".span1").html(i-1);
			$(this).parents("tr").next("tr").find(".sPrice").html(sum+".00");
			$(this).parents("tr").next("tr").next("tr").find("span").html(sum+".00");
		});
		$('.tab-old').on('click',function(){					
			$(this).next("input").val(i--);	
			console.log(i);
			var num1=$(this).next("input").val();
			console.log(num1);
			var newPrice1=$(this).parents("td").prev("td").text();
			sum1=newPrice1*num1;
			console.log(sum1);
			$(this).parents("td").next("td").html(sum1+".00");
			$(this).parents("tr").next("tr").find(".span1").html(i-1);
			$(this).parents("tr").next("tr").find(".sPrice").html(sum1+".00");
			$(this).parents("tr").next("tr").next("tr").find("span").html(sum1+".00");
			
			
		});
	})