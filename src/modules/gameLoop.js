import shipFactory from "./ships";
import gameboardFactory from "./gameboard";
import playerFactory from "./player";

const humanPlayer = playerFactory('human')
const aiPlayer = playerFactory('computer')

const humanGameboard = gameboardFactory()
const aiGameboard = gameboardFactory()

const carrier = 5
const battleship = 4
const destroyer = 3
const submarine = 3
const patrolBoat = 2

humanGameboard.placeShip([0,0], carrier)
humanGameboard.placeShip([0,2], battleship)
humanGameboard.placeShip([0,4], destroyer)
humanGameboard.placeShip([0,6], submarine)
humanGameboard.placeShip([0,8], patrolBoat)

aiGameboard.placeShip([1,0], carrier)
aiGameboard.placeShip([3,0], battleship)
aiGameboard.placeShip([5,0], destroyer)
aiGameboard.placeShip([7,0], submarine)
aiGameboard.placeShip([9,0], patrolBoat)

humanPlayer.isMyTurn() = true
aiPlayer.isMyTurn() = false

const mainLoop = (humanBoard, computerBoard) => {
    while (!humanBoard.allShipsSunk() && !computerBoard.allShipsSunk()) {
        // Human player's turn
        // Prompt the human player for input (click on a cell in the AI board)
        // Capture the input coordinates and pass them to humanPlayerAttack
        // Update the game state

        // Check if the game has ended
        if (humanBoard.allShipsSunk() || computerBoard.allShipsSunk()) {
            break; // Exit the loop if the game has ended
        }

        // AI player's turn
        // Set the AI player's flag to indicate it's their turn (aiPlayer.isMyTurn = true)
        // Call computerPlayerAttack with the humanBoard
        // Update the game state

        // Check if the game has ended
        if (humanBoard.allShipsSunk() || computerBoard.allShipsSunk()) {
            break; // Exit the loop if the game has ended
        }
    }
}