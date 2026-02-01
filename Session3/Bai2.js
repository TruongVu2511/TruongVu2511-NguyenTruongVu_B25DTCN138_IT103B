let returnBook = +prompt("Hôm nay có bao nhiêu lượt trả sách? (số nguyên dương)");
let returnLate = 0;

for (let i = 1; i <= returnBook; i++) {
    let nameReturn = prompt("Nhập tên người trả sách:");
    let nameBook = prompt("Nhập tên sách:");
    let realDay;
    do {
        realDay = +prompt("Nhập số ngày đã mượn thực tế (>= 1 ngày):");
        if (realDay < 1) {
            alert("Số ngày mượn không hợp lệ. Vui lòng nhập lại!");
        }
    } while (realDay < 1);

    if (realDay <= 14) {
        console.log("Trả đúng hạn");
    } else if (realDay <= 21) {
        console.log("Trả muộn nhẹ - Phạt nhắc nhở");
        returnLate++;
    } else {
        console.log("Quá hạn nghiêm trọng - Cần ghi biên bản phạt");
        returnLate++;
    }
}

console.log(`Tổng số lượt trả sách: ${returnBook}`);
console.log(`Số lượt trả muộn (>= 15 ngày): ${returnLate}`);
