const customer = JSON.parse(localStorage.getItem("customer"));

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("confirmation-details");

if (customer) {

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

    });

    const orderId = "DHK" + Math.floor(100000 + Math.random() * 900000);

    container.innerHTML = `

    // Clear cart after successful order
       localStorage.removeItem("cart");
        <div class="card p-5 shadow">

            <h2 class="text-success">
                Thank You!
            </h2>

            <hr>

            <p><strong>Order ID:</strong> ${orderId}</p>

            <p><strong>Name:</strong> ${customer.name}</p>

            <p><strong>Mobile:</strong> ${customer.mobile}</p>

            <p>

                <strong>Delivery Address:</strong><br>

                ${customer.address.house},
                ${customer.address.street},
                ${customer.address.area},
                ${customer.address.city},
                ${customer.address.state} -
                ${customer.address.pincode}

            </p>

            <h3>Total : ₹${total}</h3>

            <p>
                Expected Delivery:
                3–5 Working Days
            </p>

            <a
                href="index.html"
                class="btn btn-shop">

                Continue Shopping

            </a>

        </div>

    `;

}
