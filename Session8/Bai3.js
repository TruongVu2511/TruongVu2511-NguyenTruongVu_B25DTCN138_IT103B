const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper"
];

function filterPlayersByPosition(position, players) {

    const result = players.filter(function(player) {

        let parts = player.split(" - ");   
        let playerPosition = parts[1];    

        return playerPosition === position;

    });

    return result;
}