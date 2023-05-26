const events = (() => {
    const createCells = (container) => {
        const dimensions = 10
        const board = document.querySelector(container)
        board.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;
    
        let numDivs = dimensions * dimensions;
        for (let i = 0; i < numDivs; i++){
            let cell = document.createElement('div'); //creating cells
            cell.className = 'cell'
            board.insertAdjacentElement("beforeend", cell)//inserting cells into container
        }
    }

    return {createCells}
})();

export {events}