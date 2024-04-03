// Import Statements and Const
const prompt = require('prompt-sync')();
const {characters} = require("../Characters Data/characters");

///function to have a random number of 1-3 be rolled
const rollDice = () => Math.floor(Math.random() * 3) + 1;

// Function to display the barracks health of pirates
const displayPirateBarracksHealth = () => {
    console.log("Pirates' Barracks Health:");
    characters.pirates.forEach(pirate => {
        console.log(`${pirate.name}: ${pirate.barrackshealth}`);
    });
};

// Function to display the barracks health of space ranger
const displaySpaceRangerBarracksHealth = () => {
    console.log("Space Rangers' Barracks Health:");
    characters.spaceRangers.forEach(spaceRanger => {
        console.log(`${spaceRanger.name}: ${spaceRanger.barrackshealth}`);
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


// Define actions array
const actions = [
    {
        TurnId: 1,
        text: "What would you like to do?",
        choices: [
            {
                text: "Create a Bot",
                outcome: {
                    text: "Enter name",
                    effect: "enter name"
                }
            },
            {
                text: "Select a Bot",
                outcome: selectBot
            }
        ]
    }
];



// Define actions as a callable function
const getActions = () => {
    return [
        {
            TurnId: 1,
            text: "What would you like to do?",
            choices: [
                {
                    text: "Create a Bot",
                    outcome: {
                        text: "Enter name",
                        effect: "enter name"
                    }
                },
                {
                    text: "Select a Bot",
                    outcome: selectBot
                }
            ]
        }
    ];
};


getActions();



module.exports = {getActions};


// //Once the above is done, the next step is to loop through the commands of all Bots on the current players side/barracks.

// //Players 2 now takes their turn with the same options as above.
// //The computer simply has a random number picked between 1 - 3 and either attacks or repairs with it.