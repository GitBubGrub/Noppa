
function rollDice() {
    
    const diceValue = Math.floor(Math.random() * 6) + 1;

    
    const imgElement = document.getElementById('dice'); 
    imgElement.src = `dice_${diceValue}.png`; 

    
    console.log(`Arvottiin ${diceValue}`);
}


rollDice();

