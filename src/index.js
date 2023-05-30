import events from "./modules/dom";
import playerFactory from "./modules/player"
import gameboardFactory from "./modules/gameboard"

const humanPlayer = playerFactory('human') //create player instances
const aiPlayer = playerFactory('computer')

const humanGameboard = gameboardFactory() //create board instances 
const aiGameboard = gameboardFactory()

aiGameboard.placeRandomShips() //populate ai board with ships

const domEvents = events(humanGameboard)

domEvents.createCells('.pre-board')
domEvents.createCells('.human')
domEvents.createCells('.computer')

domEvents.insertShip()
domEvents.closeModal()