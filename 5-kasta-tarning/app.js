const diceDiv = document.querySelector("#dice-div")

function throwDice() {
      const diceSides = [
            "img/1.png",
            "img/2.png",
            "img/3.png",
            "img/4.png",
            "img/5.png",
            "img/6.png"
      ]
      const randomDice = Math.floor(Math.random() * diceSides.length)
      const randomImage = diceSides[randomDice]

      const diceImg = document.querySelector("#dice-image")
      diceImg.src = randomImage
}


