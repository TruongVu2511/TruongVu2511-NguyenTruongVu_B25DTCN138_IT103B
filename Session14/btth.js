const products = [
    { id: 1, name: "Bánh Chưng", price: 150000, img: "" },
    { id: 2, name: "Giò Lụa", price: 180000, img: "" },
    { id: 3, name: "Cành Đào", price: 500000, img: "" },
    { id: 4, name: "Mứt Tết", price: 120000, img: "" },
    { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "" },
    { id: 6, name: "Dưa Hấu", price: 60000, img: "" }
];
let cart = [];
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
function renderProducts() {
    let str = "";
    products.forEach((product, index) => {
        str += `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p class="price">${formatter.format(product.price)}</p>
            <button class="btn-add" onclick="addToCart(${index})">Mua ngay</button>
        </div>`;
    });
    document.getElementById("product-list").innerHTML = str;
}
function renderCart() {
    const cartListElement = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");
    if(cart.length === 0) {
        cartListElement.innerHTML = `<li class="empty-msg">Chưa có món nào...</li>`;
        totalPriceElement.innerText = "0đ";
        return;
    }
    let str = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        str += `
        <li>
            <span class="cart-item-name">${item.name}</span>
            <span>SL: ${item.quantity}</span>
            <div>
                <span class="cart-item-price">${formatter.format(item.price * item.quantity)}</span>
                <button class="btn-remove" onclick="removeFromCart(${index})">X</button>
            </div>
        </li>`;
    });
    cartListElement.innerHTML = str;
    totalPriceElement.innerText = formatter.format(total);
}
function addToCart(index) {
    const productSelected = products[index];
    const existingItem = cart.find(item => item.id === productSelected.id);
    if(existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...productSelected, quantity: 1 });
    }
    renderCart();
}
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}
renderProducts();
renderCart();