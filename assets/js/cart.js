/*
=========================================
Dheekshu's Creations
Shopping Cart
=========================================
*/

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

document.addEventListener("DOMContentLoaded", () => {

    updateCart();

});

function updateCart() {

    const cart = getCart();

    const container = document.getElementById("cart-items");

    const totalElement = document.getElementById("cart-total");

    if (!container) return;

    container.innerHTML = "";

    let grandTotal = 0;

    if (cart.length === 0) {

        container.innerHTML = "<h4>Your cart is empty.</h4>";

        totalElement.innerHTML = "₹0";

        updateCartCount();

        return;

    }

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;

        grandTotal += itemTotal;

        container.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" class="cart-image">

            <div class="cart-details">

                <h4>${item.name}</h4>

                <p>${item.category}</p>

            </div>

            <div class="cart-qty">

                <button onclick="decreaseQty(${item.id})">−</button>

                <span>${item.quantity}</span>

                <button onclick="increaseQty(${item.id})">+</button>

            </div>

            <div class="cart-price">
                ₹${item.price}
            </div>

            <div class="cart-total">
                ₹${itemTotal}
            </div>

            <button
                class="btn btn-danger"
                onclick="removeItem(${item.id})">

                Remove

            </button>

        </div>

        `;

    });

    totalElement.innerHTML = "₹" + grandTotal;

    updateCartCount();

}

function increaseQty(id) {

    const cart = getCart();

    const item = cart.find(p => p.id === id);

    item.quantity++;

    saveCart(cart);

    updateCart();

}

function decreaseQty(id) {

    const cart = getCart();

    const item = cart.find(p => p.id === id);

    if (item.quantity > 1) {

        item.quantity--;

    } else {

        const index = cart.findIndex(p => p.id === id);

        cart.splice(index, 1);

    }

    saveCart(cart);

    updateCart();

}

function removeItem(id) {

    let cart = getCart();

    cart = cart.filter(item => item.id !== id);

    saveCart(cart);

    updateCart();

}
