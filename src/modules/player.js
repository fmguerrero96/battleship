import gameboard from "./gameboard"

const playerFactory = (playerType) => {
    let isMyTurn = null
    let myAttacks = []

    const humanPlayerAttack = (coordinates, board) => {
        if (board.isValidAttack(coordinates)){
            board.receiveAttack(coordinates)
        }
        myAttacks.push(coordinates)
    }

    const getRandomCoordinates = () => {
        let x = Math.floor(Math.random() * 10)
        let y = Math.floor(Math.random() * 10)
        return [x, y]
    }

    const computerPlayerAttack = (coordinates, board) =>{

    }

    const attack = playerType === "human" ? humanPlayerAttack : computerPlayerAttack;

    return{humanPlayerAttack, computerPlayerAttack, attack, isMyTurn}
}

export default {playerFactory}
module.exports = playerFactory