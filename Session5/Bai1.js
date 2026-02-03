let myArray = [];
let total = 0;
let returnBook = +prompt("Bạn muốn trả bao nhiêu cuốn sách ? (số nguyên dương )");
for(let i = 1; i <= returnBook; i++ ){
    let nameBook = prompt(`Nhập tên cuốn sách thứ ${i} :`);
    myArray.push(nameBook);
    total++;
}
console.log(`Tổng số sách đã trả là : ${total}`);
console.log(`Danh sách sách đã trả :`);
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
