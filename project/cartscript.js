window.onload = function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    const storedCart = localStorage.getItem('cart');
    let totalPrice = 0;

    if (storedCart) {
        const cart = JSON.parse(storedCart);
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `<p>${item.name} - ₹${item.price}</p>`;
            cartItemsContainer.appendChild(itemDiv);
            totalPrice += item.price;
        });
        totalPriceContainer.innerHTML = `<h3>Total Price: ₹${totalPrice}</h3>`;
    } else {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
};

// Checkout button functionality (you can implement this as needed)
document.getElementById('checkout-button').onclick = function() {
    alert('Proceeding to checkout...');
    // Implement checkout logic here
};
