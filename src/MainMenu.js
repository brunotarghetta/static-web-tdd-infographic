import React  from 'react';

export const Menu = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
                <a class="navbar-brand" href="#SectionInformafia">TDD-Infografia</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#SectionQueEs">Que es?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#SectionCiclo">Ciclo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#SectionEjemplo">Ejemplo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#SectionLeyes">Leyes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#SectionFirst">F.I.R.S.T.</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#SectionVentajas">Ventajas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#SectionDesdeventajas">Desventajas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#SectionHerramientas">Herramientas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#SectionTestSmell">Test Smell</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
    
}