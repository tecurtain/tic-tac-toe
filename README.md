README FILE

TECHNOLOGIES USED
JavaScript, HTML, CSS.

APPROACH TAKEN

The project was broken down into different components (data, presentation, views, style, DOM manipulation) and brainstormed in my journal. The resulting flow looked like this:

Run Once:
1. Populate Board
2. Add Event Listener
3. Initialise state variables (global variables)

Run Every time:
1. User Click (input from player 1 or 2)
2. Select DOM element when user clicks
3. Populate either "X" or "O" html text content.
4. Has someone won? Check win validation (16 possible ways to win for both X and O)
    - True - 1. Congrats player who won
             2. Reset Game (clear board and restart game to step 1.)
    - False - 1. Wait for additional user click (back to step 1.)

This was then diagramed on butcher paper.  The below image illustrates this.  

!(https://github.com/tecurtain/tic-tac-toe/blob/master/readme_images/program%20flow%20diagram.jpg?raw=true "Program Flow Diagram")

MDN documentation was used where methods were unclear or unfamiliar.  

White boards were used to explain concepts by instructors to great effect.  

!(https://github.com/tecurtain/tic-tac-toe/blob/master/readme_images/multidimensional%20array%20diagram.jpg?raw=true "Multidimensional Array Diagram")

Console.log, inspector and the Debugger tool were used extensively during the coding process to test functionality and correct errors or bugs.  

A coordinate table was written out as a guide to assist in the coding win validation process.  This was extremely helpful and prevented errors from appearing throughout the code.  

!(https://github.com/tecurtain/tic-tac-toe/blob/master/readme_images/table%20coordinates%20diagram.jpg?raw=true "Table Coordinate Diagram")

FUTURE EXPANSION
(stretch goals)

1. Use timers to display "waiting..." messages while users are waiting to be matched
2. Keep track of multiple game rounds with a win counter
3. Allow game customizable options, time limits, board size, game rounds, name & profiles etc
4. Allow players to customize their token (X, O, name, picture, avatar etc)
5. Use LocalStorage or SessionStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
