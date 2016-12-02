// ------------------------------------------------------- //
//VARIABLE DECLARATIONS//
//Varaible assigned to follow if game is completed or not//
var gameCompleted = false;

//Declare counter variable to keep track of element input to grid to enable draw validation//
var counter = 0;

// Player vairables "X" and "O"//
var playerOne = "X";
var playerTwo = "O";

// Selecting the whole Grid in the DOM//
var playerGridClick = document.getElementById('completeGrid');

// Variable assingment used to switch between player states during the executeTurn function//
var turn = playerOne;

//Winner text
var winnerText = document.getElementById('winner-text');

//Reset Button
var resetButton = document.getElementById('reset-button');

// Declare multi-dementional array to validate wins//
var validationArray = [
                        ["","",""],
                        ["","",""],
                        ["","",""],
                                   ];

// ------------------------------------------------------- //
//MAIN LOGIC FUNCTIONS//
// Main program logic to assign "X" or "O" based on user click, assign turn, produce array coordinates and maintain counter for draw validation//
  var executeTurn = function(e){
    // if the game state is set to completed, the function will no longer run//
    if (gameCompleted) {
      return
    };
    if (e.target.textContent === "") {
      e.target.textContent = turn;
      if (turn === playerOne) {
        turn = playerTwo;
      } else {
        turn = playerOne;
      }
      if (event.target.innerText === "X" || "O"){
        var id = event.target.id
        // use the split method to break up the individual id's and assign them to an array//
        var arrayIndex = id.split("-")
        var row = arrayIndex[0]
        var column = arrayIndex[1]
        arrayInput(event.target.innerText, row, column)
      };
      //initialise counter variable to keep track of element input to grid to enable draw validation//
       counter ++;

      // ------------------------------------------------------- //
      //HORIZONTAL WINS//
      //Player One Wins Top Horizontal//
      if (validationArray[0].toString() === "X,X,X") {
        winnerText.innerText = ("Player One Wins!")
        gameCompleted = true;
        highlightIds("0-0", "0-1", "0-2");
      };
      //Player One Wins Middle Horizontal//
      if (validationArray[1].toString() === "X,X,X") {
        winnerText.innerText = ("Player One Wins!")
        gameCompleted = true;
        highlightIds("1-0", "1-1", "1-2");
      };
      //Player One Wins Bottom Horizontal//
      if (validationArray[2].toString() === "X,X,X") {
        winnerText.innerText = ("Player One Wins!")
        gameCompleted = true;
        highlightIds("2-0", "2-1", "2-2");
      };
      //Player Two Wins Top Horizontal//
      if (validationArray[0].toString() === "O,O,O") {
        winnerText.innerText = ("Player Two Wins!")
        gameCompleted = true;
        highlightIds("0-0", "0-1", "0-2");
      };
      //Player Two Wins Middle Horizontal//
      if (validationArray[1].toString() === "O,O,O") {
        winnerText.innerText = ("Player Two Wins!")
        gameCompleted = true;
        highlightIds("1-0", "1-1", "1-2");
      };
      //Player Two Wins Bottom Horizontal//
      if (validationArray[2].toString() === "O,O,O") {
        winnerText.innerText = ("Player Two Wins!")
        gameCompleted = true;
        highlightIds("2-0", "2-1", "2-2");
      };

      // ------------------------------------------------------- //
      //VERTICAL WINS//
      //Player One Wins Vertical Left//
      if (validationArray[0][0].toString() === "X" && validationArray[1][0].toString() === "X" && validationArray[2][0].toString() === "X") {
        winnerText.innerText = ("Player One Wins!")
        gameCompleted = true;
        highlightIds("0-0", "1-0", "2-0");
      };
      //Player Two Wins Vertical Left//
      if (validationArray[0][0].toString() === "O" && validationArray[1][0].toString() === "O" && validationArray[2][0].toString() === "O") {
        winnerText.innerText = ("Player Two Wins!")
        gameCompleted = true;
        highlightIds("0-0", "1-0", "2-0");
      };
      //Player One Wins Vertical Middle//
      if (validationArray[0][1].toString() === "X" && validationArray[1][1].toString() === "X" && validationArray[2][1].toString() === "X") {
        winnerText.innerText = ("Player One Wins!")
        gameCompleted = true;
        highlightIds("0-1", "1-1", "2-1");
      };
      //Player Two Wins Vertical Middle//
      if (validationArray[0][1].toString() === "O" && validationArray[1][1].toString() === "O" && validationArray[2][1].toString() === "O") {
        winnerText.innerText = ("Player Two Wins!")
        gameCompleted = true;
        highlightIds("0-1", "1-1", "2-1");
      };
      //Player One Wins Vertical Right//
      if (validationArray[0][2].toString() === "X" && validationArray[1][2].toString() === "X" && validationArray[2][2].toString() === "X") {
        winnerText.innerText = ("Player One Wins!")
        gameCompleted = true;
        highlightIds("0-2", "1-2", "2-2");
      };
      //Player Two Wins Vertical Right//
      if (validationArray[0][2].toString() === "O" && validationArray[1][2].toString() === "O" && validationArray[2][2].toString() === "O") {
        winnerText.innerText = ("Player Two Wins!")
        gameCompleted = true;
        highlightIds("0-2", "1-2", "2-2");
      };

      // ------------------------------------------------------- //
      //DIAGONAL WINS//
      //Player One Wins Diagonal Top-Bottom//
      if (validationArray[0][0].toString() === "X" && validationArray[1][1].toString() === "X" && validationArray[2][2].toString() === "X") {
        winnerText.innerText = ("Player One Wins!")
        gameCompleted = true;
        highlightIds("0-0", "1-1", "2-2");
      };
      //Player Two Wins Diagonal Top-Bottom//
      if (validationArray[0][0].toString() === "O" && validationArray[1][1].toString() === "O" && validationArray[2][2].toString() === "O") {
        winnerText.innerText = ("Player Two Wins!")
        gameCompleted = true;
        highlightIds("0-0", "1-1", "2-2");
      };
      //Player One Wins Diagonal Bottom-Top//
      if (validationArray[2][0].toString() === "X" && validationArray[1][1].toString() === "X" && validationArray[0][2].toString() === "X") {
        winnerText.innerText = ("Player One Wins!")
        gameCompleted = true;
        highlightIds("2-0", "1-1", "0-2");
      };
      //Player Two Wins Diagonal Bottom-Top//
      if (validationArray[2][0].toString() === "O" && validationArray[1][1].toString() === "O" && validationArray[0][2].toString() === "O") {
        winnerText.innerText = ("Player Two Wins!")
        gameCompleted = true;
        highlightIds("2-0", "1-1", "0-2");
      };
      //Test counter variable to validate draw//
      if (counter === 9 && gameCompleted != true) {
        winnerText.innerText = ("Snow Way!  It's a Draw!")
      }
    };
};

// ------------------------------------------------------- //
//ADDITIONAL FUNCTIONS OUTSIDE MAIN LOGIC//
//function that assigns coordinates to the hard coded validationArray.  This packages these variables for use in executeTurn function//
var arrayInput = function(symbol, row, column) {
  validationArray[row][column] = symbol;
}

//Reset game function that reloads entire page//
var resetGame = function() {
   location.reload()
};

//function that will change background element ID to display winning sequence//
function highlightIds(id1, id2, id3) {
  var el1 = document.getElementById(id1).classList.add('win-state');
  var el2 = document.getElementById(id2).classList.add('win-state');
  var el3 = document.getElementById(id3).classList.add('win-state');
};

// ------------------------------------------------------- //
//EVENT LISTENERS//
//Add event listener to register when grid is clicked and run executeTurn//
playerGridClick.addEventListener("click", executeTurn);

//Add event listener to register a button click to reset game//
resetButton.addEventListener("click", resetGame);
