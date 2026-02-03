let booksId = [];
let booksName = [];
let bookStatus = [];

let n = +prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?");

for (let i = 0; i < n; i++) {
    let id = "";
    while (id === "") {
        id = prompt(`Nhập mã sách ${i + 1}:`);
    }

    let name = "";
    while (name === "") {
        name = prompt(`Nhập tên sách ${i + 1}:`);
    }

    let statusChoice;
    while (statusChoice !== 1 && statusChoice !== 2 && statusChoice !== 3) {
        statusChoice = +prompt(
            "Nhập tình trạng:\n1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp"
        );
    }

    let status = "";
    if (statusChoice === 1) status = "Hỏng nhẹ";
    if (statusChoice === 2) status = "Hỏng nặng";
    if (statusChoice === 3) status = "Cần sửa gấp";

    booksId.push(id);
    booksName.push(name);
    bookStatus.push(status);
}

console.log(`Danh sách hiện tại (${booksId.length} cuốn):`);
for (let i = 0; i < booksId.length; i++) {
    console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`);
}

while (true) {
    let choice = +prompt(
        "Chọn chức năng:\n1. Sửa tình trạng sách\n2. Loại bỏ sách\n0. Kết thúc"
    );

    if (choice === 0) break;

    if (choice === 1) {
        let findId = prompt("Nhập mã sách cần sửa:");
        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === findId) {
                let newStatus;
                while (newStatus < 1 || newStatus > 5) {
                    newStatus = +prompt(
                        "Chọn tình trạng mới:\n1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp\n4. Đã sửa xong\n5. Loại bỏ"
                    );
                }

                if (newStatus === 1) bookStatus[i] = "Hỏng nhẹ";
                if (newStatus === 2) bookStatus[i] = "Hỏng nặng";
                if (newStatus === 3) bookStatus[i] = "Cần sửa gấp";
                if (newStatus === 4) bookStatus[i] = "Đã sửa xong";
                if (newStatus === 5) bookStatus[i] = "Loại bỏ";
            }
        }
    }

    if (choice === 2) {
        let deleteId = prompt("Nhập mã sách cần xóa:");
        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === deleteId) {
                booksId.splice(i, 1);
                booksName.splice(i, 1);
                bookStatus.splice(i, 1);
                break;
            }
        }
    }

    console.log("Danh sách hiện tại:");
    for (let i = 0; i < booksId.length; i++) {
        console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`);
    }
}

let fixedCount = 0;
let removedCount = 0;

for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] === "Đã sửa xong") fixedCount++;
    if (bookStatus[i] === "Loại bỏ") removedCount++;
}

console.log("BÁO CÁO CUỐI:");
console.log(`Tổng số sách còn lại: ${booksId.length}`);
console.log(`Số sách đã sửa xong: ${fixedCount}`);
console.log(`Số sách bị loại bỏ: ${removedCount}`);

if (booksId.length > 0) {
    console.log("Danh sách sách còn lại:");
    for (let i = 0; i < booksId.length; i++) {
        console.log(`${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`);
    }
}
