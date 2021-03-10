$(document).ready(function() {
	$('.menu__burger').click(function(event) {
		$('.menu__burger,.menu__navigation').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document).ready(function(){
	$('.section-one__row-cart').slick({
		slidesToShow: 2,
		infinite: false,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					arrows:false,
				}
			}
		]
	});
});
$(document).ready(function(){
	$('.slider__row-cart').slick({
		slidesToShow: 1,
		infinite: false,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					arrows:false,
				}
			}
		]
	});
});