import React from 'react';
import play from "../img/icons/play.png"
import "../css/informacionPelicula.css"
import {abrirModalStrangerThings} from "./funcionesModal"




export default function InformacionPelicula(props){
    return(
        <div className='cont-info'>
            <img className='logo-nombre' src={props.img}/>
            <p className='info-rapida'>{props.info}</p>
            <div className='cont-botones'>
            <button onClick={abrirModalStrangerThings} className='botonPlay'><div className='contenido-boton'><img src={play}/><p>Reproducir</p></div></button>
            <button className='botonInfo'>Más informacion</button>
            </div>
        </div>
    )
}