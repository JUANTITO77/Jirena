import React from 'react'
import {Link} from "react-router-dom"
const Menu = () => {
  return (
    <div>
      <Link to="/inicio">Inicio</Link>
      <Link to="/quienesSomos">Quienes Somos</Link>
      <Link to="/conocenos">Conocenos</Link>
      <Link to="/Servicios">Servicios</Link>
      <Link to="/certificaciones">Cetificaciones</Link>
      <Link to="/Politicas">Politicas</Link>
      <Link to="/galerias">Galerias</Link>
      
    </div>
  )
}

export default Menu


