import SerieComponent from "./components/SerieComponent"
/*
function App() {
  return (
    <div className="container mt-3">
      <h1 className="border-bottom pb-3 mb-3">Series</h1>
      <div className="row">
        <div className="col-md-4">
          <SerieComponent
            codigo="1"
            nombre="Friends"
            categoria="Comedy"
            imagen="friends.png"
          />
        </div>
        <div className="col-md-4">
          <SerieComponent
            codigo="2"
            nombre="Law & Order"
            categoria="Drama"
            imagen="law-and-order.png"
          />
        </div>
        <div className="col-md-4">
          <SerieComponent
            codigo="3"
            nombre="The Big Bang Theory"
            categoria="Comedy"
            imagen="the-big-bang-theory.png"
          />
        </div>
      </div>
    </div>
  )
}*/

function App() {
  const series = [
    { cod:1, nombre: "Friends", categoria: "Comedy", imagen: "friends.png" },
    { cod:2, nombre: "Law & Order", categoria: "Drama", imagen: "law-and-order.png" },
    { cod:3, nombre: "The Big Bang Theory", categoria: "Comedy", imagen: "the-big-bang-theory.png" },
    { cod:4, nombre: "Stranger Things", categoria: "Terror", imagen: "stranger-things.png" },
    { cod:5, nombre: "Dr. House", categoria: "Drama", imagen: "dr-house.png" },
    { cod:6, nombre: "The X-Files", categoria: "Drama", imagen: "the-x-files.png" },
    
  ];
  return (
    <div className="container mt-3">
      <h1 className="border-bottom pb-3 mb-3">Series</h1>
      <div className="row">
        {series.map((serie) => (
          <div key={serie.cod} className="col-md-4" >
            <SerieComponent
              codigo={serie.cod}
              nombre={serie.nombre}
              categoria={serie.categoria}
              imagen={serie.imagen}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App