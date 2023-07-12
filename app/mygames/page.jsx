"use client"
import React from 'react';

function MyGames(props) {

    const createUser = async () => {
        
    }

    return (
        <div>
            <button
                className="bg-transparent hover:bg-white border-black font-semibold py-2 px-4 border rounded-sm"
                onClick={createUser}>
  createuser
</button>
        </div>
    );
}

export default MyGames;