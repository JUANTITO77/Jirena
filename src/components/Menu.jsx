import React from 'react'
import {Link} from "react-router-dom"

const Menu = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      <h1 className="text-xl font-bold text-gray-800">
        Jirena
      </h1>

      <div className="flex gap-6">
        <Link className="text-gray-700 hover:text-green-600 transition" to="/inicio">Inicio</Link>
        <Link className="text-gray-700 hover:text-green-600 transition" to="/QuienesSomos">Quienes Somos</Link>
        <Link className="text-gray-700 hover:text-green-600 transition" to="/conocenos">Conocenos</Link>
        <Link className="text-gray-700 hover:text-green-600 transition" to="/Servicios">Servicios</Link>
        <Link className="text-gray-700 hover:text-green-600 transition" to="/certificaciones">Certificaciones</Link>
        <Link className="text-gray-700 hover:text-green-600 transition" to="/Politicas">Politicas</Link>
        <Link className="text-gray-700 hover:text-green-600 transition" to="/galerias">Galerias</Link>
      </div>

    </nav>
  )
}

export default Menu


