"use client"
import React from 'react';
import {useSession} from "next-auth/react"


function MyGames(props) {
    const user = useSession({
        
    })

    console.log("mygames user:", user)

    return (
        <div>
            myGames...
        </div>
    );
}

export default MyGames;