"use client"

import React, { useEffect, useState } from 'react';

import movesStringToMovesArray from './utilities';
import ChessboardParent from './ChessboardParent';
import { Chess } from 'chess.js';

function GamePlayer({ game, boardId }) {

    const [playButton, setPlayButton] = useState(true) //true if playing, false when pause

    const chessGame = new Chess();
  
    const movesArray = movesStringToMovesArray(game.moves);
    const gameLength = movesArray.length;

    movesArray.map((move) => { chessGame.move(move) })
    const gameHistory = chessGame.history({ verbose: true })
  
    console.log(game)
    
    
    const [currentTurn, setCurrentTurn] = useState(0)

   useEffect(() => {
    const playNextTurn = () => {
      if (currentTurn < gameLength-1) {
        setCurrentTurn(prevTurn => prevTurn + 1);
      }
    };

     
    const delay = 1000+(Math.random()*400);
    const timer = setTimeout(playNextTurn, delay);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, [currentTurn]);
    

    



    
    return (
      <div className='w-[800px] h-[400px] rounded-sm bg-slate-600 flex shadow-xl'>
        

        <div className='h-[100%] aspect-square flex flex-col flex-1'>
          <div className='h-[10%]'>
            {game.players.black.name}
          </div>
          <div className='h-[88%] w-[88%]'>
            <ChessboardParent fen={gameHistory[currentTurn].before} boardId={boardId}/>
          </div>
          <div className='h-[10%]'>
            {game.players.white.name}
          </div>
          
        </div>


        <div className='h-[100%] aspect-square flex-1'>
                okcool
            </div>
            
        </div>
    );
}

export default GamePlayer;