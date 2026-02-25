const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];

const viewPlayers = () => {
    squad.forEach(function(player) {
        console.log(player[0] + " (" + player[2] + "): " + player[1] + " bàn thắng");
    });
};

const findPlayer = () => {
    let name = prompt("Nhập tên cầu thủ cần tìm:");

    let result = squad.find(function(player) {
        return player[0] === name;
    });

    if (result !== undefined) {
        console.log("Tìm thấy:");
        console.log("Tên: " + result[0]);
        console.log("Bàn thắng: " + result[1]);
        console.log("Vị trí: " + result[2]);
    } else {
        console.log("Không tìm thấy cầu thủ.");
    }
};

const filterByPosition = () => {
    let pos = prompt("Nhập vị trí (FW/MF/DF/GK):");

    let list = squad.filter(function(player) {
        return player[2] === pos;
    });

    console.log("KẾT QUẢ LỌC:");

    if (list.length === 0) {
        console.log("Không có cầu thủ ở vị trí này.");
    } else {
        list.forEach(function(player) {
            console.log("- " + player[0] + " (" + player[1] + " bàn)");
        });
    }
};

const totalGoals = () => {
    let total = squad.reduce(function(sum, player) {
        return sum + player[1];
    }, 0);

    console.log("Tổng số bàn thắng toàn đội là: " + total + " bàn");
};

const checkPerformance = () => {
    let hasZero = squad.some(function(player) {
        return player[1] === 0;
    });

    let allScored = squad.every(function(player) {
        return player[1] > 0;
    });

    if (hasZero) {
        console.log("Có cầu thủ chưa ghi bàn.");
    }

    if (allScored) {
        console.log("Tất cả cầu thủ đều đã ghi bàn.");
    } else {
        console.log("Không phải tất cả cầu thủ đều ghi bàn.");
    }
};

let choice;

do {
    choice = prompt(
`--- QUẢN LÝ ĐỘI BÓNG ---
1. Xem danh sách
2. Tìm kiếm
3. Lọc vị trí
4. Tổng bàn thắng
5. Kiểm tra hiệu suất
0. Thoát

Bạn chọn:`
    );

    switch (choice) {
        case "1":
            viewPlayers();
            break;
        case "2":
            findPlayer();
            break;
        case "3":
            filterByPosition();
            break;
        case "4":
            totalGoals();
            break;
        case "5":
            checkPerformance();
            break;
        case "0":
            console.log("Hẹn gặp lại!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }

} while (choice !== "0");