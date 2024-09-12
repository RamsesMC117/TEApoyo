import Gif from '../assets/gifAutismo.gif';

export default function Hero() {
    return (
        <div className="h-screen w-full">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl font-bold text-gray-800">¡Bienvenido a la plataforma de autismo!</h1>
                <img className="w-96 mt-4" src={Gif} alt="Gif" />
            </div>
        </div>
    )
}