const gameboardFactory = require('../modules/gameboard')
const playerFactory = require('../modules/player')

describe('playerFactory', () => {
    describe('humanPlayerAttack', () => {
        const board = gameboardFactory()
        const player = playerFactory()
        test('function updates myAttacks array', () => {
            player.humanPlayerAttack([2,3], board)
            expect(player.myAttacks[0]).toEqual([2,3])
        })
        test('function updates missedAttacks and successfulAttacks', () => {
            player.humanPlayerAttack([4,4], board)
            board.placeShip([5,5], 1)
            player.humanPlayerAttack([5,5], board)
            expect(board.missedAttacks[1]).toEqual([4,4])
            expect(board.successfulAttacks[0]).toEqual([5,5])
        })
        test('function updates the grid', () => {
            player.humanPlayerAttack([0,0], board)
            expect(board.grid[0][0]).toEqual(0)
        })
    })
})