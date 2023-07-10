import React from 'react';
import {BiUserCircle} from "react-icons/bi"

function Header() {
    return (
        <div className="bg-gray-900 py-4">
            <div className="flex items-center justify-between px-8">
                <div>
                    <h1 className="text-white text-2xl font-bold">Chess Web App</h1>
                </div>
                <div className="space-x-8 flex justify-center items-center">
                    <a
                        href="/"
                        className="text-white hover:text-gray-300"
                    >
                        Home
                    </a>
                    <a
                        href="/browse"
                        className="text-white hover:text-gray-300"
                    >
                        Browse
                    </a>
                    <a
                        href="/mygames"
                        className="text-white hover:text-gray-300"
                    >
                        My Games
                    </a>
                    <a
                        href="/profile"
                        className="text-white hover:text-gray-300"
                    >
                        <BiUserCircle className='text-5xl'/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;