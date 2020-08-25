let anchors = document.querySelectorAll('.nav_menu a[href*="#"]');
for(let anchor of anchors){
	if(anchor){
		anchor.addEventListener('click', function(e){
			e.preventDefault();
			let anchorId = this.getAttribute('href');
			document.querySelector(anchorId).scrollIntoView({
				behavior : 'smooth', block: 'start'
			})
		})
	}
}

window.addEventListener('scroll', function(){
	let scrollDistance = window.scrollY;

	document.querySelectorAll('.menuSpy').forEach((elem, id) => {
		if(elem.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance){
			document.querySelectorAll('.nav a').forEach((elem) => {
				if(elem.classList.contains('active')){
					elem.classList.remove('active');
				}
			});

			document.querySelectorAll('.nav li')[id].querySelector('a').classList.add('active');
		}
	});
});



let first_slider = document.querySelector('#slider_first');
let second_slider = document.querySelector('#slider_second');
let third_slider = document.querySelector('#slider_third');
let slider_wrrap = document.querySelector('.slider_wrrap');

first_slider.addEventListener('click', function(){
	first_slider.style.backgroundColor = 'black';
	slider_wrrap.style.marginLeft = 0 + 'px';
	third_slider.style.backgroundColor = 'white';
	second_slider.style.backgroundColor = 'white';
})
second_slider.addEventListener('click', function(){
	second_slider.style.backgroundColor = 'black';
	slider_wrrap.style.marginLeft = '-100%';
	first_slider.style.backgroundColor = 'white';
	third_slider.style.backgroundColor = 'white';
})
third_slider.addEventListener('click', function(){
	third_slider.style.backgroundColor = 'black';
	slider_wrrap.style.marginLeft = '-200%';
	first_slider.style.backgroundColor = 'white';
	second_slider.style.backgroundColor = 'white';
})


let elemsGallery = document.querySelectorAll('.gallery_menu > a');
let elemsPortfolio = document.querySelectorAll('.gallery_portfolio > div');

for(let elemGallery of elemsGallery){
	elemGallery.addEventListener('click',function(){
		let idElemGallery = elemGallery.getAttribute('id');
		for(let elemPortfolio of elemsPortfolio){
			let arrPortfolio = elemPortfolio.getAttribute('id').split(' ');
			if(arrPortfolio.includes(idElemGallery)){
				elemPortfolio.style.display = 'block';
			}else{
				elemPortfolio.style.display = 'none';
			}
		}
	})
}

let buttonsModalWindow = document.querySelectorAll('.gallery_portfolio > div > div > a');
let modalsWindow = document.querySelectorAll('.gallery_modalWindow > div');

for(let buttonModalWindow of buttonsModalWindow){
	buttonModalWindow.addEventListener('click', function(){
	let getClassOfButton = buttonModalWindow.getAttribute('class');

	for(let modalWindow of modalsWindow){
		let getClassOfModal = modalWindow.getAttribute('class');
		if(getClassOfButton == getClassOfModal){
			modalWindow.style.display = 'block';
			modalWindow.addEventListener('click', function(){
				modalWindow.style.display = 'none';
			})
		}
	}

})
}

	let burgerMenuButton = document.querySelector('.burger_button');
	let navBurgerMenu = document.querySelector('.burger_menu');
	let burgerMenu = document.querySelector('.nav_burger');
	
	function checkDropMenu(x){

		if(x.matches){
			navBurgerMenu.style.top = '-200px';
			burgerMenuButton.addEventListener('click', dropMenu);
		}else{
			navBurgerMenu.style.top = '0';
		}
    }

    function dropMenu(){
		if(burgerMenu.classList.contains('burger_menu_active')){
			navBurgerMenu.style.top = '-200px';
			burgerMenu.classList.remove('burger_menu_active');
			navBurgerMenu.style.transition = '.5s';

		}else{
			navBurgerMenu.style.top = '100px';
			burgerMenu.classList.add('burger_menu_active');
			navBurgerMenu.style.transition = '.5s';
		}
	}
	
	let x = window.matchMedia("(max-width: 745px)")
	checkDropMenu(x)
	x.addListener(checkDropMenu)


function initMap() {

		 var uluru = {lat: 50.4439974, lng: 30.5390631};
		 var map = new google.maps.Map(document.getElementById('contact_map'), {
	      	zoom: 8,
	      	center: uluru
    	 });
		 var marker = new google.maps.Marker({
			position:
			uluru, map: map
		});
}
