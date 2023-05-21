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

    populateGrid()
    return{placeShip, grid, ships}

}

export default {gameboardFactory}
module.exports = gameboardFactory