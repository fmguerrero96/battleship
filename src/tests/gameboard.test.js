const gameboardFactory = require('../modules/gameboard')

describe('gameboardFactory', () => {
    describe('placeShip', () => {
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
            const length = 4
            const index = [2, 3]
            expect(() => board.placeShip(index, length)).toThrowError('Cannot place ship on an occupied spot')
        })
    })
    
    describe('receiveAttack', () => {
        test('if attack misses, missedAttacks array is updated', () => {
            const board = gameboardFactory()
            const coordinates = [4,3]
            board.receiveAttack(coordinates)
            expect(board.missedAttacks.length).toBe(1)
        })
        test('if attack misses, grid will be 0 at coordinates', () => {
            const board = gameboardFactory()
            const coordinates = [4,3]
            board.receiveAttack(coordinates)
            expect(board.grid[4][3]).toEqual(0)
        })
    })
})

