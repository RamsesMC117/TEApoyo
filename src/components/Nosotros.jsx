import React from 'react';
import equipoImg from '../assets/equipo.jpeg';
import { FaGithub } from 'react-icons/fa';

function Nosotros() {
  const integrantes = [
    { nombre: 'RamsesMC113', github: 'RamsesMC113' },
    { nombre: 'DavidGA117', github: 'DavidGA117' },
    { nombre: 'MiguelHC-Dev', github: 'MiguelHC-Dev' },
    { nombre: 'AliGameplays', github: 'AliGameplays' },
    { nombre: 'Mariana', github: 'Mariana' },
    { nombre: 'Dr. Gustavo', github: 'Dr. Gustavo' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <img src={equipoImg} alt="Equipo" className="w-full max-w-xs md:max-w-md rounded-lg mb-6" />
      <h2 className="text-2xl font-bold mb-4">¿Quiénes somos?</h2>
      <ul className="list-none flex flex-wrap justify-center space-x-6">
        {integrantes.map((integrante, index) => (
          <li key={index} className="text-lg font-semibold text-gray-700 flex items-center">
            <FaGithub className="mr-2 text-gray-500" />
            {integrante.github}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nosotros;

