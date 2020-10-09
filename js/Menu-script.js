$(document).ready(function () {
	$('.nav__burger').click(function (event) {
		$('.nav__burger, .menu__list').toggleClass('active');
		//- Есле lock-скрола нужен, то в css + body.lock{overflow:hidden;}
		$('body').toggleClass('lock');
	});
	$('.menu__list').click(function (event) {
		$('.nav__burger,.menu__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});