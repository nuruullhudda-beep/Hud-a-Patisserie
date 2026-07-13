let cart = JSON.parse(localStorage.getItem("cart")) || [];

const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");

let totalHarga = 0;

function tampilkanCheckout() {

    checkoutItems.innerHTML = "";
    totalHarga = 0;

    cart.forEach(function(product) {

        let hargaAngka = parseFloat(product.price.toString().replace(".", "")) || 0;
        let qty = product.qty || 1;
        totalHarga += hargaAngka * qty

        checkoutItems.innerHTML += `
            <div class="checkout-item">
                <h3>${product.name} x${qty}</h3>
                <p>Rp${(hargaAngka * qty).toLocaleString("id-ID")}</p>
            </div>
        `;

    });

    checkoutTotal.innerHTML = "Total: Rp" + totalHarga.toLocaleString("id-ID");
}


document.getElementById("order-button").addEventListener("click", function () {

    let nama = document.getElementById("nama").value;
    let phone = document.getElementById("phone").value;
    let alamat = document.getElementById("alamat").value;
    let payment = document.getElementById("payment").value;


    if (nama === "" || phone === "" || alamat === "" || !payment) {
        alert("Please complete your order information!");
        return;
    }


    document.getElementById("success-popup").style.display = "flex";

});


function kembaliHome() {
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}


const paymentSelect = document.getElementById("payment");
const paymentInfo = document.getElementById("payment-info");


paymentSelect.addEventListener("change", function () {
    paymentInfo.style.setProperty('display', 'block', 'important');

    if (this.value === "QRIS") {
        paymentInfo.innerHTML = `
            <h3>QRIS Payment</h3>
            <img src="image/QRIS Dana.jpeg" width="180">
            <p>Scan the QR Code above to complete payment.</p>
        `;

    } else if (this.value === "BNI") {
        paymentInfo.innerHTML = `
            <h3>BNI Virtual Account</h3>
            <p><b>1234567890</b></p>
        `;

    } else if (this.value === "BCA") {
        paymentInfo.innerHTML = `
            <h3>BCA Virtual Account</h3>
            <p><b>9876543210</b></p>
        `;

    } else if (this.value === "Cash on Delivery") {
        paymentInfo.innerHTML = `
            <h3>Cash on Delivery</h3>
            <p>Payment will be made to the courier upon delivery.</p>
        `;

    } else {
        paymentInfo.innerHTML = "";
        paymentInfo.style.setProperty('display', 'none', 'important');
    }

});


tampilkanCheckout();
function testCheckout(){
    alert("Tombol berhasil diklik!");
}