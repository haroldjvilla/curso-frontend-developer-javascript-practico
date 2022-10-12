const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const ProductdetailContainer = document.querySelector('#productDetail');

const menuBurguer = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');




menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobilemenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)





function toggleDesktopMenu() {

    
    ProductdetailContainer.classList.add('inactive');
    const isAsaideClose = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsaideClose) {
        shoppingCartContainer.classList.add('inactive')
        
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobilemenu() {
    const isAsaideClose = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsaideClose) {
        shoppingCartContainer.classList.add('inactive')
        
    }

    closeProductDetailAside();

    mobilemenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClose = mobilemenu.classList.contains('inactive');

    if (!isMobileMenuClose) {
        mobilemenu.classList.add('inactive')
        
    }

    const isProductDetailClose = ProductdetailContainer.classList.contains('inactive');
    if (!isProductDetailClose) {
        ProductdetailContainer.classList.add('inactive')
        
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductdetailAside() {
    
    shoppingCartContainer.classList.add('inactive');

    ProductdetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    ProductdetailContainer.classList.add('inactive');
}


function openProductDetail () {
    desktopMenu.classList.add ("inactive")
    shoppingCartContainer.classList.add ("inactive")
    mobileMenu.classList.add ("inactive")

    productDetailContainer.classList.remove ("inactive") 
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name, price, image} ->product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductdetailAside)
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    
    }
}
    
renderProducts(productList);


    
