
/*
=========================================
Dheekshu's Creations
Main JavaScript
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
});

// Load products from JSON file
async function loadProducts() {

    try {

        const response = await fetch("data/products.json");

        const products = await response.json();

        displayProducts(products);

    } catch (error) {

        console.error("Unable to load products.", error);

    }

}

// Display product cards
function displayProducts(products) {

    const container = document.getElementById("products-container");

    if (!container) return;

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `

        <div class="col-lg-4 col-md-6 mb-4">

            <div class="product-card">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image">

                <div class="product-body">

                    <h5 class="product-title">
                        ${product.name}
                    </h5>

                    <p>
                        ${product.category}
                    </p>

                    <div class="product-price">
                        ₹${product.price}
                    </div>

                    <button
                        class="btn-add-cart"
                        onclick="addToCart('${product.name}')">

                        Add to Cart

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

// -------------------------
// Shopping Cart
// -------------------------

function addToCart(productName) {

    fetch("data/products.json")
        .then(response => response.json())
        .then(products => {

            const product = products.find(p => p.name === productName);

            if (!product) return;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existing = cart.find(item => item.id === product.id);

            if (existing) {

                existing.quantity++;

            } else {

                cart.push({
                    ...product,
                    quantity: 1
                });

            }

            localStorage.setItem("cart", JSON.stringify(cart));

            updateCartCount();

            alert(product.name + " added to cart.");

        });

}

function updateCartCount() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {

        cartCount.innerText = totalItems;

    }

}

document.addEventListener("DOMContentLoaded", () => {

    updateCartCount();

});
