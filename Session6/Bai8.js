let n = +prompt("Nhập số phần tử n:");

if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} 
else if (n === 0) {
    console.log("Không phải dãy số fibonacci");
} 
else {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("Nhập phần tử thứ " + i);
    }

    if (n >= 3) {
        for (let i = 2; i < n; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2]) {
                console.log("Không phải dãy số fibonacci");
                break;
            }

            if (i === n - 1) {
                console.log("Là dãy số fibonacci");
            }
        }
    } 
    else {
        console.log("Là dãy số fibonacci");
    }
}
