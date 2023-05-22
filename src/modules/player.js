const playerFactory = (playerType) => {
    let isMyTurn = null
    let myAttacks = []

    const humanPlayerAttack = (coordinates, board) => {
        if (board.isValidAttack(coordinates)){
            board.receiveAttack(coordinates)
        }
        myAttacks.push(coordinates)
        isMyTurn = false
    }

    const getRandomCoordinates = () => {
        let x = Math.floor(Math.random() * 10)
        let y = Math.floor(Math.random() * 10)
        return [x, y]
    }

    const computerPlayerAttack = (board) => {
        const coordinates = getRandomCoordinates()
        while(!board.isValidAttack(coordinates)){
            coordinates = getRandomCoordinates
        }
        board.receiveAttack(coordinates)
        myAttacks.push(coordinates)
        isMyTurn = false
    }

    const attack = playerType === "human" ? humanPlayerAttack : computerPlayerAttack;

    return{humanPlayerAttack, computerPlayerAttack, attack, isMyTurn,
           myAttacks}
}

export default {playerFactory}
module.exports = playerFactory