import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}){
    const[playerName, setPlayerName ]=useState(initialName);
    const[ isEditing, setIsEditing ]=useState(false);
    
    function changeNameHandler(event){
        console.log(event);
        //event를 넘겨받는다.
        //event의 targer의 value 는 input창으로 들어온 입력값이다.
        setPlayerName(event.target.value);
        
    }
    
    const eidtingHandler=()=>{
        //상태값을 가장 최신버전으로 보장해준다.
        setIsEditing((editing=>!editing));
        
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    return(
        <li className={isActive?'active':undefined}>
            <span className="player">
                {isEditing ? <input type="text" required value={playerName} onChange={changeNameHandler}/> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={eidtingHandler}>{isEditing ? 'Save':'Edit'}</button>
        </li>
    )
}