import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <header className="bg-dark text-white py-4">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        
                        <h1 className="h4 mb-0">Series App</h1>
                    </div>

                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'text-warning' : 'text-white'}`
                                    }
                                >
                                    Inicio
                                </NavLink>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;