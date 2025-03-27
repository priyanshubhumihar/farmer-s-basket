var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';

function menutoggle() {
  if (MenuItems.style.maxHeight == '0px') {
    MenuItems.style.maxHeight = '200px';
  } else {
    MenuItems.style.maxHeight = '0px';
  }
}
// Initialize cart
let cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    // Remove or comment out the alert line
    // alert(`${productName} has been added to your cart!`);
    updateCartCount();
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
}

// Function to update cart count in the cart button
function updateCartCount() {
    const cartCount = cart.length;
    const cartButton = document.querySelector('.cart-count');
    if (cartButton) {
        cartButton.textContent = cartCount > 0 ? cartCount : '';
    }
}

// Load cart from local storage on page load
window.onload = function() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartCount();
    }
};