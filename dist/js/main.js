const menuBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('#mobileNav');
const cartIcon = document.querySelector('#cartIcon');
const shoppingCart = document.querySelector('#shoppingCart');

menuBtn.addEventListener('click', function(){
menuBtn.classList.toggle('is-active');
menuBtn.style.zIndex = '5';
mobileNav.style.display = 'block';
});

cartIcon.addEventListener('mouseover', function(){
shoppingCart.style.display = 'block';
});

//To add/remove items from cart
const add = document.getElementById('plus');
const minus = document.getElementById('minus');
const qty =  document.getElementsByClassName('qtyText');

//increment/decrement quantity
add.addEventListener('click', incrementQty);
minus.addEventListener('click', decrementQty);

function incrementQty(){
    qty.textContent = 'hello'
    console.log(qty.textContent);
}

function decrementQty(){
    qty.innerText = 1;

    console.log(qty.innertext);
}


//For Lightbox
function myFunction(thumbnail){
    const currentImage = document.getElementById('currentImage');
    currentImage.src = thumbnail.src;
    currentImage.style.width = '500px';
}

//To open pop-up window
currentImage.addEventListener('click', openLightBox);
function openLightBox(){
    document.querySelector('.popup').classList.add('open');
}

//For pop-up
function myPopFunction(popupThumbnails){
    const currentPopupImage = document.getElementById('currentPopupImage');
    currentPopupImage.src = popupThumbnails.src;
    currentPopupImage.style.width = '500px';
}

//To close pop-up window
const closePopUP = document.getElementById('close');
closePopUP.addEventListener('click', closeLightBox);

function closeLightBox(){
    document.querySelector('.popup').classList.add('closed');
}