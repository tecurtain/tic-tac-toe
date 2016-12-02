README FILE

TECHNOLOGIES USED
JavaScript, HTML, CSS.

APPROACH TAKEN

The project was broken down into different components (data, presentation, views, style, DOM manipulation) and brainstormed in my journal. The resulting flow looked like this:

Run Once:
* Populate Board
* Add Event Listener
* Initialise state variables (global variables)

Run Every time:
* User Click (input from player 1 or 2)
* Select DOM element when user clicks
* Populate either "X" or "O" html text content.
* Has someone won? Check win validation (16 possible ways to win for both X and O)
  * True
      * Congrats player who won
      * Reset Game (clear board and restart game first step.)
  * False
      * Wait for additional user click (back to first step.)

This was then diagramed on butcher paper.  The below image illustrates this.  

(tic-tac-toe/readme_images/program flow diagram.jpg)

MDN documentation was used where methods were unclear or unfamiliar.  

White boards were used to explain concepts by instructors to great effect.  

!(https://github.com/tecurtain/tic-tac-toe/blob/master/readme_images/multidimensional%20array%20diagram.jpg?raw=true "Multidimensional Array Diagram")

Console.log, inspector and the Debugger tool were used extensively during the coding process to test functionality and correct errors or bugs.  

A coordinate table was written out as a guide to assist in the coding win validation process.  This was extremely helpful and prevented errors from appearing throughout the code.  

!(https://github.com/tecurtain/tic-tac-toe/blob/master/readme_images/table%20coordinates%20diagram.jpg?raw=true "Table Coordinate Diagram")

FUTURE EXPANSION
(stretch goals)

* Use timers to display "waiting..." messages while users are waiting to be matched
* Keep track of multiple game rounds with a win counter
* Allow game customizable options, time limits, board size, game rounds, name & profiles etc
* Allow players to customize their token (X, O, name, picture, avatar etc)
* Use LocalStorage or SessionStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
