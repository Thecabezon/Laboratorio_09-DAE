import SerieComponent from "./components/SerieComponent"

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
}

export default App