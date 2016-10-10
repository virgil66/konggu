;(function($){
	//notice的样式设置
	var notice_width = $('.home .notice').height() + 30;
	$('.home .notice').css({
		'margin-left': notice_width
	});

	//about下面的类别切换
	$('.about .about-group .about-list').on('click', function(event) {
		event.preventDefault();
		var _index = $(this).index();
		$(this).addClass('black-active').siblings().removeClass('black-active');
		$(this).parent().parent().find('.content-list').eq(_index).addClass('show').siblings().removeClass('show');
	});


	//news下面的类别切换
	$('.news .news-group .news-list').on('click', function(event) {
		event.preventDefault();
		var _index = $(this).index();
		$(this).addClass('white-active').siblings().removeClass('white-active');
		$(this).parent().parent().find('.switch-content').eq(_index).addClass('show').siblings().removeClass('show');
		if(_index == 1){
			$('.news .back').css({
				'display': 'none'
			});
			$('.news .go').css({
				'display': 'none'
			});
		}else{
			$('.news .back').css({
				'display': 'block'
			});
			$('.news .go').css({
				'display': 'block'
			});
		}
	});


	//culture下面的类别切换
	$('.culture .culture-group .culture-list').on('click', function(event) {
		event.preventDefault();
		var _index = $(this).index();
		$(this).addClass('black-active').siblings().removeClass('black-active');
		$(this).parent().parent().find('.content-list').eq(_index).addClass('show').siblings().removeClass('show');
		if(_index == 1){
			$('.culture .icon-pen').css({
				'display': 'none'
			});
			$('.culture .icon-penholder').css({
				'bottom': -421 +'px'
			});
			$('.service').css({
				'top': 268 +'px'
			});
		}else{
			$('.culture .icon-pen').css({
				'display': 'block'
			});
			$('.culture .icon-penholder').css({
				'bottom': -153 +'px'
			});
			$('.service').css({
				'top': '0'
			});
		}
	});

	//service下面的类别切换
	$('.service .service-group .service-list').on('click', function(event) {
		event.preventDefault();
		var _index = $(this).index();
		$(this).addClass('white-active').siblings().removeClass('white-active');
		$(this).parent().parent().find('.content-list').eq(_index).addClass('show').siblings().removeClass('show');
	});
})(jQuery);