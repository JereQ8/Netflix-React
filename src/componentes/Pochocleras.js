import React from 'react';
import "../css/Carrousel.css"
import left from "../img/icons/left-arrow-alt-regular-24.png"
import rigth from "../img/icons/right-arrow-alt-regular-24.png"
import {abrirModalBusquedaImplacable, abrirModalLosSimpsons, abrirModalMisionImposible, abrirModalOnward, abrirModalSpidermanNoWayHome, abrirModalContraTiempo, abrirModalCuestionDeTiempo, abrirModalDivergente, abrirModalJuegosDelHambre, abrirModalTransformers, abrirModalSpiderManSpiderVerse, abrirModalRedNotice, abrirModalParasitos, abrirModalMilagro, abrirModalOrgulloYPrejuicio} from "./funcionesModal"



export default function Pochocleras(props){

    

    


    // DESPLAZAMIENTO DEL CARROUSEL
    const izquierda= ()=>{
        document.querySelector(`.contenedor-carousel${props.numCarousel}`).scrollLeft -= document.querySelector(`.contenedor-carousel${props.numCarousel}`).offsetWidth
    }

    const derecha = ()=>{
        document.querySelector(`.contenedor-carousel${props.numCarousel}`).scrollLeft += document.querySelector(`.contenedor-carousel${props.numCarousel}`).offsetWidth
    }

    

    

    return(
        
        <div className='arreglo'>
        <div className='contenedor-titulos-controles'>
            <h3>{props.tipoDePelicula}</h3>
        </div>
        <div id='contenedor' className={"contenedor-principal"+ props.numCarousel}>

            <div className={"contenedor-carousel"+ props.numCarousel}>
                <div className={"carousel"+props.numCarousel}>

                    <div onClick={abrirModalMisionImposible} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[0]} alt=""/></a>
                    </div>
                    
                    <div onClick={abrirModalBusquedaImplacable} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[1]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalSpidermanNoWayHome} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[2]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalOnward} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[3]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalLosSimpsons} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[4]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalRedNotice} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[5]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalParasitos} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[6]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalMilagro} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[7]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalContraTiempo} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[8]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalSpiderManSpiderVerse} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[9]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalTransformers} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[10]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalDivergente} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[11]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalJuegosDelHambre} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[12]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalOrgulloYPrejuicio} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[13]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalCuestionDeTiempo} className="pelicula">
                        <a   href="#contenedor"><img src={props.pelis[14]} alt=""/></a>
                    </div>
                    

                </div>
            </div>

            <button onClick={izquierda} className={"flecha-izquierda"+ props.numCarousel}><img src={left} alt=""/></button>

            <button onClick={derecha} className={"flecha-derecha"+props.numCarousel}><img src={rigth} alt=""/></button>
        </div>
    </div>
       
    )


}


