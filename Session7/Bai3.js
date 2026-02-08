function printTeamRoster(players) {
    console.log("Danh sách cầu thủ:");
    for (let i = 0; i < players.length; i++) {
        console.log((i + 1) + ". " + players[i]);
    }
}

function pushPlayer(players, id, name, position) {
    players.push(id + "-" + name + "-" + position);
}

let players = [];

let n = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");

for (let i = 0; i < n; i++) {

    let id;
    let isDuplicate;

    do {
        isDuplicate = false;
        id = prompt("Nhập mã cầu thủ:");

        for (let j = 0; j < players.length; j++) {
            if (players[j].indexOf(id + "-") === 0) {
                alert("Mã cầu thủ đã tồn tại!");
                isDuplicate = true;
                break;
            }
        }
    } while (isDuplicate);

    let name;
    do {
        name = prompt("Nhập tên cầu thủ:");
    } while (name === "");

    let posNumber;
    let position;

    do {
        posNumber = +prompt(
            "Nhập vị trí:\n1. Thủ môn\n2. Hậu vệ\n3. Tiền vệ\n4. Tiền đạo"
        );
    } while (posNumber < 1 || posNumber > 4);

    if (posNumber === 1) position = "Thủ môn";
    else if (posNumber === 2) position = "Hậu vệ";
    else if (posNumber === 3) position = "Tiền vệ";
    else position = "Tiền đạo";

    pushPlayer(players, id, name, position);
}

printTeamRoster(players);
