
import './App.css'
import Menu from "./components/Menu"
import {Routes, Route} from "react-router-dom"
import Inicio from "./pages/Inicio"
import QuienesSomos from "./pages/QuienesSomos"
import Conocenos from "./pages/Conocenos"
import Servicios from "./pages/Servicios"
import Certificaciones from "./pages/Certificaciones"
import Galeria from "./pages/Galeria"
import Politicas from "./pages/Politicas"



function App() {
  return (
    <div>
      <Menu/>
      <Routes>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/QuienesSomos" element={<QuienesSomos/>}/>
          <Route path="/conocenos" element={<Conocenos/>}/>
          <Route path="/Servicios" element={<Servicios/>}/>
          <Route path="/certificaciones" element={<Certificaciones/>}/>
          <Route path="/Politicas" element={<Politicas/>}/>
          <Route path="/galerias" element={<Galeria/>}/>
          <Route path="/*" element={<Inicio/>}/>
      </Routes>
      <QuienesSomos/>
    </div>
  )
}

export default App
