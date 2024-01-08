import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { useState } from "react"

function deriveActivePlayer(gameTurns){
  let currentPlayer='X';
      if(gameTurns.length>0 && gameTurns[0].player==='X'){
        currentPlayer='0';
      }
  return currentPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] =useState('X');
  //기존 코드에서 상태 관리를 하나로 리팩터링 해주었다.
  //상태변수의 초기값은 빈 배열이다. => GameBoard에서 버튼을 disabled하는 조건을 여기서 확인 가능하다.
  const[gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

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
        <GameBoard 
          onSelectSquare={handleSelectSquare}
          turns = {gameTurns}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>  
    )
}

export default App
