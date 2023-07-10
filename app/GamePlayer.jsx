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
      <div className='w-[600px] h-[400px] rounded-sm bg-gradient-to-b from-gray-300 to-gray-200 flex shadow-sm p-2'>
        

        <div className='h-[100%] flex flex-col w-[56%]'>
          <div className='flex-none flex items-center justify-center text-xl font-bold'>
            {game.players.black.name}
          </div>
          <div className='w-[100%] flex-1 flex items-center justify-center p-2'>
            <ChessboardParent fen={gameHistory[currentTurn].before} boardId={boardId}/>
          </div>
          <div className='flex-none flex items-center justify-center text-xl font-bold'>
            {game.players.white.name}
          </div>
          
        </div>


        <div className='h-[100%] w-[40%] flex flex-col'>
          <div>
            <p className='text-sm text-right flex-1'>{game.opening.name}</p>
          </div>
          
          
          <div className='flex-1 flex items-center'>
            <div className="h-8 w-8 rounded-md flex justify-center items-center bg-white cursor-pointer">
              
            </div>
          </div>
          
          
          
            </div>
            
        </div>
    );
}

export default GamePlayer;