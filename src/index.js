import events from "./modules/dom";
import playerFactory from "./modules/player"
import gameboardFactory from "./modules/gameboard"

const humanPlayer = playerFactory('human')
const aiPlayer = playerFactory('computer')

const humanGameboard = gameboardFactory()
const aiGameboard = gameboardFactory()

const domEvents = events(humanGameboard)

domEvents.createCells('.pre-board')
domEvents.createCells('.human')
domEvents.createCells('.computer')

domEvents.insertShip()
domEvents.closeModal()