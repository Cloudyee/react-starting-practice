import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combination";


//우승 조건 나열 작성 => import
// const WINNING_OMINATIONS=[
//     [
//         {row:0, col:0},
//         {row:0, col:1},
//         {row:0, col:2} ...
//     ]
// ];

export default function GameBoard({onSelectSquare, board}){

    return(
        <ol id="game-board">
            {board.map((row, rowIndex)=>
            <li key={rowIndex}>
                <ol>
                    {row.map((playSymbol , colIndex)=>
                        (<li key={colIndex}>
                            <button onClick={()=>onSelectSquare(rowIndex, colIndex)} disabled={playSymbol!==null} >{playSymbol}</button>
                        </li>)
                    )}
                </ol>
            </li>
            )}
        </ol>
    )
}