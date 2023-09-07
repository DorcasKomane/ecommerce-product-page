const menuBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('#mobileNav');
const cartIcon = document.querySelector('#cartIcon');
const shoppingCart = document.querySelector('#shoppingCart');

menuBtn.addEventListener('click', function(){
menuBtn.classList.toggle('is-active');
menuBtn.style.zIndex = '5';
mobileNav.style.display = 'block';
});



//To add/remove items from cart
const add = document.getElementById('plus');
const minus = document.getElementById('minus');
const qtyText =  document.getElementById('qtyText');

//increment/decrement quantity
add.addEventListener('click', incrementQty);
minus.addEventListener('click', decrementQty);

function incrementQty(){
    let value = parseInt(qtyText.textContent);
    value += 1;
    qtyText.textContent = value;
}

function decrementQty(){
    let value = parseInt(qtyText.textContent);
    
    if(value === 0){
        alert('Error: Quantity cannot be less than zero!')
    }else{
        value -= 1;
        qtyText.textContent = value;
    }
}

//For Lightbox
const currentImage = document.getElementById('currentImage');

function myFunction(thumbnail){
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

//Add product to cart
const addToCart = document.getElementById('addToCart');
addToCart.addEventListener('click', addProduct);

const productImage = document.querySelector('.product-img');
const productTitle = document.querySelector('h3');
const productPrice = document.querySelector('.product-price');
const cartQuantity = document.querySelector('.cart-qty');
const total = document.querySelector('.total');
const mainProdTitle = document.querySelector('.main-product-title');
const discountedPrice = document.querySelector('.discounted-price');

function addProduct(){
    // productImage.src = currentImage.src;
    productTitle.innerText = mainProdTitle.innerText;
    productPrice.innerText = discountedPrice.innerText;
    cartQuantity.innerText = qtyText.innerText;
    total.innerText = '$' + (parseInt(cartQuantity.innerText) * parseInt(productPrice.innerText)).toFixed(2); 

    console.log(total.innerText);
}

//Display cart
const productBox = document.getElementById('productBox');
const emptyCart = document.getElementById('empty-cart');

cartIcon.addEventListener('click', displayCart);

function displayCart(){
    if(shoppingCart.classList.contains('cart-opened')){
        shoppingCart.style.display = 'none';
        shoppingCart.classList.add('cart-closed');
    }else{
        
        if(parseInt(cartQuantity.innerText) !== 0){
            productBox.style.display = 'block';
            emptyCart.style.display = 'none';
        }else{
            emptyCart.style.display = 'block';
            productBox.style.display = 'none';
        }

        shoppingCart.classList.add('cart-opened');
    }
      

    console.log(parseInt(cartQuantity.innerText));
}
