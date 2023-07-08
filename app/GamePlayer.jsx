"use client"

import React, { useEffect, useState } from 'react';

import movesStringToMovesArray from './utilities';
import ChessboardParent from './ChessboardParent';
import { Chess } from 'chess.js';

function GamePlayer({ game }) {

    const chessGame = new Chess();
    const movesArray = movesStringToMovesArray(game.moves);
    const gameLength = movesArray.length;

    movesArray.map((move) => { chessGame.move(move) })
    const gameHistory = chessGame.history({ verbose: true })
    
    
    const [currentTurn, setCurrentTurn] = useState(0)

   useEffect(() => {
    const playNextTurn = () => {
      if (currentTurn < gameLength) {
        setCurrentTurn(prevTurn => prevTurn + 1);
      }
    };

    const delay = 1000; // Delay between moves in milliseconds

    const timer = setTimeout(playNextTurn, delay);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, [currentTurn, gameLength, movesArray]);
    

    



    
    return (
        <div className='w-[500px] h-[400px]'>
            <div>
                <ChessboardParent fen={gameHistory[currentTurn].before} />
            </div>
            
        </div>
    );
}

export default GamePlayer;