import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({onSelectSquare, turns}){
    let gameBoard = initialGameBoard;
    for(const turn of turns){
        const{square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    // const[gameBoard , setGameBoard]= useState(initialGameBoard);
    // 
    // function handelSelectSquare (rowIndex, colIndex){
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
    //         updatedBoard[rowIndex][colIndex]= activePlayerSymbol;
    //         return updatedBoard;
    //     });
    //     onSelectSquare();
    // }


    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex)=>
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