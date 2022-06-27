import React from 'react';
import "../css/Carrousel.css"
import left from "../img/icons/left-arrow-alt-regular-24.png"
import rigth from "../img/icons/right-arrow-alt-regular-24.png"
import {abrirModalAnne,abrirModalElite,abrirModalLosVengadores,abrirModalNarcos,abrirModalStrangerThings, abrirModalArrow, abrirModalDark, abrirModalFlash, abrirModalGambitoDeDama, abrirModalLaCasaDePapel, abrirModalLupin, abrirModalPeakyBlinders, abrirModalRiverdale, abrirModalVikingos, abrirModalUmbrellaAcademy} from "./funcionesModal"





export default function CarrouselSeriesRecomendadas(props){

    

    


    // DESPLAZAMIENTO DEL CARROUSEL
    const izquierda= ()=>{
        document.querySelector(`.contenedor-carousel${props.numCarousel}`).scrollLeft -= document.querySelector(`.contenedor-carousel${props.numCarousel}`).offsetWidth
    }

    const derecha = ()=>{
        document.querySelector(`.contenedor-carousel${props.numCarousel}`).scrollLeft += document.querySelector(`.contenedor-carousel${props.numCarousel}`).offsetWidth
    }

    

    

    return(
        
        <div id="contenedor" className='arreglo'>
        <div className='contenedor-titulos-controles'>
            <h3>{props.tipoDePelicula}</h3>
        </div>
        <div className={"contenedor-principal"+ props.numCarousel}>

            <div className={"contenedor-carousel"+ props.numCarousel}>
                <div className={"carousel"+props.numCarousel}>

                    <div onClick={abrirModalStrangerThings} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[0]} alt=""/></a>
                    </div>
                    
                    <div onClick={abrirModalAnne} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[1]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalElite} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[2]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalNarcos} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[3]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalLosVengadores} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[4]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalPeakyBlinders} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[5]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalArrow} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[6]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalGambitoDeDama} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[7]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalDark} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[8]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalLaCasaDePapel} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[9]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalUmbrellaAcademy} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[10]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalVikingos} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[11]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalFlash} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[12]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalLupin} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[13]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalRiverdale} className="pelicula">
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


