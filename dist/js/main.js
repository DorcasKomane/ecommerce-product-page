// window.onload = function(){
//     window.addEventListener('scroll', function(e){
//         if(window.pageYOffset > 100){
//             this.document.querySelector('header').classList.add('is-scrolling');
//         }else {
//             this.document.querySelector('header').classList.remove('is-scrolling');
//         }
//     });

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

    
// }

function myFunction(thumbnail){
    const currentImage = document.getElementById('currentImage');
    currentImage.src = thumbnail.src;
    currentImage.style.width = '500px';
}