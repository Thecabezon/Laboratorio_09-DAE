import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Series App</h5>
                        <p>Tu plataforma de series favorita</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Enlaces Rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Inicio</a></li>
                            <li><a href="/categorias" className="text-white">Categorías</a></li>
                            <li><a href="/favoritos" className="text-white">Favoritos</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                    <h5>Síguenos</h5>
                    <div className="d-flex gap-3">
                        <a  className="text-white">
                        <i className="fab fa-facebook-f"></i>
                        </a>
                        <a  className="text-white">
                        <i className="fab fa-twitter"></i>
                        </a>
                        <a  className="text-white">
                        <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    </div>

                </div>
                <div className="text-center mt-3">
                    <p className="mb-0">© 2025 Series App. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;