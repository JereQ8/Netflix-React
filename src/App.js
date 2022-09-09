
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

      


      <script src="componentes/AnimacionScrollCarousel.js"></script>
    </div>
  );
}

export default App;

