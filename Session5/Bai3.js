let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let typeBook = +prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay? (số nguyên dương)");
let total = 0;
let lowStock = 0;
let outOfStockCount = 0;

for (let i = 1; i <= typeBook; i++) {
    let idBook;
    do {
        idBook = prompt(`Nhập mã sách ${i}:`);
        if (idBook === "") {
            alert("Mã sách không được để trống. Vui lòng nhập lại.");
        }
    } while (idBook === "");

    let nameBook;
    do {
        nameBook = prompt(`Nhập tên sách ${i}:`);
        if (nameBook === "") {
            alert("Tên sách không được để trống. Vui lòng nhập lại.");
        }
    } while (nameBook === "");

    let quantityInven;
    do {
        quantityInven = +prompt("Nhập số lượng tồn kho hiện tại (số nguyên >= 0):");
        if (quantityInven < 0) {
            alert("Không hợp lệ. Vui lòng nhập lại.");
        }
    } while (quantityInven < 0);

    booksId.push(idBook);
    booksName.push(nameBook);
    inventoryQuantity.push(quantityInven);
}

total = booksId.length;
console.log(`Tổng số loại sách: ${total}`);
console.log("Danh sách sách:");

for (let i = 0; i < total; i++) {
    console.log(`${i + 1}. Mã: ${booksId[i]} - Tên: ${booksName[i]} - Còn: ${inventoryQuantity[i]} bản`);

    if (inventoryQuantity[i] <= 5) {
        lowStock++;
    }

    if (inventoryQuantity[i] === 0) {
        outOfStockCount++;
    }
}

console.log(`Số lượng sách tồn kho <= 5: ${lowStock}`);

if (outOfStockCount === 0) {
    console.log("Không có sách nào hết hàng.");
} else {
    console.log("Danh sách sách hết hàng:");
    for (let i = 0; i < total; i++) {
        if (inventoryQuantity[i] === 0) {
            console.log(`- ${booksId[i]} (${booksName[i]})`);
        }
    }
}
