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
  import React from 'react';

  function SerieComponent(props) {
      return (
          <div className="card">
              <img 
                  className="card-img-top"
                  // Usar directamente la URL de la imagen proporcionada
                  src={props.imagen}
                  alt={props.nombre}
                  // Manejar errores de carga de imagen
                  onError={(e) => {
                      e.target.src = `https://dummyimage.com/400x250/000/fff&text=${props.nombre}`;
                  }}
                  // Asegurar dimensiones consistentes
                  style={{ 
                      height: '250px', 
                      objectFit: 'cover',
                      width: '100%'
                  }}
              />
              <div className="card-body">
                  <h5 className="card-title">{props.nombre}</h5>
                  <p className="card-text">{props.categoria}</p>
                  <button className="btn btn-primary">Description</button>
              </div>
          </div>
      );
  }
  
  export default SerieComponent;