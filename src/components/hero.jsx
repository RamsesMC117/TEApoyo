import { useState, useEffect } from 'react';
import Gif from '../assets/gifAutismo.gif';
import { Link } from 'react-router-dom';

export default function Hero() {
    const [isMission, setIsMission] = useState(true); // Estado para alternar entre misión y visión
    const [slide, setSlide] = useState(true); // Estado para controlar el deslizamiento

    // Cambiar entre misión y visión cada 8.5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(false); // Desaparece el contenido actual
            setTimeout(() => {
                setIsMission((prev) => !prev); // Cambia entre misión y visión
                setSlide(true); // Desliza el nuevo contenido
            }, 500); // Controla el tiempo de la animación de salida
        }, 8500); // Cambia cada 8.5 segundos
        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    return (
        <div className="w-full flex items-center justify-center pt-8 md:pt-1 relative">
            <div className="flex flex-col md:flex-row items-center justify-between w-10/12">
                {/* Imagen en el lado izquierdo */}
                <img className="w-full md:w-1/2 h-auto object-cover" src={Gif} alt="Gif" />

                {/* Contenedor del carrusel */}
                <div className="relative md:w-1/2 overflow-hidden mt-8 md:mt-0 md:ml-12">
                    <div
                        className={`transition-transform duration-500 ease-in-out ${slide ? 'translate-x-0' : 'translate-x-full'} w-full flex flex-col justify-between h-full`}
                    >
                        {/* Misión */}
                        <div className={`w-full ${!isMission ? 'hidden' : ''} flex flex-col justify-between h-full`}>
                            <div>
                                <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'sans-serif', letterSpacing: '1px' }}>
                                    Misión
                                </h1>
                                <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'sans-serif', lineHeight: '1.8', fontWeight: '400' }}>
                                    Facilitar comunicación que brinde tranquilidad y confianza al adulto, permitiéndole a niños con TEA desarrollarse, convivir y mostrar sus emociones, sintiéndose siempre seguros y acompañados en las primeras etapas de su desarrollo.
                                </p>
                            </div>
                            {/* Botón de comenzar */}
                            <div className="mt-8 flex justify-start">
                                <Link to="/login">
                                    <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                                        Comenzar
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Visión */}
                        <div className={`w-full ${isMission ? 'hidden' : ''} flex flex-col justify-between h-full`}>
                            <div>
                                <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'sans-serif', letterSpacing: '1px' }}>
                                    Visión
                                </h1>
                                <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'sans-serif', lineHeight: '1.8', fontWeight: '400' }}>
                                    Fomentar la inclusión social de los niños con TEA facilitando la comunicación en sus diferentes entornos, generando espacios aptos y cómodos para su desarrollo.
                                </p>
                            </div>
                            {/* Botón de comenzar */}
                            <div className="mt-8 flex justify-start">
                                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                                    Comenzar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
