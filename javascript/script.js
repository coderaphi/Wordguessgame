
    var guesses = '';
    var alreadyGuessed = '';
    var wins= 0;
    var guessesLeft =  5;
    var alreadyGuessedLetters= [];
    var winSound = new Audio ();
        winSound.src="assets/Sounds/enginestart.wav"; 
    

   
    var cars = ["Ferrari", "Lotus", "Porsche"];
    // create an empty variable
    var randomcar = '';

    function initialize() {

        


        guesses = '';
        alreadyGuessed = '';
        guessesLeft =  5;

        guesses = document.getElementById ('guessesLeft');
        guesses.innerHTML = 5
        alreadyGuessed = document.getElementById ('guessedLetters');
        alreadyGuessed.innerHTML = ""
        

        // use random function to select car
        randomcar= cars[Math.floor(Math.random() * cars.length)];
        randomcar= randomcar.toLowerCase();

        // create empty variable "dashes"
        var dashes = [];
        
        //dashes.push('_')will replaces character letters with _
        for (var i = 0; i < randomcar.length; i++) {
            dashes.push('_');
        }
        
        document.getElementById('word').innerHTML = dashes.join(' ');

    }
    // populate 


    document.onkeyup = function (wordGuess) {
        var userGuess = String.fromCharCode(wordGuess.keyCode).toLowerCase();
        var word = document.getElementById('word').innerHTML;

        

        alreadyGuessedLetters.push (userGuess)
        var arr = word.split(' ');
        var correctGuess= false;
        var matchedCount = 0;

        for (var i = 0; i < randomcar.length; i++) {
            if (randomcar.charAt(i) === userGuess) {
                correctGuess= true;
                arr[i] = userGuess;
                
            }

            if (arr[i] !== '_') {
                matchedCount++;
            }
        }


       
        if (matchedCount === randomcar.length) {
            alert ("YOU WIN");
            wins++;
            winner= document.getElementById ('winner')
            winSound.play()
            initialize()
             
             return
            
        }

        else if (guessesLeft<1) {
            alert (" YOU LOSE");
            initialize()
            return;
        }
        if (!correctGuess) {
            guessesLeft --;
        }

        document.getElementById('word').innerHTML = arr.join(' ');               
        guesses.textContent = "" + guessesLeft;
        alreadyGuessed.textContent = " " + alreadyGuessedLetters.join(' ');
        winner.textContent = "" + wins;
        

    };


