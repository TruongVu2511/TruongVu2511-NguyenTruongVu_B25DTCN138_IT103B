let myArray = [];
let total = 0;
let characterBook = 0;
let nameBook;
let lateReturn = +prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn ? ( số nguyên dương)");
for(let i = 1; i <= lateReturn; i++){
    let nameBook = prompt(`Nhập tên cuốn sách thứ ${i} :`);
    myArray.push(nameBook);
    total++;
if(nameBook.length > 20){
    characterBook++;
}
}
console.log(`Tổng số sách bị trả muộn : ${total}`);
console.log(`Danh sách sách bị trả muộn :`);
for(let i = 0; i < myArray.length; i++){
    console.log(`${i+1}-${myArray[i]}`);
}
console.log(`Số sách có tên dài hơn 20 ký tự : ${characterBook}`);