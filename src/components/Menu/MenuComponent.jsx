import React from 'react';
import { NavLink } from 'react-router-dom';
import FilterComponent from './FilterComponent';

const MenuComponent = ({ categories, selectedCategory, onFilterChange }) => {
    return (
        <div className="bg-light py-3 mb-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <nav>
                            <ul className="nav">
                                {/* Uso NavLink para la navegación SPA */}
                                <li className="nav-item">
                                    <NavLink 
                                        to="/series" 
                                        className={({isActive}) => 
                                            `nav-link ${isActive ? 'text-blue' : 'text-dark'}`
                                        }
                                    >
                                        Series
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/populares"
                                        className={({isActive}) => 
                                            `nav-link ${isActive ? 'text-blue' : 'text-dark'}`
                                        }
                                    >
                                        Populares
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-4">
                        <FilterComponent 
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onFilterChange={onFilterChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuComponent;