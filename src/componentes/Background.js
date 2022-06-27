import React from 'react';
import "../css/background.css"
import InformacionPelicula from './InformacionPelicula';
import logoStranger from "../img/logo_nombres/Stranger-Things-logo.png"





export default function Background(){
    return(
        <div className='background'>
            <InformacionPelicula img={logoStranger} info="Strange sightings. Government secrets.Fearless kids. And a dark force that turns a small town upside down"/>

            
 

        </div>
    )

    
}

