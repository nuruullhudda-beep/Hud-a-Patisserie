let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

let totalHarga = 0;

function tampilkanKeranjang() {
    cartItems.innerHTML = "";
    totalHarga = 0;

    cart.forEach(function(product, index) {

        let hargaAngka = parseFloat(product.price.toString().replace(".", "")) || 0;
        let qty = product.qty || 1;

        totalHarga += hargaAngka * qty;

        cartItems.innerHTML += `
        <div class="cart-item">
            <img src="${product.image}" alt="${product.name}">

            <div class="item-info">
                <h3>${product.name}</h3>
                <p>Rp${(hargaAngka * qty).toLocaleString("id-ID")}</p>

                <div class="qty-box">
                    <button onclick="kurangJumlah(${index})">−</button>
                    <span>${qty}</span>
                    <button onclick="tambahJumlah(${index})">+</button>
                </div>
            </div>

            <button class="remove-btn" onclick="hapusProduk(${index})">
                Remove
            </button>
        </div>
        `;
    });

    total.innerHTML = "Rp" + totalHarga.toLocaleString("id-ID");
}

function tambahJumlah(index) {
    cart[index].qty = (cart[index].qty || 1) + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    tampilkanKeranjang();
}

function kurangJumlah(index) {
    if ((cart[index].qty || 1) > 1) {
        cart[index].qty--;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    tampilkanKeranjang();
}

function hapusProduk(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    tampilkanKeranjang();
}

tampilkanKeranjang();

document.getElementById("checkout").addEventListener("click", function () {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    window.location.href = "checkout.html";

});