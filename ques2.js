const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
game.scored.forEach((player, index) =>
  console.log(`Goal ${index + 1}: ${player}`)
);
const averageOdd =
  Object.values(game.odds).reduce((sum, odd) => sum + odd, 0) /
  Object.keys(game.odds).length;
console.log(`Average odd: ${averageOdd.toFixed(2)}`);
for (const [team, odd] of Object.entries(game.odds)) {
  const teamName = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamName}: ${odd}`);
}
const scorers = game.scored.reduce((acc, player) => {
  acc[player] = (acc[player] || 0) + 1;
  return acc;
}, {});

console.log(scorers);
