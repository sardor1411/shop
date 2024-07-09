let sun = document.querySelector("#sun"),
    moon = document.querySelector("#moon"),
    body = document.querySelector("body"),
    cart = document.querySelector("#cart"),
    closeShopping = document.querySelector(".closeShopping"),
    homeBg = document.querySelector(".home_bg"),
    leftArrow = document.querySelector(".leftArrow"),
    rightArrow = document.querySelector(".rightArrow"),
    imageIcons = document.querySelectorAll(".image-icon"),
    list = document.querySelector(".product-right-bottom"),
    li = document.querySelectorAll(".list"),
    circle = document.querySelectorAll(".fa-circle"),
    allList = document.querySelector(".all-list"),
    listCard = document.querySelector(".listCard");
let total = document.querySelector(".total");
let quanity = document.querySelector(".quantity");
let bookType = document.querySelectorAll(".book-type");
const navMenu = document.getElementById("nav_menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");



navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});
navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

sun.addEventListener("click", () => {
    body.classList.add("darkLight");
    sun.classList.toggle("hide");
    moon.classList.toggle("hide");
});

moon.addEventListener("click", () => {
    body.classList.remove("darkLight");
    sun.classList.toggle("hide");
    moon.classList.toggle("hide");
});

let img = document.querySelectorAll(".home_bg img")
let count = 0;

rightArrow.addEventListener("click", () => {
    if(count == img.length -1){
        count = 0;
        console.log('working');
        sliderImage();
    } else{
        count++;
        sliderImage();
    }
});

leftArrow.addEventListener("click", () => {
    if(count == 0){
        count = img.length -1;
        console.log('working');
        sliderImage();
    } else{
        count--;
        sliderImage();
    }
});

img.forEach((item, index) => {
    item.style.left = `${index * 100}%`
})

const sliderImage = () => {
    img.forEach((item, index) => {
        item.style.transform = `translateX(-${count * 100}%`
    });
};