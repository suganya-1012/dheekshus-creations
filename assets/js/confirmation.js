document.addEventListener("DOMContentLoaded", () => {

    const order = JSON.parse(localStorage.getItem("order"));

    const orderDetails = document.getElementById("order-details");

    if (!order) {

        orderDetails.innerHTML = `

            <div class="text-center py-5">

                <h3>No order found.</h3>

                <a href="index.html" class="btn btn-shop mt-3">
                    Continue Shopping
                </a>

            </div>

        `;

        return;
    }

    orderDetails.innerHTML = `

        <div class="text-center">

            <h2 class="text-success mb-4">
                Thank You!
            </h2>

            <hr>

            <p>
                <strong>Order ID:</strong>
                ${order.orderId}
            </p>

            <p>
                <strong>Name:</strong>
                ${order.customer.name}
            </p>

            <p>
                <strong>Mobile:</strong>
                ${order.customer.mobile}
            </p>

            ${
                order.customer.email
                ? `<p><strong>Email:</strong> ${order.customer.email}</p>`
                : ""
            }

            <p>

                <strong>Delivery Address:</strong><br>

                ${order.customer.house},
                ${order.customer.street},
                ${order.customer.area},
                ${order.customer.city},
                ${order.customer.state} -
                ${order.customer.pincode}

            </p>

            <hr>

            <h2>
                Total : ₹${order.total}
            </h2>

            <p class="mt-3">
                Expected Delivery: 3–5 Working Days
            </p>

            <button
                id="continueShopping"
                class="btn btn-shop w-100 mt-4">

                Continue Shopping

            </button>

        </div>

    `;

    document
        .getElementById("continueShopping")
        .addEventListener("click", function () {

            localStorage.removeItem("cart");
            localStorage.removeItem("order");

            window.location.href = "index.html";

        });

});
