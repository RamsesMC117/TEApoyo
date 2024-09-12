import React from 'react';
import equipoImg from '../assets/equipo.jpeg';
import { FaGithub, FaFacebook } from 'react-icons/fa';

function Nosotros() {
  const integrantes = [
    { nombre: 'RamsesMC113', github: 'RamsesMC113' },
    { nombre: 'DavidGA117', github: 'DavidGA117' },
    { nombre: 'MiguelHC-Dev', github: 'MiguelHC-Dev' },
    { nombre: 'AliGameplays', github: 'AliGameplays' },
    { nombre: 'Mariana Angeles', facebook: 'Mariana Angeles' },
    { nombre: 'Dr. Gustavo', facebook: 'DrGustavoFB' },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center pt-8 md:pt-5 relative">
      {/* Reduce el margen inferior del título */}
      <h2 className="text-4xl font-extrabold text-blue-800 mb-4 text-center lg:text-left">#Orgullo Jaguar</h2>

      {/* Ajusta el margen inferior de la imagen */}
      <img src={equipoImg} alt="Equipo" className="w-full max-w-xs md:max-w-md rounded-lg mb-3" />

      {/* Reduce el margen inferior de "¿Quiénes somos?" */}
      <h2 className="text-2xl font-bold mb-2">¿Quiénes somos?</h2>

      {/* Reduce el espaciado horizontal entre los integrantes */}
      <ul className="list-none flex flex-wrap justify-center space-x-4 space-y-2">
        {integrantes.map((integrante, index) => (
          <li
            key={index}
            className={`text-lg font-semibold flex items-center transition-transform duration-300 ${
              integrante.github ? 'hover:scale-110 hover:text-gray-800' : ''
            }`}
          >
            {integrante.facebook ? (
              <a href={`https://facebook.com/${integrante.facebook}`} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="mr-2 text-blue-600" />
              </a>
            ) : (
              <a href={`https://github.com/${integrante.github}`} target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-2 text-gray-500" />
              </a>
            )}
            {integrante.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nosotros;
