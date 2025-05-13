import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container mt-3">
      <h1 className="border-bottom pb-3 mb-3">Series</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img 
              className="card-img-top" 
              src="https://dummyimage.com/400x250/000/fff&text=Friends" 
              alt="img" />
            <div className="card-body">
              <h5 className="card-title">Friends</h5>
              <p className="card-text">Comedy</p>
              <button className="btn btn-primary">Description</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
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
        </div>
        <div className="col-md-4">
          <div className="card">
            <img 
              className="card-img-top" 
              src="https://dummyimage.com/400x250/000/fff&text=The+Big+Bang+Theory" 
              alt="img" />
            <div className="card-body">
              <h5 className="card-title">The Big Bang Theory</h5>
              <p className="card-text">Comedy</p>
              <button className="btn btn-primary">Description</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
