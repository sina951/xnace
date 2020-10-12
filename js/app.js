// Show cart
// target the button #cart-info and then the cart, which also attach a eventlistener to, which och click toggles show-cart(this is a css element!)
(function(){
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');

  cartInfo.addEventListener('click', function(){
    // toggles showcart on and off
    cart.classList.toggle("show-cart");
  })
})();
