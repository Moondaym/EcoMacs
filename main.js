// variables
let addBtn = document.querySelector(".product-add-cart");
let cartNav = document.querySelector('.cart-nav');
let cartNum = null;
let popupContainer = document.querySelector('.popup-div');
let closeBtnPop = document.querySelector('.close-btn');
let heartIcon = document.querySelector('.product-add');
let isFav =false;


document.querySelector("#product-area").addEventListener('click', function(e){
    if(e.target.getAttribute('class') == addBtn.getAttribute('class')){
        addNumToCart()
        cartNav.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'+'view cart'+"(" +cartNum+")";
        popupContainer.style.display = 'block'
    } else if (e.target.getAttribute('class') == 'product-add' && isFav ==false){
        e.target.style.color = 'red'
        console.log(heartIcon)
        isFav = true
    }else if (e.target.getAttribute('class') == 'product-add' && isFav ==true){
        e.target.style.color = 'black'
        isFav = false

    }
})

closeBtnPop.addEventListener('click', function(){
    popupContainer.style.display = 'none'
}) 

function addNumToCart(){
    cartNum += 1
    
}
