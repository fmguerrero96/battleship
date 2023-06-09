const gameboardFactory = require('../modules/gameboard')

describe('gameboardFactory', () => {
    describe('placeShip', () => {
        const board = gameboardFactory()
        test('places ship on gameboard at the given coordinates', () => {
        const length = 3
        const index = [2, 3]
        board.placeShip(index, length)
        expect(board.grid[2][3]).toBeInstanceOf(Object);
        expect(board.grid[3][3]).toBeInstanceOf(Object); 
        expect(board.grid[4][3]).toBeInstanceOf(Object);
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
            const coordinates = [2,3]
            board.receiveAttack(coordinates)
            expect(board.grid[2][3]).toEqual(0)
        })
        test('if attack hits, the ship will register the hit', () => {
            const board = gameboardFactory()
            const length = 3
            const index = [2, 3]
            board.placeShip(index, length)
            board.receiveAttack(index)
            expect(board.ships[0].hit()).toBe(2)
            /*The ship was only hit once, but I called the hit function again
            so that it would return a value. So the ship was hit once inside 
            the receive attack function and once more in the 'expect' line.
            Ultimately the function works as expected and the test passed*/
             
        })
        test('attack will sink a ship', () => {
            const board = gameboardFactory()
            const length = 3
            const index = [2, 3]
            board.placeShip(index, length)
            board.receiveAttack(index)
            board.receiveAttack(index)
            board.receiveAttack(index)
            expect(board.ships[0].isSunk()).toBe(true)
        })
    })

    describe('allsShipsSunk', () => {
        const board = gameboardFactory()
        board.placeShip([2, 3], 3)
        test('returns false if all ships are not sunk', () => {
            expect(board.allShipsSunk()).toBe(false)
        })

        test('returns true if all ships are sunk', () => {
            board.receiveAttack([2, 3])
            board.receiveAttack([3, 3])
            board.receiveAttack([4, 3])
            expect(board.allShipsSunk()).toBe(true)
        })
    })

    describe('placeRandomShips', () => {
        test('places all ships on the gameboard without overlap', () => {
          const aiGameboard = gameboardFactory();
          aiGameboard.placeRandomShips();
      
          // Assert that all ships are placed
          expect(aiGameboard.getShips().length).toEqual(5);
      
          // Assert that ships do not overlap
          const coordinatesOccupied = new Set();
          const grid = aiGameboard.getGrid();
          for (let x = 0; x < grid.length; x++) {
            for (let y = 0; y < grid[x].length; y++) {
              const cell = grid[x][y];
              if (cell !== null) {
                const coordinate = JSON.stringify([x, y]);
                expect(coordinatesOccupied.has(coordinate)).toBe(false);
                coordinatesOccupied.add(coordinate);
              }
            }
          }
        });
      });
})

