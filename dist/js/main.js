

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


function myFunction(thumbnail){
    const currentImage = document.getElementById('currentImage');
    currentImage.src = thumbnail.src;
    currentImage.style.width = '500px';
}

//To open lightbox
currentImage.addEventListener('click', openLightBox);
function openLightBox(){
    document.querySelector('.popup').classList.add('open');
}


//for pop-up
function myPopFunction(popupThumbnails){
    const currentPopupImage = document.getElementById('currentPopupImage');
    currentPopupImage.src = popupThumbnails.src;
    currentPopupImage.style.width = '500px';
}


//To close lightbox window
const closePopUP = document.getElementById('close');
closePopUP.addEventListener('click', closeLightBox);

function closeLightBox(){
    document.querySelector('.popup').classList.add('closed');
}