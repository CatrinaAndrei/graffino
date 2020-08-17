var dropdown = document.getElementById("dropdown");
var dropdownlist = document.getElementById("dropdown__list");
var droplink = document.getElementById("nav__link--dropdown");
var contact = document.getElementById("nav__item--contact");
var navbar = document.getElementById("navbar");
const burgerBtn = document.querySelector(".navbar__hamburger");
var hero = document.getElementById("hero");
var sliderBtn = document.querySelectorAll(".hero__slider-btn");
var m = document.getElementById("hero__slider-btn--active");

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
	dropdownlist.style.visibility = "visible";
	if(screen.width <= 768){
    contact.style.paddingTop = "160px";
	 }
 }
	else
{
	uparrow = "rotate(-135deg)";
	dropdown.style.visibility = "hidden";
	dropdown.style.height = "0px";
	dropdownlist.style.visibility = "hidden";	
    contact.style.paddingTop = "0px";

}

}


var sliders = Array.from(sliderBtn);
var images = [];


images[0] = "url(hero-image.jpg)";
images[1] = "url(about-sheep.jpg)";
images[2] = "url(about-cliff.jpg)";

var i;


for (i = 0; i < sliders.length; i++){
 	 sliderBtn[0].addEventListener("click",()=>{ 
	 hero.style.backgroundImage = images[0];
	});
	sliderBtn[1].addEventListener("click",()=>{ 
		hero.style.backgroundImage = images[1];
	   });
	   sliderBtn[2].addEventListener("click",()=>{ 
		hero.style.backgroundImage = images[2];
	   });
}




