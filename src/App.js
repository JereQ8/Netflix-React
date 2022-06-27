import './App.css';
import Background from './componentes/Background';
import BarraDeNavegacion from './componentes/BarraDeNavegacion';
import PeliculasClasicas from './componentes/PeliculasClasicas';
import Pochocleras from './componentes/Pochocleras';
import CarrouselSeriesRecomendadas from './componentes/CarrouselSeriesRecomendadas';
import CarrouselPeliculasRecomendadas from './componentes/CarrouselPeliculasRecomendadas';
import InformacionPelicula from './componentes/InformacionPelicula';
import batman from "./img/portadas 2/1.jpg"
import topgun from "./img/portadas 2/2.jpeg"
import america from "./img/portadas 2/3.jpeg"
import jurassic from "./img/portadas 2/4.jpg"
import hp from "./img/portadas 2/5.jpg"
import misionImposible from "./img/portadas 2/6.jpg"
import narcos from "./img/portadas 2/7.jpg"
import nemo from "./img/portadas 2/8.jfif"
import onward from "./img/portadas 2/9.jpg"
import simpsons from "./img/portadas 2/10.jpg"
import busquedaImplacable from "./img/portadas 2/11.jpg"
import endgame from "./img/portadas 2/12.jpg"
import spiderman from "./img/portadas 2/13.jpg"
import origen from "./img/portadas 2/14.jpg"
import titanic from "./img/portadas 2/15.jpg"
import mujercitas from "./img/portadas 2/16.jpg"
import beautifulBoy from "./img/portadas 2/17.jpg"
import strangerThings from "./img/portadas 2/18.jpg"
import anne from "./img/portadas 2/19.jpg"
import elite from "./img/portadas 2/20.jpg"
import peliculasRecomendadas from "./helpers/portadasPeliculasRecomendadas.json"
import seriesRecomendadas from "./helpers/portadasSeriesRecomendadas.json"
import pochocleras from './helpers/portadasPochocleras.json';
import peliculasClasicas from "./helpers/portadasPeliculasClasicas.json"





function App() {

  const cerrarModal= ()=>{
    document.querySelector(".cont-modal").classList.remove("cont-modalOn")
  }

  return (
    <div className="App">

      <div className='cont-modal'>
        <div className='modal'>
            <button onClick={cerrarModal} className='botonClose'>X</button>
            <h3 className='tituloModal'></h3>
            <div>
            <p className='descripcionModal'></p>
            </div>
            <button className='botonReproducir'>Reproducir</button>
            <button className='botonesIguales'>Configuracion</button>
            <button className='botonesIguales'>Informacion</button>
        </div>
      </div>

      <BarraDeNavegacion />
      <Background />

      
      <CarrouselPeliculasRecomendadas tipoDePelicula="Peliculas Recomendadas" numCarousel="1" pelis={[batman, topgun, america, jurassic, hp, peliculasRecomendadas[0].foto, peliculasRecomendadas[1].foto,peliculasRecomendadas[2].foto,peliculasRecomendadas[3].foto,peliculasRecomendadas[4].foto,peliculasRecomendadas[5].foto,peliculasRecomendadas[6].foto,peliculasRecomendadas[7].foto,peliculasRecomendadas[8].foto,peliculasRecomendadas[9].foto]} />

      
      <CarrouselSeriesRecomendadas tipoDePelicula="Series Recomendadas" numCarousel="2" pelis={[strangerThings, anne, elite, narcos, endgame, seriesRecomendadas[0].foto,seriesRecomendadas[1].foto,seriesRecomendadas[2].foto,seriesRecomendadas[3].foto,seriesRecomendadas[4].foto,seriesRecomendadas[5].foto,seriesRecomendadas[6].foto,seriesRecomendadas[7].foto,seriesRecomendadas[8].foto,seriesRecomendadas[9].foto,]} />

      
      
      <Pochocleras tipoDePelicula="Pochocleras" numCarousel="3" pelis={[misionImposible, busquedaImplacable, spiderman, onward, simpsons, pochocleras[0].foto,pochocleras[1].foto,pochocleras[2].foto,pochocleras[3].foto,pochocleras[4].foto,pochocleras[5].foto,pochocleras[6].foto,pochocleras[7].foto,pochocleras[8].foto,pochocleras[9].foto,]} />

      
      
      <PeliculasClasicas tipoDePelicula="Peliculas Clasicas" numCarousel="4" pelis={[origen, beautifulBoy, titanic, mujercitas, nemo,peliculasClasicas[0].foto,peliculasClasicas[1].foto,peliculasClasicas[2].foto,peliculasClasicas[3].foto,peliculasClasicas[4].foto,peliculasClasicas[5].foto,peliculasClasicas[6].foto,peliculasClasicas[7].foto,peliculasClasicas[8].foto,peliculasClasicas[9].foto,]} />


      <script src="componentes/AnimacionScrollCarousel.js"></script>
    </div>
  );
}

export default App;

