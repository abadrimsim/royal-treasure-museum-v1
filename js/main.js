// Responsive Nav
$(function () {
	menu = $('nav ul');

	$('#openup').on('click', function (e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function () {
		var w = $(this).width();
		if (w > 480 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

	$('nav li').on('click', function (e) {
		var w = $(window).width();
		if (w < 480) {
			menu.slideToggle();
		}
	});
	$('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function (event) {
	if (this.hash !== '') {
		event.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top,
			},
			800, //800 milliseconds
			function () {
				window.location.hash = hash;
			}
		);
	}
});

// Content Slider
var sliderContent = document.querySelectorAll('.fade-anim'),
	arrowPrev = document.querySelector('#prev'),
	arrowNext = document.querySelector('#next'),
	dots = document.getElementsByClassName('dot'),
	current = 0;

// Clear Content Slider
function reset() {
	for (let i = 0; i < sliderContent.length; i++) {
		sliderContent[i].style.display = 'none';
	}
}

// Initialize slider
function startSlide() {
	reset();
	sliderContent[0].style.display = 'flex';
}

// Show previous slide
function slideLeft() {
	reset();
	sliderContent[current - 1].style.animationName = 'fade';
	sliderContent[current - 1].style.display = 'flex';
	current--;
}

// Show next slide
function slideRight() {
	reset();
	sliderContent[current + 1].style.animationName = 'fade';
	sliderContent[current + 1].style.display = 'flex';
	current++;
}

// Left arrow click
arrowPrev.addEventListener('click', function () {
	if (current === 0) {
		current = sliderContent.length;
	}
	slideLeft();
	slideIndicator();
});

// Right arrow click
arrowNext.addEventListener('click', function () {
	if (current === sliderContent.length - 1) {
		current = -1;
	}
	slideRight();
	slideIndicator();
});

// Slide Indicator
function slideIndicator() {
	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}

	dots[current].className += ' active';
}

startSlide();

// Navbar background color upon scroll
$(function () {
	$(document).scroll(function () {
		var $nav = $('nav');
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});
