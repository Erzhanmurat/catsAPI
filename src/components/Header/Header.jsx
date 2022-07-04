import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="mb-6">
            <nav className="navbar bg-white border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center lg:order-2">
                        <NavLink to="/"
                           className="text-gray-800 text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Все котики</NavLink>
                        <NavLink to="/favorites"
                           className="text-gray-800 text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Любимые котики</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;