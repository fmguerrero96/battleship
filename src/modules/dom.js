const events = ((board) => {
    const shipLengths = [5, 4, 3, 3, 2];
    let thisShip = 0

    const createCells = (container) => {
        const dimensions = 10
        const board = document.querySelector(container)
        board.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;
    
        let numDivs = dimensions * dimensions;
        for (let i = 0; i < numDivs; i++){
            let cell = document.createElement('div'); 
            cell.className = 'cell'
            const x = i % dimensions; // Calculate x coordinate
            const y = Math.floor(i / dimensions); // Calculate y coordinate
            cell.setAttribute('data-coordinate', `[${x}, ${y}]`)
            board.insertAdjacentElement("beforeend", cell)
        }
    }

    const retrieveCoordinates = (event) => {
        const clickedCell = event.target
        const coordinates = clickedCell.getAttribute('data-coordinate')
        const [x, y] = JSON.parse(coordinates)

        for (let i = 0; i < shipLengths[thisShip]; i++){
            let shipCell = document.querySelector(`.cell[data-coordinate="[${x+i}, ${y}]"]`)
            shipCell.className = 'ship-cell'
        }
        
        board.placeShip([x, y],shipLengths[thisShip])
        thisShip++

        if (thisShip >= shipLengths.length) {
            const preBoard = document.querySelector('.pre-board');
            preBoard.removeEventListener('click', retrieveCoordinates);
          }
    }

    const insertShip = () => {
        const preBoard = document.querySelector('.pre-board')
        preBoard.addEventListener('click', (retrieveCoordinates))
    }

    const closeModal = () => {
        const begin = document.querySelector('.begin')
        const welcomeScreen = document.querySelector('.welcomeScreen')
        begin.addEventListener('click', () => {
            welcomeScreen.close()
        })
    }

    return {createCells, insertShip, closeModal}
});

export default events