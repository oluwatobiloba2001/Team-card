const footballTeam = {
  team: "Barcelona",
  year: 1899,
  headCoach: "Flick",
    players: [
      {
    name: "Lamine",
    position: "forward",
    isCaptain: false,
      },
      {
    name: "Araujo",
    position: "defender",
    isCaptain: true,
      },
      {
    name: "Stegen",
    position: "goalkeeper",
    isCaptain: false,
        },
    {
    name: "Garcia",
    position: "goalkeeper",
    isCaptain: false,
        },
    {
    name: "Lewandoski",
    position: "forward",
    isCaptain: false,
        },
    {
    name: "Raphiha",
    position: "forward",
    isCaptain: false,
        },
    {
    name: "Fermin",
    position: "forward",
    isCaptain: false,
        },
    {
    name: "De jong",
    position: "midfielder",
    isCaptain: false,
        },
    {
    name: "Dani Olmo",
    position: "midfielder",
    isCaptain: false,
        },
    {
    name: "Ferran Torres",
    position: "forward",
    isCaptain: false,
        },
    {
    name: "Pau Cubarsi",
    position: "defender",
    isCaptain: false,
        },
    {
    name: "Jules Kounde",
    position: "defender",
    isCaptain: false,
        },
    {
    name: "Pedri",
    position: "midfielder",
    isCaptain: false,
    },],
}

const headCoach = document.getElementById("head-coach");

const teamName = document.getElementById("team");

const year = document.getElementById("year");

const container = document.getElementById("player-cards");

const filtered = document.getElementById("players")

headCoach.innerText = footballTeam.headCoach;

teamName.innerText = footballTeam.team;

year.innerText = footballTeam.year;

const players = footballTeam.players;

function displayPlayer(players){
  container.innerHTML = "";

  players.forEach(({name, position, isCaptain}) => {
  const playerDiv = document.createElement("div");
  playerDiv.className = "player-card";

  const h2 = document.createElement("h2");
  h2.textContent = isCaptain ? `(Captain) ${name}`: name;

  const p = document.createElement("p");
  p.textContent = `Position: ${position}`;

  playerDiv.appendChild(h2);
  playerDiv.appendChild(p);
  container.appendChild(playerDiv);
})
}

filtered.addEventListener('change', () => {
  const selected = filtered.value;

  if (selected === 'all'){
    displayPlayer(players);
  }else{
    const otherPlayers = players.filter(player => player.position === selected);
    displayPlayer(otherPlayers);
  }
});


displayPlayer(players);