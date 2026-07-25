document.addEventListener("DOMContentLoaded", () => {
    loadCheckout();

    document
        .getElementById("paymentBtn")
        .addEventListener("click", validateCheckout);
});

function loadCheckout() {

    const cart = getCart();

    const container = document.getElementById("checkout-items");
    const total = document.getElementById("checkout-total");

    let grandTotal = 0;

    container.innerHTML = "";

    cart.forEach(item => {

        grandTotal += item.price * item.quantity;

        container.innerHTML += `

            <div class="d-flex justify-content-between mb-3">

                <div>
                    <strong>${item.name}</strong><br>
                    Qty : ${item.quantity}
                </div>

                <div>
                    ₹${item.price * item.quantity}
                </div>

            </div>

        `;

    });

    total.innerHTML = "₹" + grandTotal;
}

function validateCheckout() {

    const fullName = document.getElementById("fullName").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();

    const house = document.getElementById("house").value.trim();
    const street = document.getElementById("street").value.trim();
    const area = document.getElementById("area").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const pincode = document.getElementById("pincode").value.trim();

    if (
        fullName === "" ||
        mobile === "" ||
        house === "" ||
        street === "" ||
        area === "" ||
        city === "" ||
        state === "" ||
        pincode === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Enter a valid 10-digit mobile number.");
        return;
    }

    if (!/^[0-9]{6}$/.test(pincode)) {
        alert("Enter a valid 6-digit pincode.");
        return;
    }

    const cart = getCart();

    let grandTotal = 0;

    cart.forEach(item => {
        grandTotal += item.price * item.quantity;
    });

    const order = {

        orderId: "DHK" + Math.floor(Math.random() * 900000 + 100000),

        customer: {

            name: fullName,
            mobile: mobile,
            email: email,

            house: house,
            street: street,
            area: area,
            city: city,
            state: state,
            pincode: pincode

        },

        items: cart,

        total: grandTotal

    };

    localStorage.setItem("order", JSON.stringify(order));

    window.location.href = "confirmation.html";

}
