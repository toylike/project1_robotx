let anchors = document.querySelectorAll('.menu a[href*="#"]');
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



let butt1 = document.querySelector('#butt1');
let butt2 = document.querySelector('#butt2');
let butt3 = document.querySelector('#butt3');
let wrapp = document.querySelector('.wrapp_slider');

butt1.addEventListener('click', function(){
	butt1.style.backgroundColor = 'black';
	wrapp.style.marginLeft = 0 + 'px';
	butt3.style.backgroundColor = 'white';
	butt2.style.backgroundColor = 'white';
})
butt2.addEventListener('click', function(){
	butt2.style.backgroundColor = 'black';
	wrapp.style.marginLeft = '-100%';
	butt1.style.backgroundColor = 'white';
	butt3.style.backgroundColor = 'white';
})
butt3.addEventListener('click', function(){
	butt3.style.backgroundColor = 'black';
	wrapp.style.marginLeft = '-200%';
	butt1.style.backgroundColor = 'white';
	butt2.style.backgroundColor = 'white';
})


let elemsGallery = document.querySelectorAll('.menu_gallery > a');
let elemsPortfolio = document.querySelectorAll('.wrapp_portfolio > div');

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

let buttonsModalWindow = document.querySelectorAll('.wrapp_portfolio > div > div > a');
let modalsWindow = document.querySelectorAll('.wrappModalWindow > div');

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


function initMap() {
			  
		 var uluru = {lat: 50.4439974, lng: 30.5390631};
		 var map = new google.maps.Map(document.getElementById('map'), {
	      	zoom: 8, 
	      	center: uluru
    	 });
		 var marker = new google.maps.Marker({
			position: 
			uluru, map: map
		});
}