let n = +prompt("Nhập số phần tử của mảng:");
let arr = [];
let result = "";

if (n <= 0) {
    console.log("Không có ký tự số");
} else {
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("Nhập ký tự thứ " + i + ":");
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= '0' && arr[i] <= '9') {
            result = result + arr[i] + " ";
        }
    }

    if (result === "") {
        console.log("Không có ký tự số");
    } else {
        console.log(result);
    }
}
