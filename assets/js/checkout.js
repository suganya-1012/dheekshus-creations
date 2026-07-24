document.addEventListener("DOMContentLoaded", () => {

loadCheckout();

});

function loadCheckout(){

const cart=getCart();

const container=document.getElementById("checkout-items");

const total=document.getElementById("checkout-total");

let grandTotal=0;

container.innerHTML="";

cart.forEach(item=>{

grandTotal+=item.price*item.quantity;

container.innerHTML+=`

<div class="d-flex justify-content-between mb-3">

<div>

<strong>${item.name}</strong>

<br>

Qty : ${item.quantity}

</div>

<div>

₹${item.price*item.quantity}

</div>

</div>

`;

});

total.innerHTML="₹"+grandTotal;

}
document
    .getElementById("paymentBtn")
    .addEventListener("click", validateCheckout);

function validateCheckout() {

    const fullName = document.getElementById("fullName").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
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

    const customer = {

    name: fullName,

    mobile: mobile,

    email: document.getElementById("email").value.trim(),

    address: {

        house,

        street,

        area,

        city,

        state,

        pincode

    }

};

localStorage.setItem(
    "customer",
    JSON.stringify(customer)
);

window.location.href = "confirmation.html";

}
