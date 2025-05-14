import React from 'react';
import SerieComponent from '../SerieComponent';

const PopularesPage = ({ series, selectedCategory, filteredSeries }) => {
    // Definimos las series populares con un ranking
    const SERIES_POPULARES = [
        { id: 1, ranking: 1 },  // Friends
        { id: 2, ranking: 2 },  // Law & Order
        { id: 3, ranking: 3 },  // Big Bang Theory
    ];

    // Filtramos y ordenamos por ranking
    const seriesPopulares = filteredSeries
        .filter(serie => SERIES_POPULARES.find(pop => pop.id === serie.cod))
        .sort((a, b) => {
            const rankingA = SERIES_POPULARES.find(pop => pop.id === a.cod).ranking;
            const rankingB = SERIES_POPULARES.find(pop => pop.id === b.cod).ranking;
            return rankingA - rankingB;
        });

    return (
        <>
            <h2 className="border-bottom pb-3 mb-3">Series Más Populares</h2>
            {seriesPopulares.length > 0 ? (
                <div className="row">
                    {seriesPopulares.map((serie) => (
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
            ) : (
                <div className="alert alert-info">
                    No hay series populares en la categoría seleccionada.
                </div>
            )}
        </>
    );
};

export default PopularesPage;