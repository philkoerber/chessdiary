"use client"

import React, { useEffect, useRef } from 'react';
import { Chessboard } from 'cm-chessboard';
import './cm-chessboard.css';
import { Chess } from 'chess.js';

function ChessboardParent({ fen, boardId }) {
  const game = new Chess(fen);
    const boardRef = useRef(null); // Create a ref for the Chessboard instance

    

  useEffect(() => {
    const board = new Chessboard(document.getElementById(boardId), {
      position: game.fen(),
    });
    boardRef.current = board; // Store the Chessboard instance in the ref
  }, []);
    
    useEffect(() => {
      boardRef.current.setPosition(fen, true)
  },[fen])

  return (
    <div className='w-full h-full'>
      <div id={boardId}></div>
      
    </div>
  );
}

export default ChessboardParent;