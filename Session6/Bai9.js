let arr = [];

while (true) {
    console.log("========== MENU ==========");
    console.log("1. Nhập mảng");
    console.log("2. In mảng");
    console.log("3. In số chẵn và tính tổng");
    console.log("4. Tìm max và min");
    console.log("5. In số nguyên tố và tính tổng");
    console.log("6. Đếm số lần xuất hiện");
    console.log("7. Thêm phần tử vào vị trí");
    console.log("8. Thoát");
    console.log("==========================");

    let choice = +prompt("Nhập lựa chọn:");

    switch (choice) {
        case 1:
            let n = +prompt("Nhập số phần tử:");
            if (n <= 0) break;

            arr = [];
            for (let i = 0; i < n; i++) {
                arr[i] = +prompt("Nhập phần tử " + i);
            }
            break;

        case 2:
            console.log(arr);
            break;

        case 3:
            let sumEven = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    console.log(arr[i]);
                    sumEven += arr[i];
                }
            }
            console.log(sumEven);
            break;

        case 4:
            if (arr.length === 0) break;

            let max = arr[0];
            let min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) max = arr[i];
                if (arr[i] < min) min = arr[i];
            }
            console.log(max);
            console.log(min);
            break;

        case 5:
            let sumPrime = 0;
            for (let i = 0; i < arr.length; i++) {
                let x = arr[i];
                if (x < 2) continue;

                let ok = true;
                for (let j = 2; j <= Math.sqrt(x); j++) {
                    if (x % j === 0) {
                        ok = false;
                        break;
                    }
                }

                if (ok) {
                    console.log(x);
                    sumPrime += x;
                }
            }
            console.log(sumPrime);
            break;

        case 6:
            let k = +prompt("Nhập số cần đếm:");
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === k) count++;
            }
            console.log(count);
            break;

        case 7:
            let value = +prompt("Nhập giá trị:");
            let pos = +prompt("Nhập vị trí:");
            if (pos < 0 || pos > arr.length) break;

            arr.splice(pos, 0, value);
            console.log(arr);
            break;

        case 8:
            break;

        default:
            console.log("Sai lựa chọn");
    }

    if (choice === 8) break;
}
