const dropdown = document.querySelector(".dropdown");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownBefore = window.getComputedStyle(dropdown,"::before");
const droplink = document.querySelector(".nav__link--dropdown");
const contact = document.querySelector(".nav__item--contact");
const navbar = document.querySelector(".navbar");
const burgerBtn = document.querySelector(".navbar__hamburger");
const hero = document.querySelector(".hero");
const sliderBtnActive = document.querySelectorAll(".hero__sliderBtn");


let menuOpen = false;
let dropdownOpen = false;

burgerBtn.addEventListener("click",()=>{
	if (!menuOpen){
		burgerBtn.classList.remove("closed");
		navbar.classList.remove("closed");
		burgerBtn.classList.toggle("open");
		navbar.classList.toggle("open");
		menuOpen = true;
	}
	else {
		burgerBtn.classList.remove("open");
		navbar.classList.remove("open");
		burgerBtn.classList.toggle("closed");
		navbar.classList.toggle("closed");
		menuOpen = false;
	}
}
);


droplink.addEventListener("click",()=>{

 	if(!dropdownOpen){
 		dropdown.classList.remove("closed");
 		dropdownList.classList.remove("closed");
 		contact.classList.remove("closed");
		dropdown.classList.toggle("open");
		dropdownList.classList.toggle("open");
		contact.classList.toggle("open");
		dropdownOpen = true;
	}	
	else
	{   dropdown.classList.remove("open");
 		dropdownList.classList.remove("open");
 		contact.classList.remove("open");
		dropdown.classList.toggle("closed");
		dropdownList.classList.toggle("closed");	
		contact.classList.toggle("closed");
		dropdownOpen = false;    
	}
}
);

/*
var images = [];


images[0] = "radial-gradient(58.3% 58.3% at 75.33% 44.51%, rgba(0, 0, 0, 0.0001) 0%, rgba(5, 4, 2, 0.6) 100%),url(hero-image.jpg)";
images[1] = "radial-gradient(58.3% 58.3% at 75.33% 44.51%, rgba(0, 0, 0, 0.0001) 0%, rgba(5, 4, 2, 0.6) 100%),url(about-sheep.jpg)";
images[2] = "radial-gradient(58.3% 58.3% at 75.33% 44.51%, rgba(0, 0, 0, 0.0001) 0%, rgba(5, 4, 2, 0.6) 100%),url(about-cliff.jpg)";


 	sliderBtnActive[0].addEventListener("click",()=>{ 
		hero.style.backgroundImage = images[0];
	});
	sliderBtnActive[1].addEventListener("click",()=>{ 
		hero.style.backgroundImage = images[1];
	});
	sliderBtnActive[2].addEventListener("click",()=>{ 
		hero.style.backgroundImage = images[2];
	});*/


	const slideArray = [];
	for (let i = 0; i < document.querySelectorAll('.hero__slider div').length; i++) {
		slideArray.push(document.querySelectorAll('.hero__slider div')[i].dataset.background);
	}
	
	let isActive = false;
	let currentSlideIndex = 0;

	for (let i = 0; i < sliderBtnActive.length; i++)
	sliderBtnActive[i].addEventListener("click",()=>{
		
	    if (isActive) {
			isActive = false;
			sliderBtnActive[i].classList.remove("active");
  		} 	
 		 else {
			  isActive = true;
			sliderBtnActive[i].classList.add("active");
			currentSlideIndex++;
 		} 
		if (currentSlideIndex >= slideArray.length) {
			currentSlideIndex = 0;
		}
	
		document.querySelector('.hero').style.backgroundImage = 'radial-gradient(58.3% 58.3% at 75.33% 44.51%, rgba(0, 0, 0, 0.0001) 0%, rgba(5, 4, 2, 0.6) 100%),url("' + slideArray[currentSlideIndex] + '")';
	    
	});
	
		