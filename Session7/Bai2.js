function printTeamRoster() {
    console.log("Danh sách cầu thủ hiện tại:");
    for (let i = 0; i < playerIds.length; i++) {
        console.log(
            (i + 1) + ". " +
            playerIds[i] + " - " +
            playerNames[i] + " - Áo số " +
            playerJerseyNumbers[i]
        );
    }
}

function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
    let index = playerIds.indexOf(playerId);

    if (index === -1) {
        return false;
    }

    playerNames[index] = newName;
    playerJerseyNumbers[index] = newJerseyNumber;
    return true;
}

let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = [
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
    "Phạm Văn D",
    "Hoàng Thị E"
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];

printTeamRoster();

let inputId = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");

if (playerIds.indexOf(inputId) === -1) {
    alert("Không tìm thấy cầu thủ với mã này!");
} else {
    let newName = prompt("Nhập tên mới cho cầu thủ:");
    let newJersey = +prompt("Nhập số áo mới (1 - 99):");

    let updated = updatePlayerNameAndJersey(inputId, newName, newJersey);

    if (updated) {
        alert("Cập nhật thành công!");
        printTeamRoster();
    }
}
