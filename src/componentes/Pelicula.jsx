import React from 'react'

function Pelicula ({ imagen, modal }) {
  return (
    <div className='pelicula' onClick={modal}>
        <a href="#contenedor"><img src={imagen} alt="" /></a>
    </div>
  )
}

export default Pelicula