// src/components/Header.jsx
import { Link } from "react-router-dom";
import Logo from "../assets/logo-definitivo-removebg-preview.png";
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";

const Header = ({ onServiciosClick }) => {
    return (
        <div className="h-full w-full bg-gray-100">
            <div className="flex flex-row items-center justify-between p-4 bg-white shadow-md">
                <img
                    className="w-52 cursor-pointer"
                    src={Logo} alt="Logo" />
                <nav className="flex flex-1 justify-center">
                    <ul className="flex space-x-8 text-gray-800">
                        <li className="flex items-center">
                            <Link
                                className="flex items-center no-underline text-lg font-medium hover:text-blue-500"
                                to="/">
                                <FaHome className="mr-2" /> Inicio
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <Link
                                className="flex items-center no-underline text-lg font-medium hover:text-blue-500"
                                to="/nosotros">
                                <FaInfoCircle className="mr-2" /> Nosotros
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <button
                                className="flex items-center no-underline text-lg font-medium hover:text-blue-500"
                                onClick={onServiciosClick}>
                                <FaServicestack className="mr-2" /> Servicios
                            </button>
                        </li>
                        <li className="flex items-center">
                            <Link
                                className="flex items-center no-underline text-lg font-medium hover:text-blue-500"
                                to="/contacto">
                                <FaEnvelope className="mr-2" /> Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link
                        className="flex items-center px-4 py-2 border border-blue-500 rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white"
                        to="/login">
                        <AiOutlineLogin className="mr-2" /> Iniciar sesión
                    </Link>
                    <Link
                        className="flex items-center px-4 py-2 border border-blue-500 rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white"
                        to="/register">
                        <AiOutlineLogin className="mr-2" /> Registrarse
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;