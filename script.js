function showDetail(name, deskripsi, ukuran, ketahanan, pengiriman,image) {
    document.getElementById("popupTitle").innerHTML = name;
    document.getElementById("popupDescription").innerHTML = deskripsi;
    document.getElementById("popupInfo").innerHTML = ukuran;
    document.getElementById("popupKetahanan").innerHTML = ketahanan;
    document.getElementById("popupPengiriman").innerHTML = pengiriman;
    document.getElementById("popupImage").src = image;
    document.getElementById("detailPopup").style.display = "flex";
}
function closeDetail() {
    document.getElementById("detailPopup").style.display = "none";
}
window.onclick = function(event) {
    let popup = document.getElementById("detailPopup");

    if (event.target == popup) {
        popup.style.display = "none";
    }
}
const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function() {
    let keyword = search.value.toLowerCase();
    cards.forEach(function(card) {
        let namaProduk = card.querySelector("h3").textContent.toLowerCase();
        if (namaProduk.includes(keyword)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});
const filterButtons = document.querySelectorAll(".filter button");
filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let filter = button.dataset.filter;
        cards.forEach(function(card) {
            if (filter === "All" || card.dataset.category === filter) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});
localStorage.removeItem("cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cart-count");
function updateCartCount() {
    if (cartCount) {
        cartCount.textContent = cart.length;
        if (cart.length === 0) {
            cartCount.style.display = "none";
        } else {
            cartCount.style.display = "flex";
        }
    }
}
updateCartCount();
function tambahKeKeranjang(tombol) {
    const product = {
        id: tombol.getAttribute('data-id'),
        name: tombol.getAttribute('data-name'),
        price: tombol.getAttribute('data-price'),
        category: 
    tombol.getAttribute('data-category'),
        image: tombol.getAttribute('data-image'),
        qty: 1
    };
    console.log(product);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(product.name + " has been added to your cart!");
}
function buyNow(tombol) {
    const product = {
        id: tombol.getAttribute('data-id'),
        name: tombol.getAttribute('data-name'),
        price: tombol.getAttribute('data-price'),
        category: tombol.getAttribute('data-category'),
        image: tombol.getAttribute('data-image'),
        qty: 1
    };

    localStorage.setItem("cart", JSON.stringify([product]));

    window.location.href = "checkout.html";
}