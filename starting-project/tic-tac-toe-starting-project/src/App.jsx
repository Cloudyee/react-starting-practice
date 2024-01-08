import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./components/winning-combination";

function deriveActivePlayer(gameTurns){
  let currentPlayer='X';
      if(gameTurns.length>0 && gameTurns[0].player==='X'){
        currentPlayer='0';
      }
  return currentPlayer;
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function App() {
  //기존 코드에서 상태 관리를 하나로 리팩터링 해주었다.
  //상태변수의 초기값은 빈 배열이다. => GameBoard에서 버튼을 disabled하는 조건을 여기서 확인 가능하다.
  const[gameTurns, setGameTurns] = useState([]);

  //승자가 있는가의 여부는 gameTurns에 파생되어 있으므로 해당 코드는 굳이 추가할 필요가 없다.
  // const [hasWinner , setHasWinner] = useState();
  
  const activePlayer = deriveActivePlayer(gameTurns);
  
  let gameBoard = initialGameBoard;

  for(const turn of gameTurns){
      const{square, player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }

    let winner;

    for(const combination of WINNING_COMBINATIONS){
      //단계적으로 검토하며 기호를 확인
      //제시된 기호들은 승리하는 경우의 수를 모두 포함함으로
      //아래의 세 단계를 거쳐 승자를 추릴 수 있는 것이다!
      const firstSquareSymbol= gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column];

      //우승 조합의 세가지 버튼이 모두 같은 부호
      if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
        winner=firstSquareSymbol;
      }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex){
    // setActivePlayer((curActivePlayer)=>curActivePlayer==='X'? 'O' : 'X');
    setGameTurns(prevTurns => {
      // const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{square : {row:rowIndex, col:colIndex}, player:activePlayer},
        ...prevTurns];

        return updatedTurns;
    })
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol='X' isActive={activePlayer==='X'}/>
          <Player initialName="player 2" symbol='O' isActive={activePlayer==='O'}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner = {winner}/>}
        <GameBoard 
          onSelectSquare={handleSelectSquare}
          board = {gameBoard}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>  
    )
}

export default App
