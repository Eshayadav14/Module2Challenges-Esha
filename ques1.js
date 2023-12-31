// Coding Challenge #1

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

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const { team1, x: draw, team2: team2Odds } = game.odds;

function printGoals(...playerNames) {
  console.log(
    `${playerNames.length} goals were scored by ${playerNames.join(", ")}`
  );
} //join: seperating array values with a comma

team1 < team2Odds && console.log("Team 1 is more likely to win");
team1 > team2Odds && console.log("Team 2 is more likely to win");
draw < team1 && draw < team2Odds && console.log("A draw is more likely");

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

printGoals(...game.scored);
