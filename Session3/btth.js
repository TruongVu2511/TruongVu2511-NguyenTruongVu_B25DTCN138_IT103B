let failCount = 0;
let isLogin = false;

while (failCount < 3) {
    let password = prompt("Nhập mật khẩu:");

    if (password === "admin123") {
        alert("Đăng nhập thành công");
        isLogin = true;
        break;
    } else {
        failCount++;
        alert(`Sai mật khẩu! Bạn còn ${3 - failCount} lần thử`);
    }
}

if (!isLogin) {
    alert("Hệ thống bị khóa");
} else {
    while (true) {
        let choice = prompt(
            "===== MENU =====\n" +
            "1. Nhập lô sách mới\n" +
            "2. Vẽ sơ đồ kệ sách\n" +
            "3. Thoát\n" +
            "Nhập lựa chọn:"
        );

        if (choice === "1") {
            let quantity = parseInt(prompt("Bạn muốn nhập bao nhiêu cuốn sách?"));
            let totalPrice = 0;

            for (let i = 1; i <= quantity; i++) {
                let price = parseFloat(prompt(`Nhập giá tiền cuốn sách thứ ${i}:`));

                if (price <= 0 || isNaN(price)) {
                    alert("Giá không hợp lệ");
                    continue;
                }

                totalPrice += price;
            }

            alert("Tổng giá trị nhập kho đợt này là: " + totalPrice);

        } else if (choice === "2") {
            for (let area = 1; area <= 3; area++) {
                for (let shelf = 1; shelf <= 5; shelf++) {
                    if (area === 2 && shelf === 3) {
                        console.log("Khu vực 2 - Kệ 3 (Đang sửa chữa)");
                        continue;
                    }
                    console.log(`Khu vực ${area} - Kệ ${shelf}`);
                }
            }

        } else if (choice === "3") {
            alert("Hẹn gặp lại!");
            break;

        } else {
            alert("Lựa chọn không hợp lệ");
        }
    }
}
