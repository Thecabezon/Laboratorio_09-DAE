import React from 'react';

const FilterComponent = ({ categories, selectedCategory, onFilterChange }) => {
    return (
        <div className="mb-4">
            <h4 className="mb-2">Filtrar por categoría:</h4>
            <div className="btn-group">
                <button
                    className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => onFilterChange('all')}
                >
                    Todas
                </button>
                {categories.map(category => (
                    <button
                        key={category}
                        className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => onFilterChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterComponent;