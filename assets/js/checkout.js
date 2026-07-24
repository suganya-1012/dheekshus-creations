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
