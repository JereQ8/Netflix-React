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



// if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

// }
// else{
//  document.querySelector(".cont-modal").classList.add("cont-modalOn");
//  document.querySelector(".tituloModal").innerHTML= `${peliculas[0].nombre}`;
//  document.querySelector(".descripcionModal").innerHTML=`${peliculas[0].descripcion}`;
//  document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[0].foto})`;
//  document.querySelector(".modal").style.backgroundSize="cover"
// }
















// <div onClick={abrirModalBatman} className="pelicula">
//                         <a href="#contenedor"><img src={props.pelis[0]} alt=""/></a>
//                     </div>
                    
//                     <div onClick={abrirModalTopGun} className="pelicula">
//                         <a href="#contenedor"><img src={props.pelis[1]} alt=""/></a>
//                     </div>
//                     <div onClick={abrirModalCapitanAmerica} className="pelicula">
//                         <a href="#contenedor"><img src={props.pelis[2]} alt=""/></a>
//                     </div>
//                     <div onClick={abrirModaJurassicWorld} className="pelicula">
//                         <a  href="#contenedor"><img src={props.pelis[3]} alt=""/></a>
//                     </div>
//                     <div onClick={abrirModalHarryPotter} className="pelicula">
//                         <a  href="#contenedor"><img src={props.pelis[4]} alt=""/></a>
//                     </div>
//                     <div onClick={abrirModalElRenacido} className="pelicula">
//                         <a  href="#contenedor"><img src={props.pelis[5]} alt=""/></a>
//                     </div>
//                     <div onClick={abrirModalMrFox} className="pelicula">
//                         <a  href="#contenedor"><img src={props.pelis[6]} alt=""/></a>
//                     </div>
//                     <div onClick={abrirModalIslaDePerros} className="pelicula">
//                         <a  href="#contenedor"><img src={props.pelis[7]} alt=""/></a>
//                     </div>
//                     <div onClick={abrirModalInterstellar} className="pelicula">
//                         <a  href="#contenedor"><img src={props.pelis[8]} alt=""/></a>
//                     </div>
//                     <div onClick={abrirModalLifeOfPi} className="pelicula">
//                         <a  href="#contenedor"><img src={props.pelis[9]} alt=""/></a>
//                     </div>
//                     <div onClick={abrirModalElGranHotelBudapest} className="pelicula">
//                         <a  href="#contenedor"><img src={props.pelis[10]} alt=""/></a>
//                     </div>
//                     <div onClick={abrirModalKnivesOut} className="pelicula">
//                         <a href="#contenedor"><img src={props.pelis[11]} alt=""/></a>
//                     </div>
//                     <div onClick={abrirModalLaPasionDeCristo} className="pelicula">
//                         <a  href="#contenedor"><img src={props.pelis[12]} alt=""/></a>
//                     </div>
//                     <div onClick={abrirModalStarWars} className="pelicula">
//                         <a  href="#contenedor"><img src={props.pelis[13]} alt=""/></a>
//                     </div>
//                     <div onClick={abrirModalDrStrange} className="pelicula">
//                         <a   href="#contenedor"><img src={props.pelis[14]} alt=""/></a>
//                     </div>
//                     d