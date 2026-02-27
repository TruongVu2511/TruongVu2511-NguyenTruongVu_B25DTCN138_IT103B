let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },
    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }
];

function viewList() {
    console.log("DANH SÁCH CẦU THỦ:");
    squad.forEach(player => {
        console.log(`Mã ${player.id} - ${player.name} (${player.position}): ${player.goals} bàn`);
    });
}

function addPlayer() {
    let id = squad.length > 0 ? squad[squad.length - 1].id + 1 : 1;
    let name = prompt("Nhập tên cầu thủ:");
    let goals = parseInt(prompt("Nhập số bàn thắng:"));
    let position = prompt("Nhập vị trí (FW/MF/DF/GK):");

    squad.push({ id, name, goals, position });
    console.log("Đã thêm cầu thủ thành công.");
}

function findById() {
    let id = parseInt(prompt("Nhập ID cần tìm:"));
    let player = squad.find(p => p.id === id);

    if (player) {
        console.log(`Tìm thấy: ${player.name} - ${player.goals} bàn`);
    } else {
        console.log("Không tìm thấy cầu thủ.");
    }
}

function updateGoals() {
    let id = parseInt(prompt("Nhập ID cần cập nhật:"));
    let player = squad.find(p => p.id === id);

    if (player) {
        let newGoals = parseInt(prompt("Nhập số bàn thắng mới:"));
        player.goals = newGoals;
        console.log("Đã cập nhật thành công.");
    } else {
        console.log("Không tìm thấy cầu thủ.");
    }
}

function deletePlayer() {
    let id = parseInt(prompt("Nhập ID cần xóa:"));
    let index = squad.findIndex(p => p.id === id);

    if (index !== -1) {
        squad.splice(index, 1);
        console.log("Đã xóa cầu thủ.");
    } else {
        console.log("Không tìm thấy cầu thủ.");
    }
}

let choice;

do {
    choice = prompt(
`--- QUẢN LÝ ĐỘI BÓNG (OBJ) ---
1. Xem danh sách
2. Thêm cầu thủ
3. Tìm kiếm (theo ID)
4. Cập nhật bàn thắng
5. Xóa cầu thủ
0. Thoát`
    );

    switch (choice) {
        case "1":
            viewList();
            break;
        case "2":
            addPlayer();
            break;
        case "3":
            findById();
            break;
        case "4":
            updateGoals();
            break;
        case "5":
            deletePlayer();
            break;
        case "0":
            console.log("Hẹn gặp lại!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }

} while (choice !== "0");