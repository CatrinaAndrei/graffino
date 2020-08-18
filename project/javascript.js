const dropdown = document.getElementById("dropdown");
const dropdownList = document.getElementById("dropdown__list");
const droplink = document.getElementById("nav__link--dropdown");
const contact = document.getElementById("nav__item--contact");
const navbar = document.getElementById("navbar");
const burgerBtn = document.querySelector(".navbar__hamburger");
const hero = document.getElementById("hero");
const sliderBtnActive = document.querySelectorAll(".hero__slider-btn");


let menuOpen = false;

burgerBtn.addEventListener("click",()=>{
	if (!menuOpen){
		burgerBtn.classList.add("open");
		navbar.style.visibility = "visible";
        navbar.style.height= "815px";
		menuOpen = true;
	}
	else {
		burgerBtn.classList.remove('open');
		navbar.style.visibility = "hidden";
		navbar.style.height = "0px";
		menuOpen = false;
	}
}
);


droplink.onclick = function(){

 	if(dropdown.style.visibility == "hidden"){
		dropdown.style.visibility = "visible";
		dropdown.style.height = "186px";
		dropdownList.style.visibility = "visible";
		if (window.innerWidth <= 1152){
			contact.style.paddingTop = "160px";
		}
	}	
	else
	{
		dropdown.style.visibility = "hidden";
		dropdown.style.height = "0px";
		dropdownList.style.visibility = "hidden";	
		contact.style.paddingTop = "0px";    
	}
}


var sliders = Array.from(sliderBtnActive);
var images = [];


images[0] = "radial-gradient(58.3% 58.3% at 75.33% 44.51%, rgba(0, 0, 0, 0.0001) 0%, rgba(5, 4, 2, 0.6) 100%),url(hero-image.jpg)";
images[1] = "radial-gradient(58.3% 58.3% at 75.33% 44.51%, rgba(0, 0, 0, 0.0001) 0%, rgba(5, 4, 2, 0.6) 100%),url(about-sheep.jpg)";
images[2] = "radial-gradient(58.3% 58.3% at 75.33% 44.51%, rgba(0, 0, 0, 0.0001) 0%, rgba(5, 4, 2, 0.6) 100%),url(about-cliff.jpg)";


for (i = 0; i < sliders.length; i++){
 	sliderBtnActive[0].addEventListener("click",()=>{ 
		hero.style.backgroundImage = images[0];
	});
	sliderBtnActive[1].addEventListener("click",()=>{ 
		hero.style.backgroundImage = images[1];
	});
	sliderBtnActive[2].addEventListener("click",()=>{ 
		hero.style.backgroundImage = images[2];
	});
}




