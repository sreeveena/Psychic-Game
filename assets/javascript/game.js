// Creates an array that lists out all of the options (a-z).
    var computerChoices = ["a", "b", "c","d", "e", "f", "g", 
                           "h", "i", "j", "k", "l", "m", "n", 
                           "o", "p", "q", "r", "s", "t", "u", 
                           "v", "w", "x", "y", "z"];
     // creating variables and getting element by id fro html.
      var losses = 0;
      var wins = 0;
      var guessesLeft = 9;

      // var userText = document.getElementById("user-guess");
      var computerText = document.getElementById("computer-guess");
      var guessesText = document.getElementById("guesses-left");
      var winsText = document.getElementById("wins-text");
      var lossesText = document.getElementById("losses-text");
      var userText = document.getElementById("user-guess");
      var userPastGuess = "";
      
      //generating a random number and picking an element in the array
      var computerGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];

      
      // This function will run when ever a user presses a key on the keyboard
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
      //
      if(guessesLeft == 0){
         losses++;
      }
      console.log("Your Guesses so far : " + userGuess);
      console.log("Computer guess:" + computerGuess);
      console.log("Wins: " + wins);
      console.log("Losses:" + losses);
      console.log("Guesses Left: " + guessesLeft);
      console.log("Past Guess: " + userPastGuess);

      
      winsText.textContent = "Wins : " + wins;
      lossesText.textContent = "Losses : " + losses;
      guessesText.textContent = "Guesses Left : " + guessesLeft;
      userText.textContent = "Your Guesses so far : " + userPastGuess ;
      
   };
