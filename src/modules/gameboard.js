import shipFactory from './ships'

const gameboardFactory = () => {
    const grid = []
    const ships = []
    const missedAttacks = []
    const successfulAttacks = []

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
            if(grid[x + i][y] !== null){
                throw new Error('Cannot place ship on an occupied spot')
            }
        }

        for(let i = 0; i < shipLength; i++){
            grid[x + i][y] = ship;
        }

        ships.push(ship)
    }

    const placeRandomShips = () => {
        const shipLengths = [5, 4, 3, 3, 2];
        
        for(let i = 0; i < shipLengths.length; i++){
            let placed = false
            while(!placed){
                let x = Math.floor(Math.random() * 10)
                let y = Math.floor(Math.random() * 10)
                try {
                    placeShip([x,y], shipLengths[i])
                    placed = true
                } catch (error){

                }
            }
        }
        return ships
      };

    const receiveAttack = (coordinates) => {
        const [x,y] = coordinates
        if(grid[x][y] === null){
            missedAttacks.push([x,y])
            grid[x][y] = 0 //0 will indicate a grid position that was attacked and missed
        } else {
            let ship = grid[x][y]
            ship.hit()
            successfulAttacks.push([x,y])
        }
    }

    const getShips = () => {
        return ships
    }

    const getGrid = () => {
        return grid
    }

    const allShipsSunk = () => {
        return ships.every((ship) => ship.isSunk())
    }

    const isValidAttack = (coordinates) => {
        const [x, y] = coordinates;
        for (const [attackX, attackY] of successfulAttacks) {
            if (attackX === x && attackY === y) {
                return false;
            }
        }
        for (const [attackX, attackY] of missedAttacks) {
            if (attackX === x && attackY === y) {
                return false
            }
        }
        return true;
    }

    populateGrid()

    return{placeShip, grid, ships, receiveAttack, placeRandomShips, 
        missedAttacks, successfulAttacks, allShipsSunk, isValidAttack, 
        getShips, getGrid}

}

export default gameboardFactory
module.exports = gameboardFactory