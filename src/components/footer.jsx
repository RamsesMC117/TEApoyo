// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-900 py-6">
      <div className="container mx-auto text-center">
        {/* Información de derechos de autor */}
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} TEApoyamos. Todos los derechos reservados.
        </p>

        {/* Enlaces a políticas */}
        <div className="mb-4">
          <a href="/privacy" className="hover:underline mx-2">Política de Privacidad</a> | 
          <a href="/terms" className="hover:underline mx-2">Términos de Servicio</a>
        </div>

        {/* Información de contacto */}
        <div className="mb-4">
          <p className="text-sm">
            Contáctanos: <a href="https://www.facebook.com/TecNMChilpancingo" className="hover:underline">https://www.facebook.com/TecNMChilpancingo</a>
          </p>
        </div>

        {/* Enlaces a redes sociales */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com/TecNMChilpancingo" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-700" />
          </a>
        </div>

        {/* Mensaje adicional (opcional) */}
        <p className="text-sm">
          Gracias por visitar nuestra página. ¡Esperamos que disfrutes de nuestra plataforma web!
        </p>
      </div>
    </footer>
  );
}

export default Footer;
