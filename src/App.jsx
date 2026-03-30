
import './App.css'

function App() {
  return (
    <div className="min-h-screen border-4 border-black">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between border-b-4 border-black">

        {/* LOGO */}
        <div className="border-r-4 border-black p-4">
          <h1 className="font-bold">Logo</h1>
        </div>

        {/* MENÚ CENTRO */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>Inicio</li>
          <li>Quienes Somos</li>
          <li>Conocenos</li>
          <li>Servicios</li>
          <li>Certificaciones</li>
          <li>Politicas</li>
          <li>Galerias</li>
        </ul>

        {/* CONTACTO */}
        <div className="border-l-4 border-black p-4">
          <button className="font-medium">Contacto</button>
        </div>

      </nav>

      {/* SECCIÓN INICIO */}
      <section className="h-[300px] border-4 border-red-500 flex items-center justify-center">
        <h2 className="text-lg font-semibold">INICIO</h2>
      </section>

      {/* SECCIÓN QUIENES SOMOS */}
      <section className="h-[300px] border-4 border-green-600 flex items-center justify-center">
        <h2 className="text-lg font-semibold">QUIENES SOMOS</h2>
      </section>

    </div>
  )
}

export default App
