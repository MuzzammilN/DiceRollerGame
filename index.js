function rollDice(){
    const numofDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("dice-images");
    const value = [];
    const images = [];

    for(let i = 0; i < numofDice; i++){
        const values = Math.floor(Math.random()*6) + 1; 
        value.push(values);
        images.push(`<img src="dice_images/${values}.png" alt="Dice ${values}">`)
    }

    diceResult.textContent = `dice: ${value.join(', ')}`;
    diceImages.innerHTML = images.join('');
}