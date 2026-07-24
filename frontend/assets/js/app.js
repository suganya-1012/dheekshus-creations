/*
=========================================
Dheekshu's Creations
Main JavaScript File
=========================================
*/

// Shopping cart count
let cartCount = 0;

// Featured products (temporary data)
// Later this will come from products.json
const featuredProducts = [
    {
        id: 1,
        name: "Foam Jasmine Garland",
        price: 399,
        image: "assets/images/placeholders/product-placeholder.png",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Foam Mullai Flowers",
        price: 299,
        image: "assets/images/placeholders/product-placeholder.png",
        badge: "New"
    },
    {
        id: 3,
        name: "Hair Accessories",
        price: 199,
        image: "assets/images/placeholders/product-placeholder.png",
        badge: "Trending"
    },
    {
        id: 4,
        name: "Designer Bangles",
        price: 499,
        image: "assets/images/placeholders/product-placeholder.png",
        badge: "Popular"
    }
];

// Load products when page opens
document.addEventListener("DOMContentLoaded", () => {
    loadFeaturedProducts();
    updateCartCount();
});

// Display featured products
function loadFeaturedProducts() {

    const container = document.getElementById("featured-products");

    if (!container) return;

    container.innerHTML = "";

    featuredProducts.forEach(product => {

        container.innerHTML += `

        <div class="col-lg-3 col-md-6 mb-4">

            <div class="product-card">

                <img src="${product.image}"
                     class="product-image"
                     alt="${product.name}">

                <div class="product-body">

                    <span class="badge bg-warning text-dark mb-2">
                        ${product.badge}
                    </span>

                    <h5 class="product-title">
                        ${product.name}
                    </h5>

                    <div class="product-price">
                        ₹${product.price}
                    </div>

                    <button
                        class="btn-add-cart"
                        onclick="addToCart(${product.id})">

                        Add to Cart

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

// Add item to cart
function addToCart(id) {

    cartCount++;

    updateCartCount();

    alert("Product added to cart!");

}

// Update cart count
function updateCartCount() {

    const cart = document.getElementById("cart-count");

    if(cart){

        cart.innerText = cartCount;

    }

}
