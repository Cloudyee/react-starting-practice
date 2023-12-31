import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./components/winning-combination";

const PLAYERS={
  X:'Player 1',
  O:'Plyaer 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns){
  let currentPlayer='X';
      if(gameTurns.length>0 && gameTurns[0].player==='X'){
        currentPlayer='O';
      }
  return currentPlayer;
}

//승자를 가리는 로직을 메서드로 독립
function deriveWinner(gameBoard, players){
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
      winner=players[firstSquareSymbol];

      return winner;
    }
  }
}

function deriveGameBoard(gameTurns){
    //기존 배열에 새로운 배열을 덮어 씌위도록 설정
    let gameBoard = [...INITIAL_GAME_BOARD.map(array=> [...array])];

    for(const turn of gameTurns){
        const{square, player} = turn;
        const {row, col} = square;
  
        gameBoard[row][col] = player;
    }

    return gameBoard;
}

function App() {
  const [players , setPlayers]= useState(PLAYERS);
  //기존 코드에서 상태 관리를 하나로 리팩터링 해주었다.
  //상태변수의 초기값은 빈 배열이다. => GameBoard에서 버튼을 disabled하는 조건을 여기서 확인 가능하다.
  const[gameTurns, setGameTurns] = useState([]);

  //승자가 있는가의 여부는 gameTurns에 파생되어 있으므로 해당 코드는 굳이 추가할 필요가 없다.
  // const [hasWinner , setHasWinner] = useState();
  
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns(prevTurns => {
      const updatedTurns = [{square : {row:rowIndex, col:colIndex}, player:activePlayer},
        ...prevTurns];

        return updatedTurns;
    })
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]:newName
      }
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol='X' isActive={activePlayer==='X'} onChangeName={handlePlayerNameChange}/>
          <Player initialName={PLAYERS.O} symbol='O' isActive={activePlayer==='O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner = {winner} onRestart={handleRestart}/>}
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
