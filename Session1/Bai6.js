let nameBook = prompt ("Nhập tên cuốn sách :").trim().toUpperCase();
let numericalOrder = +prompt ("Nhập số thứ tự sách trong thư viện :");
let idBook = `LIB-${nameBook}-${numericalOrder}`;
console.log(`Tên sách gốc là: ${nameBook}`);
console.log(`Mã sách sau chuẩn hóa là : ${idBook}`);
