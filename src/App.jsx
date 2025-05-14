import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent";
import MenuComponent from "./components/Menu/MenuComponent";
import FooterComponent from "./components/FooterComponent";
import PopularesPage from "./components/Menu/PopularesPage";
import SeriesPage from "./components/Menu/SeriesPage";

function App() {
  const series = [
    { 
      cod: 1, 
      nombre: "Friends", 
      categoria: "Comedy", 
      imagen: "https://image.tmdb.org/t/p/original//2koX1xLkpTQM4IZebYvKysFW1Nh.jpg" 
    },
    { 
      cod: 2, 
      nombre: "Law & Order", 
      categoria: "Drama", 
      imagen: "https://m.media-amazon.com/images/S/pv-target-images/621f2bfd5ccb3a9764946de8e6751cb2198d98e1ffb9d68acc71a10eab7a533e.jpg" 
    },
    { 
      cod: 3, 
      nombre: "The Big Bang Theory", 
      categoria: "Comedy", 
      imagen: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p185554_b_v8_bk.jpg" 
    },
    { 
      cod: 4, 
      nombre: "Stranger Things", 
      categoria: "Terror", 
      imagen: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/09/stranger-things-every-seasons.jpg" 
    },
    { 
      cod: 5, 
      nombre: "Dr. House", 
      categoria: "Drama", 
      imagen: "https://m.media-amazon.com/images/S/pv-target-images/eea7293defc3fdb486e0c1a21cecca80f3ac3e734aab9dc130f48b062929b11c.jpg" 
    },
    { 
      cod: 6, 
      nombre: "The X-Files", 
      categoria: "Drama", 
      imagen: "https://m.media-amazon.com/images/S/pv-target-images/074698dafafa800fc4ce3563ed5d73452ac7c2612bd7a0d2a7ae2229806e68ed.jpg" 
    }
  ];


  const categories = ['all', ...new Set(series.map(serie => serie.categoria))];
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSeries = selectedCategory === 'all'
    ? series
    : series.filter(serie => serie.categoria === selectedCategory);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <HeaderComponent />
        <MenuComponent 
          categories={categories}
          selectedCategory={selectedCategory}
          onFilterChange={setSelectedCategory}
        />
        
        <main className="container flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="/series" replace />} />
            <Route 
              path="/series" 
              element={
                <SeriesPage 
                  series={series}
                  selectedCategory={selectedCategory}
                  filteredSeries={filteredSeries}
                />
              } 
            />
          <Route 
              path="/populares" 
              element={
                  <PopularesPage 
                      series={series}
                      selectedCategory={selectedCategory}
                      filteredSeries={filteredSeries}
                  />
              } 
          />
            <Route 
              path="/categorias" 
              element={
                <div className="p-4">
                  <h2>Página de Categorías</h2>
                  <p>Contenido de categorías en desarrollo...</p>
                </div>
              } 
            />
            <Route 
              path="/favoritos" 
              element={
                <div className="p-4">
                  <h2>Mis Favoritos</h2>
                  <p>Contenido de favoritos en desarrollo...</p>
                </div>
              } 
            />
          </Routes>
        </main>
        
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;