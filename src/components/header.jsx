import { Link } from "react-router-dom";
import Logo from "../assets/logo-definitivo-removebg-preview.png";

const Header = () => {
    return (
        <>
            <div className="h-screen w-full">
                <div className="flex flex-row gap-60">
                    <img
                        className="w-52 m-2 p-1 cursor-pointer"
                        src={Logo} alt="Logo" />
                    <nav className="flex items-center justify-center">
                        <ul className="flex justify-center flex-1">
                            <li className="list-none inline-block px-5">
                                <Link
                                    className="no-underline px-2"
                                    to="/">Inicio</Link>
                            </li>
                            <li className="list-none inline-block px-5">
                                <Link
                                    className="no-underline px-2"
                                    to="/nosotros">Nosotros</Link>
                            </li>
                            <li className="list-none inline-block px-5">
                                <Link
                                    className="no-underline px-2"
                                    to="/servicios">Servicios</Link>
                            </li>
                            <li className="list-none inline-block px-5">
                                <Link
                                    className="no-underline px-2"
                                    to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;