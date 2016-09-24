$(function(){								
	//轮播图
	$('.myfocus').myFocus({
	imgs:['img/slide1.jpg','img/slide2.jpg','img/slide3.jpg']
	});


	//物品楼层
	var $floorList = $('.floorList');
	$.ajax({
		url:'data/floorList.json',
		dataType:'json',
		success:function(res){						
			var $ul = $('<ul/>');
			$.each(res,function(idx,item){
				var html = '<p class="tex">'+item.title+'</p>' 
					+ '<p class="buyImg" >'+'<img src="'+item.imgurl+'" />'+'</p>'
					+ '<p class="price">'+item.price+'<a class="btn1" href="html/Detail.html">'+"抢购"+'</a>'+'</p>'
					+'<p class="cost">'+"原价："+'<del>'+item.oldprice+'</del>'+'<span class="rate">'+"折扣："
					+'<span class="red">'+item.off+'</span>'+"折"+'<span class="red red1">'
					+item.buyCount+'</span>'+"人已购买"+"</span>"+'</p>';
				$('<li/>').html(html).appendTo($ul);
			});	
			$floorList.append($ul);
		}
	})

	var $floorList4 = $('.floorList4');
	$.ajax({
		url:'data/floor4.json',
		dataType:'json',					
		success:function(res){						
			var $ul = $('<ul/>');
			$.each(res,function(idx,item){
				var html = '<p class="tex">'+item.title+'</p>' 
					+ '<p class="buyImg" >'+'<img src="'+item.imgurl+'" />'+'</p>'
					+ '<p class="price">'+item.price+'<a href="html/Detail.html" class="btn1">'+"抢购"+'</a>'+'</p>'
					+'<p class="cost">'+"原价："+'<del>'+item.oldprice+'</del>'+'<span class="rate">'+"折扣："
					+'<span class="red">'+item.off+'</span>'+"折"+'<span class="red red1">'
					+item.buyCount+'</span>'+"人已购买"+"</span>"+'</p>';
				$('<li/>').html(html).appendTo($ul);
			});	
			$floorList4.append($ul);
		}
	})
	//获取用户名
	var str=getCookie("name");
	$("#login").html(str).css("color","orangered");
	})