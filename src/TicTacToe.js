import './TicTacToe.css';
import {useEffect, useState} from "react";
import VeiaR from './assets/img/veia-r.svg'
import VeiaB from './assets/img/veia-b.svg'


function TicTacToe() {
    const emptyBoard = Array(9).fill("");
    const [board, setboard] = useState(emptyBoard)

    const [currentPlayer, setCurrentPlayer] = useState("O")
    const [winner, setWinner] = useState(null)


    const handleCellClick = (index) => {
        if (winner) {
            console.log("jogo finalizado")
            return null
        }
        if (board[index] !== "") return null

        setboard(
            board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item)
        )
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }

    const checkWinner = () => {
        const possibleWaysToWin = [

            [board[0], board[1], board[2]],
            [board[3], board[4], board[5]],
            [board[6], board[7], board[8]],

            [board[0], board[3], board[6]],
            [board[1], board[4], board[7]],
            [board[2], board[5], board[8]],

            [board[0], board[4], board[8]],
            [board[2], board[4], board[6]],

        ];

        possibleWaysToWin.forEach(cells => {
            if (cells.every(cell => cell === "O")) setWinner("O");
            if (cells.every(cell => cell === "X")) setWinner("X");
        })

        checkDraw();

    }

    const checkDraw = () => {
        if (board.every(item => item !== "")) {
            setWinner("E")
        }
    }

    useEffect(checkWinner, [board]);

    const resetGame = () => {
        setCurrentPlayer("O");
        setboard(emptyBoard)
        setWinner(null)
    }


    return (
        <main>

            <header>
                <div>
                    <h1 className="title">JOGO  DA VELHA</h1>
                    <h2>Vez da : <span className={currentPlayer}>{currentPlayer}</span> </h2>
                </div>
                {/*<img className="veia" src={Veia} alt=""/>*/}
                <img className="veia" src={currentPlayer === "X" ? VeiaR : VeiaB } alt=""/>
            </header>

            <div className={`board ${winner ? "game-over" : ""}`}>
                {board.map((item, index) => (
                    <div
                        key={index}
                        className={`cell ${item}`}
                        onClick={() => handleCellClick(index)}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {winner &&
            <div className="resultado">

                {winner === "E" ?
                    <h2>Empatou</h2>
                    :
                   <>
                       <h2>VENCEDORA {winner} </h2>
                       <img className="veia veiaResultado" src={winner === "O" ? VeiaB : VeiaR } alt=""/>
                   </>
                }

                <button onClick={resetGame}>Jogar Novamente</button>
            </div>
            }
        </main>

    );
}

export default TicTacToe;
