import React from 'react';
import Logo from "../assets/proto.png";
import SensorImage from "../assets/sensor.png"; // Asegúrate de tener esta imagen en tu carpeta de assets
import AnotherImage from "../assets/micro.png"; // Asegúrate de tener esta imagen en tu carpeta de assets
import FinalImage from "../assets/rasb.png"; // Asegúrate de tener esta imagen en tu carpeta de assets
import IAImage from "../assets/IA.png"; // Asegúrate de tener esta imagen en tu carpeta de assets para la sección IA Centralizada

const SectionSlider = () => {
    return (
        <div>
            {/* Sección Servicios */}
            <div className="w-full py-16 bg-gradient-to-b from-white to-blue-400 flex flex-col items-center mt-[100px] md:mt-[150px]">
                {/* Título centrado */}
                <h2 className="text-5xl font-bold text-center text-gray-800">
                    Servicios
                </h2>

                {/* Contenido de la sección: Texto e Imagen */}
                <div className="flex flex-col md:flex-row items-center justify-between w-10/12 mt-8">
                    {/* Texto en el lado izquierdo */}
                    <div className="md:w-1/2 text-lg text-gray-900 leading-relaxed mb-8 md:mb-0 md:mr-12">
                        <p className="text-justify">
                            Este proyecto ofrece una solución innovadora para el cuidado y la seguridad de niños autistas, combinando tecnología accesible y eficaz. Nuestro prototipo está basado en una Raspberry Pi 4, que actúa como el cerebro del sistema, junto con sensores avanzados como el acelerómetro MPU-6050 y el micrófono MAX9814.
                        </p>
                    </div>

                    {/* Imagen en el lado derecho */}
                    <div className="md:w-1/3">
                        <img
                            className="w-96 h-auto object-cover"
                            src={Logo}
                            alt="Imagen de servicios"
                        />
                    </div>
                </div>
            </div>

            {/* Sección Sensor de Movimiento */}
            <div className="w-full py-16 bg-gradient-to-b from-blue-400 to-indigo-500 flex flex-col items-center">
                {/* Contenido de la sección: Imagen y Texto */}
                <div className="flex flex-col md:flex-row items-center justify-between w-10/12">
                    {/* Imagen en el lado izquierdo */}
                    <div className="md:w-1/2">
                        <img
                            className="w-full h-auto object-cover"
                            src={SensorImage}
                            alt="Sensor de Movimiento"
                        />
                    </div>

                    {/* Texto y párrafo en el lado derecho */}
                    <div className="md:w-1/2 text-lg text-gray-100 leading-relaxed md:ml-12">
                        <h3 className="text-3xl font-bold mb-4 text-gray-200">
                            Sensor de Movimiento
                        </h3>
                        <p className="text-justify">
                            El MPU-6050 permite al juguete detectar si ha sido arrojado o se ha caído, proporcionando una respuesta inmediata ante situaciones que podrían indicar estrés o distracción del niño. Por otro lado, el micrófono MAX9814 capta sonidos ambientales, siendo capaz de reconocer si el niño está llorando, gritando, o si hay otras voces alrededor, lo que ayuda a identificar la interacción con otros niños.
                        </p>
                    </div>
                </div>
            </div>

            {/* Sección Adicional */}
            <div className="w-full py-16 bg-gradient-to-b from-indigo-500 to-purple-600 flex flex-col items-center">
                {/* Contenido de la sección: Texto e Imagen */}
                <div className="flex flex-col md:flex-row items-center justify-between w-10/12">
                    {/* Texto en el lado izquierdo */}
                    <div className="md:w-1/2 text-lg text-gray-100 leading-relaxed mb-8 md:mb-0 md:mr-12">
                        <h3 className="text-3xl font-bold mb-4 text-gray-200">
                            Sensor de Micrófono
                        </h3>
                        <p className="text-justify">
                            El micrófono MAX9814 capta sonidos ambientales, siendo capaz de reconocer si el niño está llorando, gritando, o si hay otras voces alrededor, lo que ayuda a identificar la interacción con otros niños.
                        </p>
                    </div>

                    {/* Imagen en el lado derecho */}
                    <div className="md:w-1/2">
                        <img
                            className="w-full h-auto object-cover"
                            src={AnotherImage}
                            alt="Imagen Adicional"
                        />
                    </div>
                </div>
            </div>

            {/* Sección Final */}
            <div className="w-full py-16 bg-gradient-to-b from-purple-600 to-pink-500 flex flex-col items-center">
                {/* Contenido de la sección: Imagen y Texto */}
                <div className="flex flex-col md:flex-row items-center justify-between w-10/12">
                    {/* Imagen en el lado izquierdo */}
                    <div className="md:w-1/2">
                        <img
                            className="w-full h-auto object-cover"
                            src={FinalImage}
                            alt="Imagen Final"
                        />
                    </div>

                    {/* Texto y párrafo en el lado derecho */}
                    <div className="md:w-1/2 text-lg text-gray-100 leading-relaxed md:ml-12">
                        <h3 className="text-3xl font-bold mb-4 text-gray-200">
                            Características del Sistema
                        </h3>
                        <p className="text-justify">
                            Este sistema combina tecnología avanzada con un diseño intuitivo para ofrecer la mejor experiencia de monitoreo y cuidado. Utilizando sensores y micrófonos de última generación, garantizamos una respuesta precisa y oportuna a las necesidades del niño.
                        </p>
                    </div>
                </div>
            </div>

            {/* Sección IA Centralizada */}
            <div className="w-full py-16 bg-gradient-to-b from-pink-500 to-gray-200 flex flex-col items-center">
                {/* Título centrado */}
                <h2 className="text-5xl font-bold text-center text-white mb-8">
                    IA Centralizada
                </h2>

                {/* Contenido de la sección: Card */}
                <div className="w-11/12 md:w-1/2 bg-gradient-to-r from-teal-700 to-teal-500 rounded-lg border border-teal-600 shadow-lg transform transition-transform duration-300 hover:rotate-2 hover:shadow-2xl">
                    <div className="flex flex-col items-center p-6">
                        {/* Imagen de la card */}
                        <img
                            className="w-48 h-48 object-cover rounded-full border-4 border-white mb-4"
                            src={IAImage}
                            alt="IA Centralizada"
                        />

                        {/* Texto de la card */}
                        <p className="text-lg text-gray-200 text-justify">
                            La inteligencia artificial centralizada es el núcleo del sistema, proporcionando un análisis inteligente de los datos recolectados por los sensores y micrófonos. Esto permite una respuesta más precisa y personalizada para el cuidado y monitoreo de los niños, asegurando un entorno seguro y adaptado a sus necesidades.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionSlider;
