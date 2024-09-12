// src/components/Nutricion.jsx

import plato from "../assets/plato.png";
const Nutricion = () => {
  return (
    <section className="py-16 bg-gradient-to-r to-blue-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Texto de introducción */}
        <div className="lg:w-1/2 p-6">
          <h2 className="text-5xl font-extrabold text-green-800 mb-6 text-center lg:text-left">Nutrición para Niños con TEA</h2>
          <p className="text-lg text-gray-700 mb-8 text-justify">
            Comer saludable no solo ayuda en el desarrollo físico, sino que también tiene un gran impacto en el bienestar mental de los niños con Trastorno del Espectro Autista (TEA). Una alimentación balanceada mejora el estado de ánimo, la energía y el enfoque, contribuyendo a su desarrollo integral.
          </p>
          <p className="text-lg text-gray-700 mb-8 text-justify">
            Aquí encontrarás planes de nutrición pensados para ayudar a los niños con TEA a llevar una dieta equilibrada que promueva su salud y bienestar.
          </p>
          <div className="text-center lg:text-left">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Iniciar Plan de Nutrición
            </button>
          </div>
        </div>

        {/* Espacio para la imagen */}
        <div className="lg:w-1/2 p-6">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src={plato}
            alt="Plato del Buen Comer"
          />
        </div>
      </div>
    </section>
  );
};

export default Nutricion;
