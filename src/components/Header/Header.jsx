import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="mb-6">
            <nav className="navbar bg-white px-4 lg:px-6">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center lg:order-2">
                        <NavLink to="/"
                                 className="text-white font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Все
                            котики</NavLink>
                        <NavLink to="/favorites"
                                 className="text-white font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Любимые
                            котики</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;