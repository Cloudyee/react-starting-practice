import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { useState } from "react"

function App() {
  const [activePlayer, setActivePlayer] =useState('X');
  const[gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((curActivePlayer)=>curActivePlayer==='X'? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer='X';
      if(prevTurns>0 && prevTurns[0].player==='X'){
        currentPlayer='0';
      }

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
      <Log />
    </main>  
    )
}

export default App
