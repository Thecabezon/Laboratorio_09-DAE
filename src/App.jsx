import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Añadir esta importación
import HeaderComponent from "./components/HeaderComponent";
import SerieComponent from "./components/SerieComponent";
import FilterComponent from "./components/FilterComponent";

function App() {
  const series = [
    { cod:1, nombre: "Friends", categoria: "Comedy", imagen: "friends.png" },
    { cod:2, nombre: "Law & Order", categoria: "Drama", imagen: "law-and-order.png" },
    { cod:3, nombre: "The Big Bang Theory", categoria: "Comedy", imagen: "the-big-bang-theory.png" },
    { cod:4, nombre: "Stranger Things", categoria: "Terror", imagen: "stranger-things.png" },
    { cod:5, nombre: "Dr. House", categoria: "Drama", imagen: "dr-house.png" },
    { cod:6, nombre: "The X-Files", categoria: "Drama", imagen: "the-x-files.png" },
  ];

  const categories = ['all', ...new Set(series.map(serie => serie.categoria))];
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSeries = selectedCategory === 'all'
    ? series
    : series.filter(serie => serie.categoria === selectedCategory);

  return (
    <Router>
      <div className="container-fluid p-0">
        <HeaderComponent />
        
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={
              <>
                <h1 className="border-bottom pb-3 mb-3">Series</h1>
                <FilterComponent
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onFilterChange={setSelectedCategory}
                />
                <div className="row">
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
            }/>

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;