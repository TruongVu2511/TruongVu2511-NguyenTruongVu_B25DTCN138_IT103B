let arr = [];
while (true) {
    let choice = prompt(
        "=========== MENU ===========\n" +
        "1. Nhập số phần tử và giá trị các phần tử\n" +
        "2. In ra các phần tử đang quản lý\n" +
        "3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần\n" +
        "4. In ra giá trị lớn nhất, nhỏ nhất và vị trí\n" +
        "5. In ra các số nguyên tố và tính tổng\n" +
        "6. Nhập một số và đếm số lần xuất hiện\n" +
        "7. Thêm một phần tử vào vị trí chỉ định\n" +
        "8. Xóa một phần tử theo giá trị\n" +
        "9. Sắp xếp mảng tăng dần hoặc giảm dần\n" +
        "0. Thoát\n" +
        "Lựa chọn của bạn:"
    );
    switch (choice) {
        case "1":
            arr = [];
            let n = +prompt("Nhập số phần tử:");
            if (n > 0) {
                for (let i = 0; i < n; i++) {
                    let x = +prompt("Nhập phần tử thứ " + i + ":");
                    arr.push(x);
                }
            } else {
                alert("Số phần tử không hợp lệ");
            }
            break;
        case "2":
            if (arr.length === 0) {
                alert("Mảng rỗng");
            } else {
                alert(arr.join(" "));
            }
            break;
        case "3":
            let even = [];
            let sumEven = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    even.push(arr[i]);
                    sumEven += arr[i];
                }
            }
            even.sort((a, b) => b - a);
            alert("Số chẵn: " + even.join(" ") + "\nTổng: " + sumEven);
            break;
        case "4":
            if (arr.length === 0) {
                alert("Mảng rỗng");
            } else {
                let max = arr[0];
                let min = arr[0];
                let maxPos = 0;
                let minPos = 0;

                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                        maxPos = i;
                    }
                    if (arr[i] < min) {
                        min = arr[i];
                        minPos = i;
                    }
                }

                alert(
                    "Max: " + max + " vị trí " + maxPos +
                    "\nMin: " + min + " vị trí " + minPos
                );
            }
            break;

        case "5":
            let primes = [];
            let sumPrime = 0;

            for (let i = 0; i < arr.length; i++) {
                let x = arr[i];
                if (x > 1) {
                    let ok = true;
                    for (let j = 2; j <= Math.sqrt(x); j++) {
                        if (x % j === 0) {
                            ok = false;
                            break;
                        }
                    }
                    if (ok) {
                        primes.push(x);
                        sumPrime += x;
                    }
                }
            }

            alert("Số nguyên tố: " + primes.join(" ") + "\nTổng: " + sumPrime);
            break;

        case "6":
            let num = +prompt("Nhập số cần đếm:");
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === num) {
                    count++;
                }
            }
            alert("Số lần xuất hiện: " + count);
            break;

        case "7":
            let pos = +prompt("Nhập vị trí cần thêm:");
            let valueAdd = +prompt("Nhập giá trị:");
            if (pos >= 0 && pos <= arr.length) {
                arr.splice(pos, 0, valueAdd);
            } else {
                alert("Vị trí không hợp lệ");
            }
            break;

        case "8":
            let valueDelete = +prompt("Nhập giá trị cần xóa:");
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === valueDelete) {
                    arr.splice(i, 1);
                    break;
                }
            }
            break;

        case "9":
            let type = prompt("1. Tăng dần\n2. Giảm dần");
            switch (type) {
                case "1":
                    arr.sort((a, b) => a - b);
                    break;
                case "2":
                    arr.sort((a, b) => b - a);
                    break;
            }
            break;

        case "0":
            alert("Thoát chương trình");
            break;

        default:
            alert("Lựa chọn không hợp lệ");
    }

    if (choice === "0") {
        break;
    }
}
