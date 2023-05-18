const shipFactory = (length) => {
    let hits = 0 
    let sunk = false

    const hit = () => {
        hits += 1
        return hits
    }

    const isSunk = () => {
        if(hits === length){
            sunk = true
        }
        return sunk
    }

    return {hit, isSunk}
}

module.exports = shipFactory