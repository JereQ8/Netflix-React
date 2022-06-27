import React from 'react';
import "../css/Carrousel.css"
import left from "../img/icons/left-arrow-alt-regular-24.png"
import rigth from "../img/icons/right-arrow-alt-regular-24.png"
import {abrirModalBeautifulBoy, abrirModalBuscandoANemo, abrirModalElOrigen, abrirModalMujercitas, abrirModalTitanic, abrirModalBajoLaMismaEstrella, abrirModalElSeñorDeLosAnillos, abrirModalJoker, abrirModalLasVentajasDeSerInvisible, abrirModalPiratas, abrirModalWall_e, abrirModalUp, abrirModalToyStory, abrirModalShrek, abrirModalAvatar} from "./funcionesModal"






export default function PeliculasClasicas(props){

    

    


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

                    <div onClick={abrirModalElOrigen} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[0]} alt=""/></a>
                    </div>
                    
                    <div onClick={abrirModalBeautifulBoy} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[1]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalTitanic} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[2]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalMujercitas} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[3]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalBuscandoANemo} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[4]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalAvatar} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[5]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalToyStory} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[6]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalJoker} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[7]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalBajoLaMismaEstrella} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[8]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalWall_e} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[9]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalElSeñorDeLosAnillos} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[10]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalUp} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[11]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalShrek} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[12]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalPiratas} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[13]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalLasVentajasDeSerInvisible} className="pelicula">
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


