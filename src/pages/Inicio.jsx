import React from 'react'

import { useState } from "react"
import img1 from "../assets/Imagen1.jpg"
import img2 from "../assets/Imagen2.jpg"
import img3 from "../assets/Imagen3.jpg"
const Carrusel = () => {
  const imagenes = [img1,img2,img3]

  const [index, setIndex] = useState(0)

  const siguiente = () => {
    setIndex((index + 1) % imagenes.length)
  }

  const anterior = () => {
    setIndex((index - 1 + imagenes.length) % imagenes.length)
  }

  return (
    <div className="relative w-[80vw] h-[80vh]">
  
  <img
    src={imagenes[index]}
    alt="carrusel"
    className="w-full h-full object-cover"
  />

  <button
    onClick={anterior}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow"
  >
    ◀
  </button>

  <button
    onClick={siguiente}
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow"
  >
    ▶
  </button>

</div>
  )
}




const Inicio = () => {

  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <Carrusel/>
    </div>
  )
}

export default Inicio
