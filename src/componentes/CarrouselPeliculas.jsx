import React from 'react';
import "../css/Carrousel.css"
import left from "../img/icons/left-arrow-alt-regular-24.png"
import rigth from "../img/icons/right-arrow-alt-regular-24.png"
import Pelicula from './Pelicula';




export default function CarrouselPeliculasRecomendadas({ tipoDePelicula , numCarousel, pelis}){

    

    

    // DESPLAZAMIENTO DEL CARROUSEL
    const izquierda= ()=>{
        document.querySelector(`.contenedor-carousel${numCarousel}`).scrollLeft -= document.querySelector(`.contenedor-carousel${numCarousel}`).offsetWidth
    }

    const derecha = ()=>{
        document.querySelector(`.contenedor-carousel${numCarousel}`).scrollLeft += document.querySelector(`.contenedor-carousel${numCarousel}`).offsetWidth
    }

    

    

    return(
        
        <div id='contenedor' className='arreglo'>
        <div className='contenedor-titulos-controles'>
            <h3>{tipoDePelicula}</h3>
        </div>
        <div  className={"contenedor-principal"}>

            <div className={`contenedor-carousel contenedor-carousel${numCarousel}`}>
                <div className={"carousel"}>
                    
                    { pelis.map((pelicula)=>{
                        return <Pelicula 
                        key={pelicula.id}
                        imagen={pelicula.portada}
                        modal={()=>{
                            if(document.getElementById("cont-modal").classList.contains("modalOn")){
                                document.getElementById("cont-modal").classList.remove("modalOn")
                            }
                            else{
                                document.getElementById("cont-modal").classList.remove("modalOff")
                                document.getElementById("cont-modal").classList.add("modalOn");
                                document.getElementById("modal").querySelector("div h3").innerHTML= pelicula.nombre;
                                document.getElementById("modal").querySelector("div p").innerHTML= pelicula.descripcion;
                                document.getElementById("modal").style.background= `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${pelicula.foto})`;
                                document.getElementById("modal").style.backgroundSize= "cover"
                            }
                        }}/>
                    })}

                </div>
            </div>

            <button onClick={izquierda} className={`flecha-izquierda flecha-izquierda${numCarousel}`}><img src={left} alt=""/></button>

            <button onClick={derecha} className={`flecha-derecha flecha-derecha${numCarousel}`}><img src={rigth} alt=""/></button>
        </div>
    </div>
       
    )


}


