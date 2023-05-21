import shipFactory from './ships'

const gameboardFactory = () => {
    const grid = []
    const ships = []
    const missedAttacks = []

    const populateGrid = () => {
        let rows = 10
        let cols = 10
        for(let i = 0; i < rows; i++){
            grid[i] = [];
            for(let j = 0; j < cols; j++){
                grid[i][j] = null
            }
        }
    }

    const placeShip = (coordinates, shipLength) => {
        const ship = shipFactory(shipLength)
        const [x, y] = coordinates;
        
        for(let i =0; i < shipLength; i++){
            if(grid[x][y + i] !== null){
                throw new Error('Cannot place ship on an occupied spot')
            }
        }

        for(let i = 0; i < shipLength; i++){
            grid[x][y + i] = ship;
        }

        ships.push(ship)
    }

    const receiveAttack = (coordinates) => {
        const [x,y] = coordinates
        if(grid[x][y] === null){
            missedAttacks.push([x,y])
            grid[x][y] = 0 //0 will indicate a grid position that was attacked and missed
        } else {
            let ship = grid[x][y]
            ship.hit()
        }
    }

    const allShipsSunk = () => {
        return ships.every((ship) => ship.isSunk())
    }

    populateGrid()
    return{placeShip, grid, ships, receiveAttack, missedAttacks, allShipsSunk}

}

export default {gameboardFactory}
module.exports = gameboardFactory