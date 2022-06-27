import React from 'react';
import "../css/Carrousel.css"
import left from "../img/icons/left-arrow-alt-regular-24.png"
import rigth from "../img/icons/right-arrow-alt-regular-24.png"
import {abrirModalBatman, abrirModaJurassicWorld, abrirModalHarryPotter, abrirModalCapitanAmerica, abrirModalTopGun, abrirModalDrStrange, abrirModalElGranHotelBudapest, abrirModalElRenacido, abrirModalInterstellar, abrirModalIslaDePerros, abrirModalKnivesOut, abrirModalLaPasionDeCristo, abrirModalLifeOfPi, abrirModalMrFox, abrirModalStarWars} from "./funcionesModal"




export default function CarrouselPeliculasRecomendadas(props){

    

    

    // DESPLAZAMIENTO DEL CARROUSEL
    const izquierda= ()=>{
        document.querySelector(`.contenedor-carousel${props.numCarousel}`).scrollLeft -= document.querySelector(`.contenedor-carousel${props.numCarousel}`).offsetWidth
    }

    const derecha = ()=>{
        document.querySelector(`.contenedor-carousel${props.numCarousel}`).scrollLeft += document.querySelector(`.contenedor-carousel${props.numCarousel}`).offsetWidth
    }

    

    

    return(
        
        <div id='contenedor' className='arreglo'>
        <div className='contenedor-titulos-controles'>
            <h3>{props.tipoDePelicula}</h3>
        </div>
        <div  className={"contenedor-principal"+ props.numCarousel}>

            <div className={"contenedor-carousel"+ props.numCarousel}>
                <div className={"carousel"+props.numCarousel}>

                    <div onClick={abrirModalBatman} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[0]} alt=""/></a>
                    </div>
                    
                    <div onClick={abrirModalTopGun} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[1]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalCapitanAmerica} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[2]} alt=""/></a>
                    </div>
                    <div onClick={abrirModaJurassicWorld} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[3]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalHarryPotter} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[4]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalElRenacido} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[5]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalMrFox} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[6]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalIslaDePerros} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[7]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalInterstellar} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[8]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalLifeOfPi} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[9]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalElGranHotelBudapest} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[10]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalKnivesOut} className="pelicula">
                        <a href="#contenedor"><img src={props.pelis[11]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalLaPasionDeCristo} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[12]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalStarWars} className="pelicula">
                        <a  href="#contenedor"><img src={props.pelis[13]} alt=""/></a>
                    </div>
                    <div onClick={abrirModalDrStrange} className="pelicula">
                        <a   href="#contenedor"><img src={props.pelis[14]} alt=""/></a>
                    </div>
                    d

                </div>
            </div>

            <button onClick={izquierda} className={"flecha-izquierda"+ props.numCarousel}><img src={left} alt=""/></button>

            <button onClick={derecha} className={"flecha-derecha"+props.numCarousel}><img src={rigth} alt=""/></button>
        </div>
    </div>
       
    )


}


