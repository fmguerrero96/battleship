const gameboardFactory = require('../modules/gameboard')

describe('gameboardFactory', () => {
    const board = gameboardFactory()
    test('places ship on gameboard at the given coordinates', () => {
        const length = 3
        const index = [2, 3]
        board.placeShip(index, length)
        for (let i = 0; i < length; i++) {
            expect(board.grid[2][3 + i]).toBeInstanceOf(Object);
        }
        //Check that the ship is added to the ships array
        expect(board.ships.length).toBe(1); 
    })
})

