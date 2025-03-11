// variables
let addBtn = document.querySelector(".product-add-cart");
let cartNav = document.querySelector('.cart-nav')
let cartNum = null;

document.querySelector("#product-area").addEventListener('click', function(e){
    if(e.target.getAttribute('class') == addBtn.getAttribute('class')){
        addNumToCart()
        console.log('clicked');
        cartNav.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'+'view cart'+"(" +cartNum+")";
    }else{
        console.log('nothing');
        console.log(addBtn.getAttribute('class'))
    }
})

function addNumToCart(){
    cartNum += 1
    
}