document.addEventListener("DOMContentLoaded", loadCart);

function loadCart() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="alert alert-info">
                Your cart is empty.
            </div>
        `;

        cartTotal.innerText = "0";
        return;
    }

    let html = "";
    let total = 0;

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        html += `
        <div class="card mb-3 shadow-sm">

            <div class="card-body">

                <div class="row align-items-center">

                    <div class="col-md-2">
                        <img src="${item.image}"
                             class="img-fluid rounded"
                             alt="${item.name}">
                    </div>

                    <div class="col-md-4">
                        <h5>${item.name}</h5>
                        <p>${item.category}</p>
                    </div>

                    <div class="col-md-2">
                        Qty : ${item.quantity}
                    </div>

                    <div class="col-md-2">
                        ₹${item.price}
                    </div>

                    <div class="col-md-2 fw-bold">
                        ₹${itemTotal}
                    </div>

                </div>

            </div>

        </div>
        `;

    });

    cartItems.innerHTML = html;
    cartTotal.innerText = total;

}
