$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Основной слайдер на главной
	if ($('.main_slider .swiper-container').length) {
		new Swiper('.main_slider .swiper-container', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Примеры проектов - внешний слайдер
	if ($('.portfolio .cont > .swiper-container').length) {
		new Swiper('.portfolio .cont > .swiper-container', {
			loop: false,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			navigation: {
				nextEl: '.inside-swiper-button-next',
				prevEl: '.inside-swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Примеры проектов - внутренний слайдер
	if ($('.portfolio .images').length) {
		const portfolioSliders = [],
			portfolioThumbs = []

		$('.portfolio .images .thumbs .swiper-container').each(function (i) {
			$(this).addClass('thumbs_s' + i)

			portfolioThumbs.push(new Swiper('.thumbs_s' + i, {
				loop: false,
				speed: 500,
				nested: true,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				breakpoints: {
					0: {
						spaceBetween: 12,
						slidesPerView: 3
					},
					480: {
						spaceBetween: 12,
						slidesPerView: 4
					},
					1194: {
						spaceBetween: 20,
						slidesPerView: 4
					},
					1348: {
						spaceBetween: 24,
						slidesPerView: 4
					}
				}
			}))
		})

		$('.portfolio .images .big .swiper-container').each(function (i) {
			$(this).addClass('big_s' + i)

			portfolioSliders.push(new Swiper('.big_s' + i, {
				loop: false,
				speed: 500,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				nested: true,
				thumbs: {
					swiper: portfolioThumbs[i]
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					0: {
						spaceBetween: 24,
						slidesPerView: 'auto'
					},
					834: {
						spaceBetween: 42,
						slidesPerView: 1
					}
				}
			}))
		})
	}


	// Этапы стороительства
	$('.info_block .stages_btn').click(function (e) {
		$('.info_block .btns .btn').removeClass('active')
		$(this).addClass('active')

		$('.info_block .production').slideUp(300)
		$('.info_block .stages').slideDown(500)
	})

	// Производство
	$('.info_block .production_btn').click(function (e) {
		$('.info_block .btns .btn').removeClass('active')
		$(this).addClass('active')

		$('.info_block .stages').slideUp(300)
		$('.info_block .production').slideDown(500)
	})


	// Плавная прокрутка к якорю
	$('.scroll_btn').click(function (e) {
		e.preventDefault()

		let href = $(this).data('anchor'),
			addOffset = 0

		if ($(this).data('offset')) addOffset = $(this).data('offset')

		$('html, body').stop().animate({ scrollTop: $(href).offset().top - addOffset }, 1000)
	})


	// Моб. меню
	$('header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header .menu').addClass('show')
	})
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!firstResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 414) $('meta[name=viewport]').attr('content', 'width=414, user-scalable=no')

			firstResize = true
		} else {
			firstResize = false
		}


		// Перезапись ширины окна
		WW = $(window).width()
	}
})