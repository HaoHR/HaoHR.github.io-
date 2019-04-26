$(function () {
	var able_count = 1;
	var release_able = false;
	var $title_txt = $('.title-txt');
	var $main_area = $('.main-area');
	var $release_btn = $('.release-btn');
 
	// 输入框获取焦点
	$main_area.focus(function () {
		console.log("获取焦点");
		$(this).parent().addClass('outline');
		$title_txt.addClass('title');
	})
 
	// 输入框失去焦点
	$main_area.blur(function () {
		console.log("失去焦点");
		$(this).parent().removeClass('outline');
		$title_txt.removeClass('title');
		$title_txt.html("置办年货省省省！红包在手年货无忧！点击领取年货红包&nbsp;&nbsp;&nbsp;热门微博");
	})
	// 输入框文本修改
	$main_area.on('input', function () {
		// 根据可输入字的个数决定右上角文本的提示 与 是否能发布的状态
		if (able_count >= 0) {
			if (able_count != 0) {
				release_able = true;
			} else {
				release_able = false;
			}
		} else {
			release_able = false;
		}
		// 根据发布状态决定发布按钮的样式
		if (release_able) {
			$release_btn.css({
				backgroundColor: "orange",
				borderColor: "orange"
			})
		} else {
			$release_btn.css({
				backgroundColor: "#ffc09f",
				borderColor: "#ffc09f"
			})
		}
 
	})
 
	// 发布事件
	$release_btn.click(function () {
		console.log("发布");
		if (release_able) {
			console.log('可以发布');
			// 创建show对象的各个部位
			var $showContent = $('<div class="show-content"></div>'),
			$showName = $('<div class="show-name"></div>'),
			$showTxt = $('<div class="show-txt"></div>'),
			$showP = $('<p class=""></p>');
			var date = new Date();
			// 设置，对象结构内内容
			$showName.text("Hao");
			$showP.text($main_area.val());
			// 添加进入主结构
			$showTxt.append($showP);
			$showContent.append($showName);
			$showContent.append($showTxt);
			// 向所有匹配元素内部的开始处插入内容
			$('.show').prepend($showContent);
			// 添加动画
			// 位置从输入框处下移
			$showContent.css({
				top: '150px'
			})
			$showContent.animate({
				top: 0
			}, 200)
		}
	})
})