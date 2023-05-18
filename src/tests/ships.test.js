const shipFactory = require('../modules/ships')

describe('shipFactory', () => {
    describe('isSunk', () => {
        test('returns false when ship is not sunk', () => {
            const myShip = shipFactory(3)
            myShip.hit()
            expect(myShip.isSunk()).toBe(false)
        })
    })
})