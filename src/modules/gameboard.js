import shipFactory from (shipFactory)

const gameboardFactory = () => {
    const grid = []
    const ships = []
    const missedAttacks = []

    const populateGrid = (size) => {
        let rows = size
        let cols = size
        for(let i = 0; i < rows; i++){
            grid[i] = [];
            for(let j = 0; j < cols; j++){
                grid[i][j] = null
            }
        }
        if (grid.length === 0){
            populateGrid(10)
        }
    }



}