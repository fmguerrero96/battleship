import shipFactory from (shipFactory)

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
        ships.push(ship)

        for(let i = 0; i < shipLength; i++){
            grid[x][y + i] = ship;
        }
    }

    populateGrid()
    return{placeShip}

}

export default {gameboardFactory}
module.exports = gameboardFactory