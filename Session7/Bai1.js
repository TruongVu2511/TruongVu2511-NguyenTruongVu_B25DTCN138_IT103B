function printTeamRoster(playerIds, playerPositions) {
    console.log("Danh sách cầu thủ:");

    for (let i = 0; i < playerIds.length; i++) {
        console.log((i + 1) + ". " + playerIds[i] + " - " + playerPositions[i]);
    }
}

function countPlayersByPosition(playerPositions, position) {
    let count = 0;

    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            count++;
        }
    }

    return count;
}

let playerIds = [];
let playerPositions = [];

let n = +prompt("Nhập số lượng cầu thủ:");

for (let i = 0; i < n; i++) {
    let id;

    do {
        id = prompt("Nhập mã cầu thủ:");
        if (playerIds.indexOf(id) !== -1) {
            alert("Mã cầu thủ đã tồn tại, nhập lại!");
        }
    } while (playerIds.indexOf(id) !== -1);

    playerIds.push(id);

    let posNumber = +prompt(
        "Nhập vị trí (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):"
    );

    let position = "";
    if (posNumber === 1) position = "Thủ môn";
    else if (posNumber === 2) position = "Hậu vệ";
    else if (posNumber === 3) position = "Tiền vệ";
    else if (posNumber === 4) position = "Tiền đạo";

    playerPositions.push(position);
}

printTeamRoster(playerIds, playerPositions);

let searchNumber = +prompt(
    "Nhập vị trí cần đếm (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):"
);

let searchPosition = "";
if (searchNumber === 1) searchPosition = "Thủ môn";
else if (searchNumber === 2) searchPosition = "Hậu vệ";
else if (searchNumber === 3) searchPosition = "Tiền vệ";
else if (searchNumber === 4) searchPosition = "Tiền đạo";

let count = countPlayersByPosition(playerPositions, searchPosition);

console.log("Số cầu thủ ở vị trí " + searchPosition + ": " + count);
