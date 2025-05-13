/*function SerieComponent() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src="https://dummyimage.com/400x250/000/fff&text=Law+and+order"
          alt="img" />
        <div className="card-body">
          <h5 className="card-title">Law & orden</h5>
          <p className="card-text">Drama</p>
          <button className="btn btn-primary">Description</button>
        </div>
      </div>
    )
  }
  */

  function SerieComponent(props){
    return (
      <div className="card">
        <img 
          className="card-img-top"
          src={"https://dummyimage.com/400x250/000/fff&txet"+props.imagen} 
          alt="img" />

        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.categoria}</p>
          <button className="btn btn-primary">Description</button>
        </div>
      </div>
    )
  }
  export default SerieComponent;