import React from 'react'
import "../css/modal.css"



const cerrarModal= () =>{
    if(document.getElementById("cont-modal").classList.contains("modalOn")){
        document.getElementById("cont-modal").classList.remove("modalOn")
        document.getElementById("cont-modal").classList.add("modalOff")
    }

}

function Modal() {
  return (
    <div className='modalOff' id='cont-modal'>
        <div id='modal'>
            <div>
            <button className='cerrarModal' onClick={cerrarModal}>X</button>
            <h3 className='tituloPelicula'>Titulo</h3>
            <p className='descripcionPelicula'>Descripcion peli</p>
            <button className='reproducirPelicula'>Reproducir</button>
            <button className='configuracionPelicula'>Configuracion</button>
            <button className='informacionPelicula'>Informacion</button>
            </div>
        </div>
    </div>
  )
}

export default Modal