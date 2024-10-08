import { Link } from "react-router-dom";
import Logo from "../assets/logo-definitivo-removebg-preview.png";

export default function Register() {
    return (
        <div className="antialiased bg-slate-200 h-screen flex items-center justify-center">
            <div className="w-2/4 mx-auto bg-white p-12 rounded-xl shadow shadow-slate-300">
                <div className="flex items-center mb-4">
                    <img className="w-52 cursor-pointer" src={Logo} alt="Logo" />
                </div>
                <h1 className="text-4xl font-medium">Registrarse</h1>
                <p className="text-slate-500">Crea una nueva cuenta</p>

                <form className="my-10">
                    <div className="flex flex-col space-y-5">
                        <label htmlFor="email">
                            <p className="font-medium text-slate-700 pb-2">Correo electrónico</p>
                            <input id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Ingresa tu correo electrónico" />
                        </label>
                        <label htmlFor="password">
                            <p className="font-medium text-slate-700 pb-2">Contraseña</p>
                            <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Ingresa tu contraseña" />
                        </label>
                        <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <span>Registrarse</span>
                        </button>
                        <p className="text-center">¿Ya tienes una cuenta? <Link to="/login" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Inicia sesión </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg></span></Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}