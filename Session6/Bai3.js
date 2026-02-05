let n = +prompt("Nhập số phần tử của mảng:");
let arr = [];
let count = 0;

if (n < 0) {
    console.log("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("Nhập phần tử thứ " + i + ":");
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 && arr[i] % 1 === 0) {
            count++;
        }
    }

    console.log(count);
}
