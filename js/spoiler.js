$(document).ready(function () {
	// Спойлер!!!
	$('.spoiler__title').click(function (event) {
		// Когда у родителя есть класс "one", то открытым может быть только 1 слайд (предыдущий закроется)
		if ($('.spoiler').hasClass('one')) {
			$('.spoiler__title').not($(this)).removeClass('open');
			$('.spoiler__title').not($(this)).next().slideUp(300);
		}
		$(this).toggleClass('open').next().slideToggle(300);
	});
});