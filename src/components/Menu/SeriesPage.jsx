import React from 'react';
import SerieComponent from '../SerieComponent'; // Importamos SerieComponent

const SeriesPage = ({ series, selectedCategory, filteredSeries }) => {
    return (
        <>
            <h2 className="border-bottom pb-3 mb-3">Todas las Series</h2>
            <div className="row">
                {/* Usamos SerieComponent para mostrar cada serie */}
                {filteredSeries.map((serie) => (
                    <div key={serie.cod} className="col-md-4 mb-4">
                        <SerieComponent
                            codigo={serie.cod}
                            nombre={serie.nombre}
                            categoria={serie.categoria}
                            imagen={serie.imagen}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SeriesPage;