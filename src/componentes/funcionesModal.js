import peliculas from "../helpers/peliculasRecomendadas.json"
import PeliculasClasicas from "../helpers/peliculasClasicas.json";
import Pochocleras from "../helpers/pochocleras.json";
import SeriesRecomendadas from "../helpers/seriesRecomendadas.json"














/*


                        PELICULAS RECOMENDADAS


*/
const abrirModalBatman= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${peliculas[0].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${peliculas[0].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[0].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalTopGun= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${peliculas[1].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${peliculas[1].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[1].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalCapitanAmerica= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${peliculas[2].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${peliculas[2].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[2].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModaJurassicWorld= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${peliculas[3].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${peliculas[3].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[3].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalHarryPotter= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${peliculas[4].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${peliculas[4].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[4].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   

}

 const abrirModalElRenacido= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${peliculas[5].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${peliculas[5].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[5].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    

 }

 const abrirModalMrFox= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${peliculas[6].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${peliculas[6].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[6].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   

}

const abrirModalIslaDePerros= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${peliculas[7].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${peliculas[7].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[7].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   

}

const abrirModalInterstellar= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${peliculas[8].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${peliculas[8].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[8].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   

}

const abrirModalLifeOfPi= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${peliculas[9].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${peliculas[9].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[9].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   

}

const abrirModalElGranHotelBudapest= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${peliculas[10].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${peliculas[10].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[10].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   

}

const abrirModalKnivesOut= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${peliculas[11].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${peliculas[11].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[11].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   

}

const abrirModalLaPasionDeCristo= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${peliculas[12].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${peliculas[12].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[12].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   

}

const abrirModalStarWars= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${peliculas[13].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${peliculas[13].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[13].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   

}

const abrirModalDrStrange= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${peliculas[14].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${peliculas[14].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${peliculas[14].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   

}








//                          PELICULAS CLASICAS    











 const abrirModalElOrigen= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[0].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[0].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[0].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalBeautifulBoy= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[1].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[1].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[1].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalTitanic= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[2].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[2].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[2].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalMujercitas= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[3].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[3].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[3].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalBuscandoANemo= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[4].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[4].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[4].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalAvatar= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[5].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[5].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[5].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalToyStory= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[6].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[6].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[6].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalJoker= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[7].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[7].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[7].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalBajoLaMismaEstrella= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[8].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[8].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[8].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalWall_e= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[9].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[9].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[9].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalElSeñorDeLosAnillos= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[10].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[10].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[10].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalUp= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[11].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[11].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[11].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalShrek= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[12].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[12].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[12].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalPiratas= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[13].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[13].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[13].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalLasVentajasDeSerInvisible= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${PeliculasClasicas[14].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${PeliculasClasicas[14].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${PeliculasClasicas[14].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}









//  PELICULAS POCHOCLERAS






const abrirModalMisionImposible= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${Pochocleras[0].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[0].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[0].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalBusquedaImplacable= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${Pochocleras[1].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[1].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[1].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalSpidermanNoWayHome= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${Pochocleras[2].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[2].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[2].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalOnward= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${Pochocleras[3].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[3].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[3].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalLosSimpsons= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${Pochocleras[4].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[4].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[4].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalRedNotice= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${Pochocleras[5].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[5].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[5].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalParasitos= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${Pochocleras[6].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[6].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[6].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalMilagro= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${Pochocleras[7].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[7].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[7].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalContraTiempo= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${Pochocleras[8].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[8].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[8].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalSpiderManSpiderVerse= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${Pochocleras[9].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[9].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[9].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalTransformers= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${Pochocleras[10].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[10].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[10].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalDivergente= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${Pochocleras[11].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[11].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[11].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalJuegosDelHambre= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${Pochocleras[12].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[12].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[12].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalOrgulloYPrejuicio= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${Pochocleras[13].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[13].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[13].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalCuestionDeTiempo= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${Pochocleras[14].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${Pochocleras[14].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${Pochocleras[14].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}














//               SERIES RECOMENDADAS



const abrirModalStrangerThings= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[0].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[0].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[0].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalAnne= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[1].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[1].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[1].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalElite= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[2].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[2].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[2].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalNarcos= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[3].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[3].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[3].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalLosVengadores= () => {
    if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

    }
    else{
     document.querySelector(".cont-modal").classList.add("cont-modalOn");
     document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[4].nombre}`;
     document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[4].descripcion}`;
     document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[4].foto})`;
     document.querySelector(".modal").style.backgroundSize="cover"
    }
    
 }

 const abrirModalPeakyBlinders= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[5].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[5].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[5].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalArrow= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[6].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[6].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[6].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalGambitoDeDama= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[7].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[7].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[7].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalDark= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[8].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[8].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[8].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalLaCasaDePapel= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[9].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[9].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[9].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalUmbrellaAcademy= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[10].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[10].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[10].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalVikingos= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[11].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[11].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[11].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalFlash= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[12].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[12].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[12].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalLupin= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[13].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[13].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[13].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}

const abrirModalRiverdale= () => {
   if(document.querySelector(".cont-modal").classList.contains("cont-modalOn")){

   }
   else{
    document.querySelector(".cont-modal").classList.add("cont-modalOn");
    document.querySelector(".tituloModal").innerHTML= `${SeriesRecomendadas[14].nombre}`;
    document.querySelector(".descripcionModal").innerHTML=`${SeriesRecomendadas[14].descripcion}`;
    document.querySelector(".modal").style.background=`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.955) 85%) , linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.955) 75%), url(${SeriesRecomendadas[14].foto})`;
    document.querySelector(".modal").style.backgroundSize="cover"
   }
   
}



 export {abrirModalBatman, abrirModaJurassicWorld, abrirModalHarryPotter, abrirModalTopGun,abrirModalCapitanAmerica, abrirModalBeautifulBoy, abrirModalBuscandoANemo, abrirModalElOrigen, abrirModalMujercitas, abrirModalTitanic, abrirModalBusquedaImplacable, abrirModalLosSimpsons, abrirModalMisionImposible, abrirModalOnward, abrirModalSpidermanNoWayHome, abrirModalAnne, abrirModalElite, abrirModalLosVengadores, abrirModalNarcos, abrirModalStrangerThings, abrirModalDrStrange, abrirModalElGranHotelBudapest, abrirModalElRenacido, abrirModalInterstellar, abrirModalIslaDePerros, abrirModalKnivesOut, abrirModalLaPasionDeCristo, abrirModalLifeOfPi, abrirModalMrFox, abrirModalStarWars, abrirModalArrow,abrirModalDark, abrirModalFlash, abrirModalGambitoDeDama, abrirModalLaCasaDePapel, abrirModalLupin, abrirModalPeakyBlinders, abrirModalRiverdale, abrirModalUmbrellaAcademy, abrirModalVikingos, abrirModalContraTiempo, abrirModalCuestionDeTiempo, abrirModalDivergente, abrirModalJuegosDelHambre, abrirModalMilagro, abrirModalOrgulloYPrejuicio, abrirModalParasitos, abrirModalRedNotice, abrirModalSpiderManSpiderVerse, abrirModalTransformers, abrirModalAvatar, abrirModalBajoLaMismaEstrella, abrirModalElSeñorDeLosAnillos, abrirModalJoker, abrirModalLasVentajasDeSerInvisible, abrirModalPiratas, abrirModalShrek, abrirModalToyStory, abrirModalUp, abrirModalWall_e }