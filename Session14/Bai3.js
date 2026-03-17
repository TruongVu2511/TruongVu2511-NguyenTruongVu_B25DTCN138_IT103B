const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
const productList = document.getElementById("product-list");
function createProductItem(name, price) {
    let li = document.createElement("li");
    li.classList.add("product-item");
    li.innerHTML = `
        <h3>${name}</h3> 
        <p>Giá: ${Number(price)} VND</p>
    `;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Xóa";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function() {
        let isConfirmed = window.confirm("Bạn có chắc muốn xóa sản phẩm này?");
        if(isConfirmed) {
            li.remove();
        }
    });
    li.appendChild(deleteBtn);
    return li;
}
products.forEach(product => {
    let item = createProductItem(product.name, product.price);
    productList.appendChild(item);
});

    