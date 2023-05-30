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
        
        board.placeShip([x, y],shipLengths[thisShip])
        
        for (let i = 0; i < shipLengths[thisShip]; i++){
            let shipCell = document.querySelector(`.cell[data-coordinate="[${x+i}, ${y}]"]`)
            shipCell.className = 'ship-cell'
        }

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
            showShips()
        })
    }

    const showShips = () => {
        const preBoardNodeList = document.querySelectorAll(".pre-board .ship-cell")
        const humanBoardNodeList = document.querySelectorAll(".human .cell")
        const shipCells = []

        for(let i = 0; i < preBoardNodeList.length; i++){
            shipCells.push(preBoardNodeList[i].getAttribute('data-coordinate'))
        }

        for(let i = 0; i < humanBoardNodeList.length; i++){
            let node = humanBoardNodeList[i]
            let coordinate = humanBoardNodeList[i].getAttribute('data-coordinate')
            if(shipCells.includes(coordinate)){
                node.className = 'ship-cell'
            }

        }
    }
    return {createCells, insertShip, closeModal, showShips}
});

export default events