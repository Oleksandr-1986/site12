//webP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});
//burger
$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu_list ').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//slider
new Swiper('.header__slider', {
	navigation:{
		prevEl:'.swiper-button-prev',
	},
	simulateTouch: true,
	touchRatio:1,
	touchAngle:45,
	grabCursor:true,
	slideToClickedSlide: true,
	hashNavigation:{
		watchState:true,
	},
	keyboard:{
		enable: true,
		onlyInViewport:true,
		pageUpDown:true,
	},
	autoHeight:true,
	slidesPerView:1,
	slidesPerGroup:1,
	initialSlide:0,
	slidesPerColumn:1,
	loop:true,
	freeMode:true, 
	speed:800,
	direction:'vertical', 
	observer:true,
	observeParents:true,
	observeSlideChildren: true,	
});
//featured

const items = document.querySelectorAll('.projects__row_item');
const row = document.querySelector('.projects__row');
const last = row.lastElementChild;

items.forEach(function(item){
	if(window.screen.width > 1300){
		item.addEventListener('mouseenter', function(){
			if (item === last) {
				item.previousElementSibling.style.display = 'none';
			}else{
				item.nextElementSibling.style.display = 'none';
			}	
		});
		item.addEventListener('mouseleave', function(){
			if (item === last) {
				item.previousElementSibling.style.display = 'block';
			}else{
				item.nextElementSibling.style.display = 'block';
			}
		});
	}	
});
//tabs
//таби
$(function() {
	let tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 	
// кліки по вкладкам
	$('#tabs .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
// кліки по якорним ссилкам
	$('.tabs-target').click(function(){
		$('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
	});
});
//progress-bar
function animProgBar(){

	const prBars = document.querySelectorAll('.progressbar');
		
	prBars.forEach(function(prBar){
		const circles = prBar.querySelector('.progress-ring__circle');
		const radius = circles.r.baseVal.value;
		const circumference = 2 * Math.PI * radius;
		const counter = prBar.querySelector('.progressbar__counter_number');
		const number = counter.getAttribute('data-number');

		changeNumber = function() {
		  let count = Number(counter.innerHTML);
		  if(count < Number(number)){
		  	 counter.innerHTML = count += 1;
		  	 setProgress(count += 1);
		  	} 
		};

		setInterval(changeNumber, 1000);

		circles.style.strokeDasharray = `${circumference} ${circumference}`;
		circles.style.strokeDashoffset = circumference;
		function setProgress(percent){
			const offset = circumference - percent/100 * circumference;
			circles.style.strokeDashoffset = offset; 
		};
	});
}
animProgBar();

//slider team
new Swiper('.team__slider', {
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
	},
	simulateTouch: true,
	touchRatio:1,
	touchAngle:45,
	grabCursor:true,
	slideToClickedSlide: true,
	keyboard:{
		enable: true,
		onlyInViewport:true,
		pageUpDown:true,
	},
	autoHeight:true,
	slidesPerView:1,
	slidesPerGroup:1,
	initialSlide:0,
	slidesPerColumn:1,
	speed:800,
	observer:true,
	observeParents:true,
	observeSlideChildren: true,	
});	
//testimonials
new Swiper('.testimonials__slider', {
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
	},
	simulateTouch: true,
	touchRatio:1,
	touchAngle:45,
	grabCursor:true,
	slideToClickedSlide: true,
	keyboard:{
		enable: true,
		onlyInViewport:true,
		pageUpDown:true,
	},
	autoHeight:true,
	slidesPerView:1,
	slidesPerGroup:1,
	initialSlide:0,
	slidesPerColumn:1,
	speed:800,
	observer:true,
	observeParents:true,
	observeSlideChildren: true,	
});	

//blog
new Swiper('.blog__slider', {
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
	},
	simulateTouch: true,
	touchRatio:1,
	touchAngle:45,
	grabCursor:true,
	keyboard:{
		enable: true,
		onlyInViewport:true,
		pageUpDown:true,
	},
	autoHeight:true,
	freeMode:true,
	slidesPerView:1,
	slidesPerGroup:1,
	initialSlide:0,
	slidesPerColumn:1, 
	speed:800,
	direction:'vertical'

});


//price's carts

const priceCarts = document.querySelectorAll('.price__column');

priceCarts.forEach(function(cart){

	cart.addEventListener('click', function(){

		const menu = cart.lastElementChild;

		menu.classList.toggle('active')

	});

});
	
//show-map

const showMap = document.querySelector('.show-map');
const coverMap = document.querySelector('.map__cover');

showMap.addEventListener('click',function(){
	coverMap.classList.add('active');
});



