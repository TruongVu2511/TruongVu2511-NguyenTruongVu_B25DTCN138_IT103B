let n = +prompt("Nhập số phần tử của mảng:");
let arr = [];
let sum = 0;
let countNumber = 0;

if (n < 0) {
    console.log("Số lượng phần tử không được âm");
} 
else if (n === 0) {
    console.log("Mảng không có phần tử");
} 
else {
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("Nhập ký tự thứ " + i + ":");
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= '0' && arr[i] <= '9') {
            sum = sum + (+arr[i]);
            countNumber++;
        }
    }

    if (countNumber === 0) {
        console.log("Không có phần tử nào là số");
    } else {
        console.log(sum);
    }
}
