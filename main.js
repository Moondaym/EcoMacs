// variables
let addBtn = document.querySelector(".product-add-cart");
let cartNav = document.querySelector('.cart-nav');
let cartNum = null;
let popupContainer = document.querySelector('.popup-div');
let closeBtnPop = document.querySelector('.close-btn');
let modalCartContainer = document.querySelector('.car-modal-container');
let closeBtnCart = document.querySelector('.close-cart-btn');
let heartIcon = document.querySelector('.product-add');
let btnHeart = document.querySelector('.btn-heart');
btnHeart.style.color ='black'
let cartList = document.querySelector('#cart-list');
let cartTitle = document.querySelector('#cart-title');
let purshaseBtn = document.querySelector('#purchase-btn');

let canRun = true



document.querySelector("#product-area").addEventListener('click', function(e){
    if(e.target.getAttribute('class') == addBtn.getAttribute('class') && canRun == true){
        addNumToCart()
        cartNav.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'+'view cart'+"(" +cartNum+")";
        let p = document.createElement('p');
        let li = document.createElement('li');
        let divClose = document.createElement('div')
        divClose.setAttribute('class', 'list-close-btn');
        divClose.innerHTML = '&times;'
        p.innerText = 'Coming Soon!'
        li.setAttribute('class', 'li-cart')
        li.append(p, divClose)
        cartList.append(li)
        cartTitle.style.display = 'none'
        popupContainer.style.display = 'block'
        purshaseBtn.style.display = 'block'
        maxCartNum()
        divClose.addEventListener('click', function(){
            li.remove();
            cartNum -=1
            cartNav.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'+'view cart'+"(" +cartNum+")";
            if (cartNum == 0){
                cartTitle.style.display = 'block'
                purshaseBtn.style.display = 'none'

            }

        })

    }
})

document.querySelector('.cart-nav').addEventListener('click', function(){
    modalCartContainer.style.display = 'block' 
})

closeBtnPop.addEventListener('click', function(){
    popupContainer.style.display = 'none'
}) 


closeBtnCart.addEventListener('click', function(){
    modalCartContainer.style.display = 'none'
})


function addNumToCart(){
    cartNum += 1
    
}

function maxCartNum() {
    if(cartNum > 3){
        canRun = false;
        alert('You have can have only 4 items in your cart');
    }
}
