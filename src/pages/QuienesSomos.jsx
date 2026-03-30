import React from "react"
import img1 from "../assets/Imagen1.jpg"

const Identificacion =()=>{
  return( 
  <div className="px-6 md:px-16 py-10 space-y-16">

      {/* QUIENES SOMOS */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        
        <img 
          src={img1}
          alt="empresa"
          className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
        />

        <div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Quiénes Somos
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Somos una empresa con más de <span className="font-semibold">20 años de experiencia</span> 
            en servicios especializados de transporte terrestre, hidrocarburos e insumos químicos. 
            Brindamos soluciones seguras, eficientes y confiables a nivel nacional.
          </p>
        </div>

      </section>

      {/* CONOCENOS */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-green-600">
          Conócenos
        </h2>
      </section>

      {/* MISION Y VISION */}
      <section className="grid md:grid-cols-2 gap-10">

        {/* MISION */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Misión
          </h3>
          <div className="w-10 h-1 bg-green-500 mb-4"></div>
          <p className="text-gray-600">
            Brindar soluciones logísticas integrales con altos estándares de 
            seguridad, calidad y responsabilidad social, cuidando el medio ambiente.
          </p>
        </div>

        {/* VISION */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Visión
          </h3>
          <div className="w-10 h-1 bg-green-500 mb-4"></div>
          <p className="text-gray-600">
            Ser el principal socio estratégico en soluciones logísticas, 
            destacando por innovación, excelencia y compromiso.
          </p>
        </div>

      </section>

      {/* VALORES */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Valores
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <p className="font-semibold text-green-600">Integridad</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <p className="font-semibold text-green-600">Seguridad</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <p className="font-semibold text-green-600">Compromiso</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <p className="font-semibold text-green-600">Excelencia</p>
          </div>

        </div>
      </section>

    </div>
  )
}


const QuienesSomos = () => {
  return (
    <Identificacion className="w-1/2 max-w-6xl mx-auto px-6 md:px-16 py-10 space-y-16 "/>
  )
}

export default QuienesSomos