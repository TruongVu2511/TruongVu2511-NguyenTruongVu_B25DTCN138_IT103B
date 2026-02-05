let n = +prompt("Nhập số lượng phần tử");

if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(+prompt(`Nhập phần tử thứ ${i + 1}`));
    }

    if (arr.length < 2) {
        console.log("Không có số lớn thứ hai");
    } else {
        let max = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        let max2;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== max) {
                max2 = arr[i];
                break;
            }
        }

        if (max2 === undefined) {
            console.log("Không có số lớn thứ hai");
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max2 && arr[i] < max) {
                    max2 = arr[i];
                }
            }
            console.log(max2);
        }
    }
}
