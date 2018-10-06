$(document).ready(function() {
	// 點擊喜歡
	$('.far.fa-heart').click(function(event) {
		/* Act on the event */
		$(this).toggleClass("click");
		$(this).toggleClass("animated bounceIn");
	});
	// 點擊垃圾桶
	$('.your-cart ul li a').click(function(event) {
		/* Act on the event */
		$(this).parent().parent().remove();
	});
	// 發票頁按鈕
	$('.choise-receipt button').click(function(event) {
		/* Act on the event */
		$(this).toggleClass("click");
		$(this).siblings().toggleClass("click");
	});
	// 發票頁切換
	$('.btn-ele-receipt').click(function(event) {
		/* Act on the event */
		$('.ele-receipt').toggleClass("click");
		$('.mail-receipt').toggleClass("click");
	});
	$('.btn-mail-receipt').click(function(event) {
		/* Act on the event */
		$('.ele-receipt').toggleClass("click");
		$('.mail-receipt').toggleClass("click");
	});
	// 手機版漢堡選單
	$('.drop-down').click(function(event) {
		/* Act on the event */
		$('.top-menu-mb ul').slideToggle(500);
	});
	// 手機漢堡選單按鈕動畫
	$('.drop-down').click(function(event) {
		/* Act on the event */
		$('.drop-down').toggleClass("click");
	});
});