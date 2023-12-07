// Get the stat of a users team players, and calculate total point

const loche_point_calc = ({ stat, players }) => {
  /* This function receives stat of a football players from an API, and
    calculate the points of a user players' based on the fetched stat.
    
    Both arguments are array of objects which leads to using nested loop.
    But using frequency counters pattern, we can only limit it to a single loop which 
    enhance the time complexity to O(N) 
    
    If the data for a specific player is not avaiable in the fetched stat, it will be considered
    as the player does not play.

    Arguments
    - stat -> [{pid:1, pname:"Bukayo Saka", role:"Midfielder", club:"ARS", fantasy_point:10}, {pid:2, pname:"Bruno Fernandes", role:"Midfielder", club:"MUN", fantasy_point:15}]    
    - players -> [{pid:3, pname:"Erling Haland", role:"Forward",club:"MCI", fantasy_point:10},{pid:1, pname:"Bukayo Saka", role:"Midfielder", club:"ARS", fantasy_point:0}, {pid:2. pname:"Bruno Fernandes", role:"Midfielder", club:"MUN", fantasy_point:0} ]
    */

  // Check if both arrays are not empty
  if (stat.length === 0 || players.length === 0)
    throw new Error("The arrays can not be empty");

  // Translate the stat array into an object
  let playerStat = {};
  stat.forEach((data) => {
    playerStat[data.pid] = data.fantasy_point;
  });

  // Update my players data using the fetched data
  for (let i = 0; i < players.length; i++) {
    // Player ID
    
const playerId = players[i].pid;
    if (playerStat[playerId]) {
      players[i].fantasy_point = playerStat[playerId];
    }
  }

  return players;
};

// Sample
const stat = [
  {
    pid: 1,
    pname: "Bukayo Saka",
    role: "Midfielder",
    club: "ARS",
    fantasy_point: 10,
  },
  {
    pid: 2,
    pname: "Bruno Fernandes",
    role: "Midfielder",
    club: "MUN",
    fantasy_point: 15,
  },
];

// Players
const players = [
  {
    pid: 3,
    pname: "Erling Haland",
    role: "Forward",
    club: "MCI",
    fantasy_point: 0,
  },
  {
    pid: 1,
    pname: "Bukayo Saka",
    role: "Midfielder",
    club: "ARS",
    fantasy_point: 0,
  },
  {
    pid: 2,
    pname: "Bruno Fernandes",
    role: "Midfielder",
    club: "MUN",
    fantasy_point: 0,
  },
];

console.log(loche_point_calc({ stat, players }));
