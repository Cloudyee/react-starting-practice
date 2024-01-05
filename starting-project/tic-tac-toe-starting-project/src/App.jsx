import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {
  const info={
    name:'하이하이',
    symbol:'O'
  }

  
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName={info.name} symbol={info.symbol}/>
          <Player initialName={info.name} symbol={info.symbol}/>
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>  
    )
}

export default App
