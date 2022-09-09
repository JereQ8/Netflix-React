
import './App.css';
import Background from './componentes/Background';
import BarraDeNavegacion from './componentes/BarraDeNavegacion';
import CarrouselPeliculas from './componentes/CarrouselPeliculas';
import peliculas from "./helpers/peliculas.json"
import Modal from './componentes/Modal';



console.log(peliculas)

function App() {
  console.log(peliculas[2].recomendadas[0].foto)

  const cerrarModal= ()=>{
    document.querySelector(".cont-modal").classList.remove("cont-modalOn")
  }

  return (
    <div className="App">

      
      <Modal />
      <BarraDeNavegacion />
      <Background />

      

      <CarrouselPeliculas numCarousel="1" tipoDePelicula="Peliculas Clasicas" pelis={peliculas[0].clasicas} />
      <CarrouselPeliculas numCarousel="2" tipoDePelicula="Pochocleras" pelis={peliculas[1].pochocleras} />
      <CarrouselPeliculas numCarousel="3" tipoDePelicula="Peliculas Recomendadas" pelis={peliculas[2].recomendadas} />
      <CarrouselPeliculas numCarousel="4" tipoDePelicula="Series Recomendadas" pelis={peliculas[3].seriesRecomendadas} />

      
      {/* <CarrouselSeriesRecomendadas tipoDePelicula="Series Recomendadas" numCarousel="2" pelis={[peliculas[3].seriesRecomendadas[0].portada, peliculas[3].seriesRecomendadas[1].portada, peliculas[3].seriesRecomendadas[2].portada, peliculas[3].seriesRecomendadas[3].portada, peliculas[3].seriesRecomendadas[4].portada, peliculas[3].seriesRecomendadas[5].portada, peliculas[3].seriesRecomendadas[6].portada, peliculas[3].seriesRecomendadas[7].portada, peliculas[3].seriesRecomendadas[8].portada, peliculas[3].seriesRecomendadas[9].portada, peliculas[3].seriesRecomendadas[10].portada, peliculas[3].seriesRecomendadas[11].portada, peliculas[3].seriesRecomendadas[12].portada, peliculas[3].seriesRecomendadas[13].portada, peliculas[3].seriesRecomendadas[14].portada,  ]} />

      
      
      <Pochocleras tipoDePelicula="Pochocleras" numCarousel="3" pelis={[peliculas[1].pochocleras[0].portada, peliculas[1].pochocleras[1].portada, peliculas[1].pochocleras[2].portada, peliculas[1].pochocleras[3].portada, peliculas[1].pochocleras[4].portada, peliculas[1].pochocleras[5].portada, peliculas[1].pochocleras[6].portada, peliculas[1].pochocleras[7].portada, peliculas[1].pochocleras[8].portada, peliculas[1].pochocleras[9].portada, peliculas[1].pochocleras[10].portada, peliculas[1].pochocleras[11].portada, peliculas[1].pochocleras[12].portada, peliculas[1].pochocleras[13].portada, peliculas[1].pochocleras[14].portada, ]} />

      
      
      <PeliculasClasicas tipoDePelicula="Peliculas Clasicas" numCarousel="4" pelis={[peliculas[0].clasicas[0].portada, peliculas[0].clasicas[1].portada, peliculas[0].clasicas[2].foto, peliculas[0].clasicas[3].portada, peliculas[0].clasicas[4].portada, peliculas[0].clasicas[5].portada, peliculas[0].clasicas[6].portada, peliculas[0].clasicas[7].portada, peliculas[0].clasicas[8].portada, peliculas[0].clasicas[9].portada, peliculas[0].clasicas[10].portada, peliculas[0].clasicas[11].portada, peliculas[0].clasicas[12].portada, peliculas[0].clasicas[13].portada, peliculas[0].clasicas[14].portada, ]} /> */}


      <script src="componentes/AnimacionScrollCarousel.js"></script>
    </div>
  );
}

export default App;

