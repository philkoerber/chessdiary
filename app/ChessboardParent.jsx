"use client"

import React, { useEffect } from 'react';
import { Chessboard, FEN, INPUT_EVENT_TYPE, MOVE_INPUT_MODE, COLOR } from "cm-chessboard"
import "./cm-chessboard.css"
import { Chess } from 'chess.js';


function ChessboardParent({ fen }) {
    
    const game = new Chess();

    useEffect(() => {
        const board = new Chessboard(document.getElementById("board1"), {
                position: game.fen()
            })
    }, [])
    
    return (
        <div className='w-[400px] h-[400px]'>
            <div id="board1">
                
            </div>
        </div>
    );
}

export default ChessboardParent;