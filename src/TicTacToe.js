import './TicTacToe.css';
import {useState} from "react";

function TicTacToe() {
    const emptyBoard = Array(9).fill("");
    const [board, setboard] = useState(emptyBoard)

  return (
      <main>
        <h1 className="title">Jogo da Velha</h1>

          <div className="board">
              {board.map((item, index)=>(
                  <div
                      key={index}
                      className={`cell ${item}`}
                  >
                      {item}
                  </div>
              ))}
          </div>

      </main>
  );
}

export default TicTacToe;
