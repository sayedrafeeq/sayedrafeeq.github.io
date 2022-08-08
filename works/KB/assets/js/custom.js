$(document).ready(function () {
	//Scroll to Top
	$(function () {
		$(document).on('scroll', function () {

			if ($(window).scrollTop() > 100) {
				$('.scroll-top-wrapper').addClass('show');
			} else {
				$('.scroll-top-wrapper').removeClass('show');
			}
		});

		$('.scroll-top-wrapper').on('click', scrollToTop);
	});

	function scrollToTop() {
		verticalOffset = typeof (verticalOffset) != 'undefined' ? verticalOffset : 0;
		element = $('body');
		offset = element.offset();
		offsetTop = offset.top;
		$('html, body').animate({
			scrollTop: offsetTop
		}, 500, 'linear');
	}
	//Trending Ads Carousel
	$('.trendAds-carousel').owlCarousel({
		loop: true,
		margin: 10,
		autoplay: false,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			768: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	});
	//Custom JS
	$('.menu .item').tab();
	$('.ui.accordion').accordion();
	$('select.dropdown').dropdown();
	$('.ui.rating').rating();
	$('.ui.checkbox').checkbox();
	$('#cardType').dropdown();

	//Form Support
	$('.ui.support')
		.form({
			on: 'blur',
			fields: {
				dropdown: {
					identifier: 'dropdown',
					rules: [{
						type: 'empty',
						prompt: 'Please select a type of query'
					}]
				},
				name: {
					identifier: 'name',
					rules: [{
						type: 'empty',
						prompt: 'Please enter a name'
					}]
				},
				email: {
					identifier: 'email',
					rules: [{
						type: 'email',
						prompt: 'Please enter a valid e-mail'
					}]
				},
				message: {
					identifier: 'message',
					rules: [{
						type: 'empty',
						prompt: 'Please enter your message'
					}]
				},
				checkbox: {
					identifier: 'checkbox',
					rules: [{
						type: 'checked',
						prompt: 'Please check the terms and conditions'
					}]
				}
			}
		});

	//Form Insert Ad
	$('.ui.insert-ad')
		.form({
			on: 'blur',
			fields: {
				name: {
					identifier: 'name',
					rules: [{
						type: 'regExp[/^[a-z0-9_-]{4,16}$/]',
						prompt: 'Please enter a name'
					}]
				},
				email: {
					identifier: 'email',
					rules: [{
						type: 'email',
						prompt: 'Please enter a valid e-mail'
					}]
				},
				state: {
					identifier: 'state',
					rules: [{
						type: 'empty',
						prompt: 'Please select your state'
					}]
				},
				city: {
					identifier: 'city',
					rules: [{
						type: 'empty',
						prompt: 'Please select your city'
					}]
				},
				category_group: {
					identifier: 'category_group',
					rules: [{
						type: 'empty',
						prompt: 'Please select your category'
					}]
				},
				title: {
					identifier: 'title',
					rules: [{
						type: 'empty',
						prompt: 'Add your ad title'
					}]
				},
				content: {
					identifier: 'content',
					rules: [{
						type: 'empty',
						prompt: 'Add your ad content or text'
					}]
				},
				message: {
					identifier: 'message',
					rules: [{
						type: 'empty',
						prompt: 'Please enter your message'
					}]
				},
				checkbox: {
					identifier: 'checkbox',
					rules: [{
						type: 'checked',
						prompt: 'Please check the terms and conditions'
					}]
				}
			}
		});

	//Form loggedIn
	$('.ui.loggedIn')
		.form({
			on: 'blur',
			fields: {
				name: {
					identifier: 'name',
					rules: [{
						type: 'empty',
						prompt: 'Please enter a username / email address.'
					}]
				},
				mnumber: {
					identifier: 'mnumber',
					rules: [{
						type: 'empty',
						prompt: 'Please enter your mobile number.'
					}]
				},
				address: {
					identifier: 'address',
					rules: [{
						type: 'empty',
						prompt: 'Please enter your address.'
					}]
				},
				city: {
					identifier: 'city',
					rules: [{
						type: 'empty',
						prompt: 'Please enter your city.'
					}]
				},
				state: {
					identifier: 'state',
					rules: [{
						type: 'empty',
						prompt: 'Please enter your state.'
					}]
				},
				postalcode: {
					identifier: 'postalcode',
					rules: [{
						type: 'empty',
						prompt: 'Please enter your postal code.'
					}]
				}
			}
		});
	//Form Manage Ads
	$('.ui.manageAds')
		.form({
			on: 'blur',
			fields: {
				editAd: {
					identifier: 'editAd',
					rules: [{
						type: 'checked',
						prompt: 'Please edit the object (current window)'
					}]
				},
				password: {
					identifier: 'password',
					rules: [{
							type: 'empty',
							prompt: 'Please enter your password'
						},
						{
							type: 'length[6]',
							prompt: 'Your password must be at least 6 characters'
						}
					]
				}
			}
		});

	//Email Advertiser Model Box
	$('.ui.email-advertiser').click(function () {
		$('.ui.modal').modal('show');
	});

	//Premium Members - Form Validation	
	$('.ui.premium-form')
		.form({
			fields: {
				user: {
					identifier: 'user',
					rules: [{
						type: 'empty',
						prompt: 'Please enter your Username'
					}]
				},
				email: {
					identifier: 'email',
					rules: [{
							type: 'empty',
							prompt: 'Please enter your e-mail.'
						},
						{
							type: 'email',
							prompt: 'Please enter a valid e-mail.'
						}
					]
				},
				password: {
					identifier: 'password',
					rules: [{
							type: 'empty',
							prompt: 'Please enter your password.'
						},
						{
							type: 'length[6]',
							prompt: 'Your password must be at least 6 characters.'
						}
					]
				},
				confirm_password: {
					identifier: 'confirm_password',
					rules: [{
							type: 'empty',
							prompt: 'Please enter your confirm password.'
						},
						{
							type: 'length[6]',
							prompt: 'Your confirm password must be at least 6 characters.'
						}
					]
				},
				cardType: {
					identifier: 'cardType',
					rules: [{
						type: 'empty',
						prompt: 'Please select your card type.'
					}]
				},
				cardNumber: {
					identifier: 'cardNumber',
					rules: [{
						type: 'exactLength[16]',
						prompt: 'Please enter a valid card number.'
					}]
				},
				card_cvc: {
					identifier: 'card_cvc',
					rules: [{
						type: 'exactLength[3]',
						prompt: 'Please enter card cvc details.'
					}]
				},
				expire_month: {
					identifier: 'expire_month',
					rules: [{
						type: 'empty',
						prompt: 'Please select expire month.'
					}]
				},
				expire_year: {
					identifier: 'expire_year',
					rules: [{
						type: 'exactLength[4]',
						prompt: 'Please enter expire year.'
					}]
				},
				terms: {
					identifier: 'terms',
					rules: [{
						type: 'checked',
						prompt: 'Are you agree with the terms and conditions?'
					}]
				}
			}
		});
	//Email Advertiser Validation
	$('.ui.email-advertiser')
		.form({
			on: 'blur',
			fields: {
				name: {
					identifier: 'name',
					rules: [{
						type: 'empty',
						prompt: 'Please enter a name.'
					}]
				},
				email: {
					identifier: 'email',
					rules: [{
						type: 'email',
						prompt: 'Please enter a valid e-mail.'
					}]
				},
				mnumber: {
					identifier: 'mnumber',
					rules: [{
						type: 'empty',
						prompt: 'Please enter your mobile number.'
					}]
				},
				message: {
					identifier: 'message',
					rules: [{
						type: 'empty',
						prompt: 'Please enter your message.'
					}]
				}
			}
		});
		//My Account - Side Menu - Active Link JS
		$('.ui.dropdown').dropdown();
		$('.ui .item').on('click', function() {
		   $('.ui .item').removeClass('active');
		   $(this).addClass('active');
		});		
		//My Account - Payment Methods - Radio Button Toggle JS
		$('.radioBtn').click(function() {
			var target = $(this).data('target-id');
			$('.payment_option').hide();
			$('.payment_option[data-target="' + target + '"]').show();
		});
});