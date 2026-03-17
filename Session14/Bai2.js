      
const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
const productForm = document.getElementById("product-form");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productList = document.getElementById("product-list");
productForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = productNameInput.value.trim();
    let price = productPriceInput.value;
    if(name === "" || price === "") {
        alert("Vui lòng nhập đầy đủ tên và giá sản phẩm!");
        return;
    }
    let newProduct = {
        id: Date.now(),
        name: name,
        price: Number(price),
    };
    let li = document.createElement("li");
    li.classList.add("product-item");
    li.innerHTML = `
        <h3>${newProduct.name}</h3> 
        <p>Giá: ${newProduct.price} VND</p>
    `;
    productList.appendChild(li);
    productNameInput.value = "";
    productPriceInput.value = "";
});