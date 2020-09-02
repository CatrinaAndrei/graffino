const dropdown = document.querySelector(".dropdown");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownBefore = window.getComputedStyle(dropdown, "::before");
const dropLink = document.querySelector(".nav__link--dropdown");
const contact = document.querySelector(".nav__item--contact");
const navbar = document.querySelector(".navbar");
const burgerBtn = document.querySelector(".navbar__hamburger");
const hero = document.querySelector(".hero");
const dropdownLogo = document.querySelector(".nav__logo--dropdown .logo .logo__image");
const sliderBtnActive = document.querySelectorAll(".slider__button");


let menuIsOpen = false;
let dropdownIsOpen = false;

burgerBtn.addEventListener("click", () => {
	if (!menuIsOpen) {
		burgerBtn.classList.remove("is-closed");
		dropdownLogo.classList.remove("is-closed");
		navbar.classList.remove("is-closed");
		burgerBtn.classList.toggle("is-open");
		navbar.classList.toggle("is-open");
		dropdownLogo.classList.toggle("is-open");
		menuIsOpen = true;
	} else {
		burgerBtn.classList.remove("is-open");
		dropdownLogo.classList.remove("is-open");
		navbar.classList.remove("is-open");
		burgerBtn.classList.toggle("is-closed");
		navbar.classList.toggle("is-closed");
		dropdownLogo.classList.toggle("is-closed");
		menuIsOpen = false;
	}
});

dropLink.addEventListener("click", () => {

	if (!dropdownIsOpen) {
		dropdown.classList.remove("is-closed");
		dropdownList.classList.remove("is-closed");
		contact.classList.remove("is-closed");
		dropdown.classList.toggle("is-open");
		dropdownList.classList.toggle("is-open");
		contact.classList.toggle("is-open");
		dropdownIsOpen = true;
	} else {
		dropdown.classList.remove("is-open");
		dropdownList.classList.remove("is-open");
		contact.classList.remove("is-open");
		dropdown.classList.toggle("is-closed");
		dropdownList.classList.toggle("is-closed");
		contact.classList.toggle("is-closed");
		dropdownIsOpen = false;
	}
});

const slideArray = [];
let currentSlideIndex = 0;
var sliderIsActive = new Array(sliderBtnActive.length).fill(false);
const sliderDivs = document.querySelectorAll('.slider div');
for (let i = 0; i < sliderDivs.length; i++) {
	slideArray.push(sliderDivs[i].dataset.background);
}
for (let i = 0; i < sliderBtnActive.length; i++)
	sliderBtnActive[i].addEventListener("click", () => {
		if (sliderIsActive[i] == false && sliderIsActive.includes(true)) {
			for (let i = 0; i < sliderBtnActive.length; i++) {
				sliderBtnActive[i].classList.remove("is-active");
				sliderIsActive[i] = false;
			}
			sliderBtnActive[i].classList.add("is-active");
			sliderIsActive[i] = true;
			currentSlideIndex = i;
		} else if (sliderIsActive[i] == false) {
			sliderBtnActive[i].classList.add("is-active");
			sliderIsActive[i] = true;
			currentSlideIndex = i;
			console.log(sliderIsActive);
		}
		if (currentSlideIndex >= slideArray.length) {
			currentSlideIndex = 0;
		}
		document.querySelector('.hero').style.backgroundImage = 'radial-gradient(58.3% 58.3% at 75.33% 44.51%, rgba(0, 0, 0, 0.0001) 0%, rgba(5, 4, 2, 0.6) 100%),url("' + slideArray[currentSlideIndex] + '")';
	});