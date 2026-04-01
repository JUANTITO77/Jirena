import React from 'react'
import {Link} from "react-router-dom"
import logo from "../assets/Logo1.png"
import "../Styles/Menu.css"

const Menu = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center z-50 h-[6vh]">
      
      <h1 className="text-xl font-bold text-gray-800 h-15">
        <img src={logo} alt="Logo" className="h-14 w-auto" />
      </h1>

      <div className="flex gap-6">
        <Link className="text-gray-700 hover:text-green-600 transition" to="/inicio TextoCSS">Inicio</Link>
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


