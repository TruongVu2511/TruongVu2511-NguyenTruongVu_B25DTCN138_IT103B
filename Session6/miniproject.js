let libraries = ["Toán", "Văn", "Anh"];
let loginCount = 0;

while (loginCount < 3) {
    let username = prompt("Nhập tài khoản:");
    let password = prompt("Nhập mật khẩu:");

    if (username === "admin" && password === "12345") {
        alert("Đăng nhập thành công");
        break;
    } else {
        loginCount++;
        alert("Sai thông tin đăng nhập");
    }
}

if (loginCount === 3) {
    alert("Tài khoản đã bị khóa");
} else {
    let choice;

    do {
        choice = +prompt(
`=== QUẢN LÝ THƯ VIỆN ===
1. Nhập thêm lô sách
2. Hiển thị danh sách sách
3. Tìm kiếm sách
4. Cập nhật tên sách
5. Đảo ngược kệ sách
6. Nhập kho từ nguồn khác
7. Thoát
Chọn chức năng (1-7):`
        );

        switch (choice) {
            case 1:
                let input = prompt("Nhập tên sách, cách nhau bằng dấu phẩy:");
                let newBooks = input.split(",");
                for (let book of newBooks) {
                    libraries.push(book.trim());
                }
                alert("Đã thêm " + newBooks.length + " sách");
                break;

            case 2:
                for (let i = 0; i < libraries.length; i++) {
                    console.log((i + 1) + ". " + libraries[i]);
                }
                break;

            case 3:
                let findBook = prompt("Nhập tên sách cần tìm:");
                let position = libraries.indexOf(findBook);
                if (position !== -1) {
                    alert("Tìm thấy tại vị trí " + (position + 1));
                } else {
                    alert("Không tìm thấy");
                }
                break;

            case 4:
                let oldName = prompt("Nhập tên sách cũ:");
                let index = libraries.indexOf(oldName);
                if (index !== -1) {
                    let newName = prompt("Nhập tên sách mới:");
                    libraries[index] = newName;
                    alert("Cập nhật thành công");
                } else {
                    alert("Sách không tồn tại");
                }
                break;

            case 5:
                libraries.reverse();
                for (let i in libraries) {
                    console.log((+i + 1) + ". " + libraries[i]);
                }
                break;

            case 6:
                let otherBooks = ["Sinh", "Sử"];
                libraries = libraries.concat(otherBooks);
                alert("Đã gộp kho sách thành công");
                break;

            case 7:
                alert("Hẹn gặp lại!");
                break;

            default:
                alert("Lựa chọn không hợp lệ");
        }

    } while (choice !== 7);
}
