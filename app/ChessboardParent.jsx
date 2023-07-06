"use client"

import React, { useEffect } from 'react';
import {Chessboard, FEN, INPUT_EVENT_TYPE, MOVE_INPUT_MODE, COLOR} from "cm-chessboard"


function ChessboardParent(props) {

    useEffect(() => {
        const board = new Chessboard(document.getElementById("board1"), {
                position: FEN.start
            })
    }, [])
    
    return (
        <div>
            <div id="board1">
                
            </div>
        </div>
    );
}

export default ChessboardParent;