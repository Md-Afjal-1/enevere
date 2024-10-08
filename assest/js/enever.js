const swiperFull = new Swiper(".swiper-full", {
	autoplay: {
		delay: 3000
	},
	slidesPerView: "auto",
	centeredSlides: false,
	slidesPerView: 3,
	spaceBetween: 32,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		// dynamicBullets: true,
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		}
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
	,breakpoints: {
		1028: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		}
	}
});
$(".swiper-full").mouseenter(function () {
	swiperFull.autoplay.stop();
});
$(".swiper-full").mouseleave(function () {
	swiperFull.autoplay.start();
});


