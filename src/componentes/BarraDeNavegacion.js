import React from "react";
import search from "../img/icons/search.png"
import home from "../img/icons/home.png"
import calendar from "../img/icons/calendar.png"
import plus from "../img/icons/plus.png"
import desktop from "../img/icons/desktop.png"
import movies from "../img/icons/movies.png"
import "../css/barraDeNavegacion.css"

export default function BarraDeNavegacion(){
    return(
        <div className="contenedor-nav">
            <nav>
                <div>
                    <ul className="ul-nav">
                        <li><a href="#"><img src={search}/></a></li>
                        <li><a href="#"><img src={home}/></a></li>
                        <li><a href="#"><img src={calendar}/></a></li>
                        <li><a href="#"><img src={desktop}/></a></li>
                        <li><a href="#"><img src={movies}/></a></li>
                        <li><a href="#"><img src={plus}/></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}