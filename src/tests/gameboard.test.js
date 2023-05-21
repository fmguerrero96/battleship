const gameboardFactory = require('../modules/gameboard')

describe('gameboardFactory', () => {
    const board = gameboardFactory()
    test('places ship on gameboard at the given coordinates', () => {
        const length = 3
        const index = [2, 3]
        board.placeShip(index, length)
        expect(board.grid[2][3]).toBeInstanceOf(Object);
        expect(board.grid[2][4]).toBeInstanceOf(Object); 
        expect(board.grid[2][5]).toBeInstanceOf(Object);
        //Check that the ship is added to the ships array
        expect(board.ships.length).toBe(1); 
    })
    test('cannot place ship on occupied spots', () => {
        const length = 2
        const index = [2, 3]
        expect(() => board.placeShip(index, length)).toThrowError('Cannot place ship on an occupied spot')
    })
})

