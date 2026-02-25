const playerNames = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson"
];

function getUpperNames(playerNames) {

    const newArray = playerNames.map(function(name) {
        return name.toUpperCase();
    });

    return newArray;
}