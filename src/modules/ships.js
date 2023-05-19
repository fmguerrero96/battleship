const shipFactory = (length) => {
    let hits = 0 
    let sunk = false
    let shipLenght = length

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
export default {shipFactory}
module.exports = shipFactory