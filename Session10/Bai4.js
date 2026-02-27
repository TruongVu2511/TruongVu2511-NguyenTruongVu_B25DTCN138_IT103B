const players = [
    { name: "Messi", years: 18, salary: 100 },
    { name: "Ronaldo", years: 20, salary: 95 },
    { name: "Neymar", years: 12, salary: 90 },
    { name: "Mbappe", years: 7, salary: 85 },
    { name: "Haaland", years: 5, salary: 80 },
    { name: "Modric", years: 22, salary: 70 },
    { name: "Benzema", years: 19, salary: 75 }
];

function analyzeSalary(minYears, teamPlayers) {
    const filtered = teamPlayers.filter(p => p.years >= minYears);

    const totalSalary = filtered.reduce((sum, p) => sum + p.salary, 0);

    const highest = filtered.reduce((max, p) =>
        p.salary > max.salary ? p : max
    );

    const lowest = filtered.reduce((min, p) =>
        p.salary < min.salary ? p : min
    );

    return {
        totalSalary: totalSalary,
        highestPaid: { name: highest.name, salary: highest.salary },
        lowestPaid: { name: lowest.name, salary: lowest.salary }
    };
}