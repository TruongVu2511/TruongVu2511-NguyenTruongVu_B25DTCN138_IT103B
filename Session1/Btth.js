let nameBook = prompt ("Nhập tên sách :").trim().toUpperCase();
let authorBook = prompt ("Nhập tên tác giả :").toUpperCase();
let yearBook = +prompt ("Nhập năm xuất bản :");
let priceBook = +prompt ("Nhập giá cuốn sách :");
let numberBook = +prompt ("Nhập số lượng sách :");
let idBook = authorBook.slice(0,3) + '-' + yearBook + '-' + Math.floor(Math.random()*1000+1);
let ageBook = 2026 - yearBook;
let totalPrice = priceBook * numberBook;
console.log(`----PHIẾU NHẬP KHO----`);
console.log(`Mã sách : ${idBook}`);
console.log(`Tên sách : ${nameBook}`);
console.log(`Tác giả : ${authorBook}`);
console.log(`Năm xuất bản : ${yearBook}`);
console.log(`Tuổi sách : ${ageBook} năm`);
console.log(`Tổng giá trị: ${totalPrice} VNĐ`);
console.log(`Ngăn kệ gợi ý : ${Math.floor(Math.random()*10+1)}`);

