
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

    const container = document.getElementById("featured-products");

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

// Temporary cart
let cartCount = 0;

function addToCart(productName) {

    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    alert(productName + " added to cart.");

}
