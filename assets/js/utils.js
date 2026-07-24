/*
=========================================
Dheekshu's Creations
Utility Functions
=========================================
*/

// Read cart from browser
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Update cart badge
function updateCartCount() {

    const cart = getCart();

    let total = 0;

    cart.forEach(item => {
        total += item.quantity;
    });

    const badge = document.getElementById("cart-count");

    if (badge) {
        badge.innerText = total;
    }
}
