// Import Statements and Const
const prompt = require('prompt-sync')();
const {characters} = require("../Characters Data/characters");


characters.forEach((team, position) => {
    console.log(`${team.id}: ${team.position}, barracksHealth ${team.health}), barracksMaxHealth ${team.barracksMaxHealth}`);
});


// This will display our intro in the beginning of the game
const showIntro = () => {
console.clear();
const introStory = `Welcome Space Rangers!,\nWe are trapped in a grouling galactic battle against the Pirate Fleet, known as The Dreadnaughts. Turmoil has engulfed the Galactic Republic. The people are in distress and the system is in dire need of assistance. Will you pick up the cause for help or will you have a hand in our demise?

Press "Enter" to take the next step`;

console.log(introStory);
prompt(); // This will pause the screen until the user selects the Enter command.
;
}

showIntro()

// Enter team selection
const selectTeam = () => {
const teams = prompt('Please select a side. Space Ranger or Pirates? ')
if(teams === "space ranger"){
   console.clear(), console.log("You made the right choice! It's great to have you on board")
}else if(teams === "pirates"){
   console.clear(), console.log('Welcome to the dark side, my new friend! We were expecting you!')
}else{console.log('This is a matter of great importance, You are our only hope! \n'), console.clear(), selectTeam()}};
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
const gameInstruction = prompt(`Let me introduce you to your Bots. They aren't the latest versions, but they get the job done. Don't worry about breaking athem! We recycle from the space junk \nA bot has 3 tasks and that is to Attack the enemy, Repair the barracks, or to do Nothing. The efficientcy of this task some what vary in power usually between 1 - 5 points. They can make one move per turn. \nRememeber this, you can create 1 new Bot per turn without a max.\n 
If the computer has 0 or fewer hit points, you win
If you have 0 or fewer hit points, the computer wins
If you both have 0 or fewer hit points, it’s a tie
If you both have more than 0 hit points, start player’s turn over again and repeat the process, \n
Now, Approach the console and create your first Bot to get started!`)









module.exports = {showIntro};