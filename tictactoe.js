//Varaible assigned to follow if game is completed or not
var gameCompleted = false;

//Declare counter variable to keep track of element input to grid to enable draw validation
var counter = 0;

// Player vairables "X" and "O"
var playerOne = "X";
var playerTwo = "O";

// Selecting the whole Grid in the DOM
var playerGridClick = document.getElementById('completeGrid');

// Variable assingment used to switch between player states during the executeTurn function
var turn = playerOne;

//Winner text
var winnerText = document.getElementById('winner-text');

//Reset Button
var resetButton = document.getElementById('reset-button');

//Table Data individual ID variables
var x0y0 = document.getElementById('0-0');
var x0y1 = document.getElementById('0-1');
var x0y2 = document.getElementById('0-2');
var x1y0 = document.getElementById('1-0');
var x1y1 = document.getElementById('1-1');
var x1y2 = document.getElementById('1-2');
var x2y0 = document.getElementById('2-0');
var x2y1 = document.getElementById('2-1');
var x2y2 = document.getElementById('2-2');

// Declare multi-dementional array to validate wins
var validationArray = [
                        ["","",""],
                        ["","",""],
                        ["","",""],
                                   ];

// Main function to assign "X" or "O" based on user click
  var executeTurn = function(e){
    // if the game state is set to completed, the function will no longer run
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
        // use the split method to break up the individual id's and assign them to an array
        var arrayIndex = id.split("-")
        var row = arrayIndex[0]
        var column = arrayIndex[1]
        arrayInput(event.target.innerText, row, column)
      };
      //initialise counter variable to keep track of element input to grid to enable draw validation
       counter ++;

      // ------------------------------------------------------- //
      //HORIZONTAL WINS
      //Player One Wins Horizontal
      if (validationArray[0].toString() === "X,X,X" || validationArray[1].toString() === "X,X,X" || validationArray[2].toString() === "X,X,X") {
        winnerText.innerText = ("Player One Wins!")
        gameCompleted = true;
      };
      //Player Two Wins Horizontal
      if (validationArray[0].toString() === "O,O,O" || validationArray[1].toString() === "O,O,O" || validationArray[2].toString() === "O,O,O") {
        winnerText.innerText = ("Player Two Wins!")
        gameCompleted = true;
      };

      // ------------------------------------------------------- //
      //VERTICAL
      //Player One Wins Vertical Left
      if (validationArray[0][0].toString() === "X" && validationArray[1][0].toString() === "X" && validationArray[2][0].toString() === "X") {
        winnerText.innerText = ("Player One Wins!")
        gameCompleted = true;
      };
      //Player Two Wins Vertical Left
      if (validationArray[0][0].toString() === "O" && validationArray[1][0].toString() === "O" && validationArray[2][0].toString() === "O") {
        winnerText.innerText = ("Player Two Wins!")
        gameCompleted = true;
      };
      //Player One Wins Vertical Middle
      if (validationArray[0][1].toString() === "X" && validationArray[1][1].toString() === "X" && validationArray[2][1].toString() === "X") {
        winnerText.innerText = ("Player One Wins!")
        gameCompleted = true;
      };
      //Player Two Wins Vertical Middle
      if (validationArray[0][1].toString() === "O" && validationArray[1][1].toString() === "O" && validationArray[2][1].toString() === "O") {
        winnerText.innerText = ("Player Two Wins!")
        gameCompleted = true;
      };
      //Player One Wins Vertical Right
      if (validationArray[0][2].toString() === "X" && validationArray[1][2].toString() === "X" && validationArray[2][2].toString() === "X") {
        winnerText.innerText = ("Player One Wins!")
        gameCompleted = true;
      };
      //Player Two Wins Vertical Right
      if (validationArray[0][2].toString() === "O" && validationArray[1][2].toString() === "O" && validationArray[2][2].toString() === "O") {
        winnerText.innerText = ("Player Two Wins!")
        gameCompleted = true;
      };

      // ------------------------------------------------------- //
      //DIAGONAL
      //Player One Wins Diagonal Top-Bottom
      if (validationArray[0][0].toString() === "X" && validationArray[1][1].toString() === "X" && validationArray[2][2].toString() === "X") {
        winnerText.innerText = ("Player One Wins!")
        gameCompleted = true;
      };
      //Player Two Wins Diagonal Top-Bottom
      if (validationArray[0][0].toString() === "O" && validationArray[1][1].toString() === "O" && validationArray[2][2].toString() === "O") {
        winnerText.innerText = ("Player Two Wins!")
        gameCompleted = true;
      };
      //Player One Wins Diagonal Bottom-Top
      if (validationArray[2][0].toString() === "X" && validationArray[1][1].toString() === "X" && validationArray[0][2].toString() === "X") {
        winnerText.innerText = ("Player One Wins!")
        gameCompleted = true;
      };
      //Player Two Wins Diagonal Bottom-Top
      if (validationArray[2][0].toString() === "O" && validationArray[1][1].toString() === "O" && validationArray[0][2].toString() === "O") {
        winnerText.innerText = ("Player Two Wins!")
        gameCompleted = true;
      };
      //Test counter variable to validate draw
      if (counter === 9) {
        winnerText.innerText = ("This game is a Draw!")
      }
    }
};

var drawValidation = function() {
  for (var i=0, len=validationArray.length; i<len; i++) {
      // inner loop applies to sub-arrays
      for (var j=0, len2=validationArray[i].length; j<len2; j++) {
          // accesses each element of each sub-array in turn
          console.log(validationArray[i][j]);
      }
  }
}

//function that takes three arguments and packages them for use in executeTurn function
var arrayInput = function(symbol, row, column) {
  validationArray[row][column] = symbol;
}

//Reset game function that reloads entire page
var resetGame = function() {
   location.reload()
};

//Add event listener to register when grid is clicked and run executeTurn
playerGridClick.addEventListener("click", executeTurn);

//Add event listener to register a button click to reset game
resetButton.addEventListener("click", resetGame);


// hard coded condtionals
// if (gA.innerText === "X" && gB.innerText === "X" && gC.innerText === "X") {
//   console.log("Player One has Won!");
// } else if (gA.innerText === "O" && gB.innerText === "O" && gC.innerText === "O") {
//   console.log("Player Two has Won!");
// }

// nested for loop to iterate over an multi-dementional array




// //When I want to create the table rows and columns dynamicly
// var liElement = document.createElement('li')
//
// var text = document.createTextNode('some info')
// liElement.append(text)
// liElement

// var turnBtn = document.getElementById('turn');
// turnBtn.value = (turnBtn.value == "X") ? "O" : "X";
