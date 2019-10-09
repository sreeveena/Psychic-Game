# Psychic-Game

Technologies used:
HTML
CSS
JAVASCRIPT

This assignment has one HTML page, one javascript file and one CSS file:
1. index.html
2. game.js
3. style.css

In this Psychic game the user has nine chances to guess the computer guessed letter. Everytime a user guesses a letter, they loose the one chance. If the user cannot guess the letter in the nine chances, they looses. If they do then they win and can continue the game.

In index page the following is the body block 
'''
<body>

    <div>
        <!-- Creating the elements by id -->
        <br>
        <h1>The Psychic Game</h1>
        <br>
        <p id="computer-guess">Guess what letter I'm thinking of</p>
        <br>
        <p id="wins-text"></p>
        <br>
        <p id="losses-text"></p>
        <br>
        <p id="guesses-left"></p>
        <br>
        <p id="user-guess"></p>
    </div>
  
<script type="text/javascript" src="assets/javascript/game.js"></script>
</body>
'''
In javascript file  has a function. This function starts only when a user presses a key on the keyboard.
'''
document.onkeyup = function(event) {
      
      //this variable captures the user pressed key.
      var userGuess = event.key;

      // making the user guess to lowercase
      userGuess = userGuess.toLowerCase(); 

      // checking if the user past guess was empty before concatenating
      if(userPastGuess == ""){
         userPastGuess =  userGuess;
      }else{
         userPastGuess = userPastGuess +" , "+ userGuess;
      }
       
      //comparing the user guess with computer guess and modifying the values
      if( userGuess == computerGuess)
      {
         wins++;
         userPastGuess = "";
         guessesLeft = 9;
         computerGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];

      }else{
         guessesLeft--;
      }
      //reset the values upon failed guesses
      if(guessesLeft == 0){
         losses++;
         guessesLeft = 9;
         userPastGuess = "";
         computerGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];
      }
      
      winsText.textContent = "Wins : " + wins;
      lossesText.textContent = "Losses : " + losses;
      guessesText.textContent = "Guesses Left : " + guessesLeft;
      userText.textContent = "Your Guesses so far : " + userPastGuess ;
      
   };

'''

screenshot of the page
index.html

