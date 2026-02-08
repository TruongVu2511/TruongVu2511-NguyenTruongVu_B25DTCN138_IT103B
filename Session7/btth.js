let players = [];
let goals = [];

function addPlayer(name, goal) {
    players.push(name);
    goals.push(goal);
    console.log("Đã thêm " + name + " thành công.");
}

function showSquad() {
    if (players.length === 0) {
        console.log("Đội bóng chưa có cầu thủ.");
        return;
    }

    for (let i = 0; i < players.length; i++) {
        console.log((i + 1) + ". " + players[i] + " - " + goals[i] + " bàn");
    }
}

const getTotalGoals = function () {
    let total = 0;
    for (let i = 0; i < goals.length; i++) {
        total += goals[i];
    }
    return total;
};

function findMostGoals(goalsArray) {
    if (goalsArray.length === 0) {
        return 0;
    }

    let max = goalsArray[0];
    for (let i = 1; i < goalsArray.length; i++) {
        if (goalsArray[i] > max) {
            max = goalsArray[i];
        }
    }
    return max;
}

function main() {
    let choice;

    while (true) {
        choice = prompt(
`--- QUẢN LÝ ĐỘI BÓNG ---
1. Nhập cầu thủ mới
2. Xem danh sách đội hình
3. Xem thành tích toàn đội
4. Tìm Vua phá lưới
0. Thoát`
        );

        if (choice === "0") {
            break;
        }

        switch (choice) {
            case "1":
                let name = prompt("Nhập tên:");
                let goal = +prompt("Nhập số bàn thắng:");
                addPlayer(name, goal);
                break;

            case "2":
                showSquad();
                break;

            case "3":
                console.log("Tổng số bàn thắng của cả đội là: " + getTotalGoals() + " bàn.");
                break;

            case "4":
                let maxGoal = findMostGoals(goals);
                if (maxGoal === 0) {
                    console.log("Chưa có dữ liệu.");
                } else {
                    let index = goals.indexOf(maxGoal);
                    console.log("Vua phá lưới hiện tại là " + players[index] + " với " + maxGoal + " bàn.");
                }
                break;

            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    }
}

main();
