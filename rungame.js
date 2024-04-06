const prompt = require('prompt-sync')();

//function to have a random number of 1-3 be rolled
const rollDice = () => Math.floor(Math.random() * 3) + 1;


// Character Data
let characters = [
    {id: 1, position: 'space ranger', barracksHealth: 10, barracksMaxHealth: 10},
    {id: 2, position: 'pirates', barracksHealth: 10, barracksMaxHealth: 10},
    {id: 3, position: 'computer space ranger', barracksHealth: 10, barracksMaxHealth: 10},
    {id: 4, position: 'computer pirates', barracksHealth: 10, barracksMaxHealth: 10}
];
// More Characters....



characters.forEach((team, position) => {
    console.log(`${team.id}: ${team.position}, barracksHealth ${team.barracksHealth}, barracksMaxHealth ${team.barracksMaxHealth}`);
});


// This will display our intro in the beginning of the game
const showIntro = () => {
console.clear();
const introStory = `Welcome Space Rangers!,\nWe are trapped in a grouling galactic battle against the Pirate Fleet, known as The Dreadnaughts. Turmoil has engulfed the Galactic Republic. The people are in distress and the system is in dire need of assistance. Will you pick up the cause for help or will you have a hand in our demise?

Press "Enter" to take the next step`;

console.log(introStory);
prompt(); // This will pause the screen until the user selects the Enter command.
};

showIntro()

// Enter team selection
const selectTeam = () => {
const teams = prompt('Please select a side. Space Ranger or Pirates? ')
if(teams.toLowerCase() === "space ranger"){
   console.clear(), console.log("You made the right choice! It's great to have you on board")
}else if(teams.toLowerCase() === "pirates"){
   console.clear(), console.log('Welcome to the dark side, my new friend! We were expecting you!')
}else{console.log('This is a matter of great importance, You are our only hope! \n'), console.log(), selectTeam()}};
//This repeats(loops) the team selection if any other choice is entered besides to 2 presented.

console.clear()
selectTeam();


console.log();
const username = prompt('What shall I call you? ');

console.clear();
const greeting = prompt(`Welcome, ${username}, Let's get to work and get you caught up!`);




// Game Instructions

console.log();
console.clear()
const gameInstruction = prompt(`Let me introduce you to your Bots. They aren't the latest versions, but they get the job done. Don't worry about breaking them! We recycle from them from space junk. \nA bot has 3 tasks and that is to Attack the enemy, Repair the barracks, or to do Nothing. The efficientcy of this task some what vary in power usually between 1 - 5 points. They can make one move per turn. \nRememeber this, you can create 1 new Bot per turn without a max.\n 
If the computer has 0 or fewer hit points, you win
If you have 0 or fewer hit points, the computer wins
If you both have 0 or fewer hit points, it’s a tie
If you both have more than 0 hit points, start player’s turn over again and repeat the process, \n
Now, Approach the console and create your first Bot to get started!`)



// Function to display the barracks health of pirates
const displayPirateBarracksHealth = () => {
    console.log("Pirates' Barracks Health:");
    characters.forEach(pirate => {
        console.log(`${pirate.position}: ${pirate.barracksHealth}`);
    });
};

// Function to display the barracks health of space ranger
const displaySpaceRangerBarracksHealth = () => {
    console.log("Space Rangers' Barracks Health:");
    characters.forEach(spaceRanger => {
        console.log(`${spaceRanger.position}: ${spaceRanger.barracksHealth}`);
    });
};



// Function to select a bot and perform actions
const selectBot = (botName) => {
    console.log("Selecting a Bot.");
    console.log(`Select a command for ${botName}: Attack the enemy or Repair the barracks.`);
    const effect = prompt("Enter your command: "); // Assuming the user provides input for the command

    if (effect === "attack") {
        console.log(`${botName} will now commence the attack. You did ${rollDice()} damage to enemy barracks.`);
        console.log(displayPirateBarracksHealth);
    } else if (effect === "repair") {
        console.log(`${botName} will now proceed with the requested repairs. Barracks recovered ${rollDice()} health.`);
        console.log(displaySpaceRangerBarracksHealth);
    } else {
        console.log('Please give your Bot a valid command.');
        console.log();
        selectBot(botName);
    }
};


const getActions = () => {
    const action = prompt('What would you like to do? Create a bot or Select a Bot ')
    if (action.toLowerCase() === "create a bot") {
        console.clear(); const botName = prompt("Enter your Bot's name ");
    } else if (action.toLowerCase() === "select a bot") {
        console.clear(), selectBot();
    } else {
        console.log('Please give your Bot a valid command.');
        console.log();
        getActions()
    };
};
console.log();
getActions();