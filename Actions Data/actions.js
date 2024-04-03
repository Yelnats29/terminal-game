// Import Statements and Const
const prompt = require('prompt-sync')();
const {characters} = require("../Characters Data/characters");
let botName = prompt("What should the Bot be named? "),
///function to have a random number of 1-3 be rolled




const actions = [
    {TurnId: 1,
    text: "What would you like to do?",
    choices: [
        {text: "Create a Bot",
            outcome: {
                text: botName(),
                effect: "enter name ",
    }
},  
    {   const selectBot = () => {
        text: "Select a Bot.",
        effect: "Select a command for ${botName}, Attack the enemy or Repair the barracks. ",
        // const option1 = "attack"  const option2 = "repair"
            outcome: {
                if(effect = "attack") {console.log(${botName}, "will now commence the attack", "You did (random number) damage to enemy barracks")
                //display enemy remaining barracks health}
                 } 
                 else if (effect = "repair"){console.log(${botName}, "will now proceed with the requested repairs", "Barracks recovered (random number) health")
        //display player's current barrack health}
                 }
                 else {console.log('Please give your Bot a command.'), console.clear(), selectBot()}
                }
    }
    }
]}
];

//Once the above is done, the next step is to loop through the commands of all Bots on the current players side/barracks.

//Players 2 now takes their turn with the same options as above.
//The computer simply has a random number picked between 1 - 3 and either attacks or repairs with it.



module.exports = {actions};