import { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Typography, Button } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Aquí va tu API Key de Google Maps
const GOOGLE_MAPS_API_KEY = 'AIzaSyBuR5gHVzGtRFkswGm92KEPGtAx7n_HFXI';

// Configuración de la gráfica para el acelerómetro
const accelChartConfig = {
    type: "line",
    height: 240,
    series: [
        {
            name: "Acelerómetro X",
            data: [],
        },
        {
            name: "Acelerómetro Y",
            data: [],
        },
        {
            name: "Acelerómetro Z",
            data: [],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            categories: [],
        },
        tooltip: {
            theme: "dark",
        },
    },
};

// Configuración de la gráfica para el giroscopio
const gyroChartConfig = {
    type: "line",
    height: 240,
    series: [
        {
            name: "Giroscopio X",
            data: [],
        },
        {
            name: "Giroscopio Y",
            data: [],
        },
        {
            name: "Giroscopio Z",
            data: [],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            categories: [],
        },
        tooltip: {
            theme: "dark",
        },
    },
};

// Parámetros de control
const umbralAceleracion = 9.8 * 1.1; // Umbral más bajo para detectar aceleración
const umbralGiro = 70; // Umbral para la velocidad angular (ajustable)
const ventanaTiempo = 1; // Número de lecturas para promediar

const Sensores = () => {
    const [sensorData, setSensorData] = useState(null);
    const [accelChartData, setAccelChartData] = useState(accelChartConfig);
    const [gyroChartData, setGyroChartData] = useState(gyroChartConfig);
    const [lecturasAcelerometro, setLecturasAcelerometro] = useState([]);
    const [lecturasGiroscopio, setLecturasGiroscopio] = useState([]);
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);

    // Función para mostrar notificaciones
    const mostrarNotificacion = (mensaje) => {
        toast.error(mensaje, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    // Función para analizar el movimiento usando promedio de datos
    const analizarMovimientoPromedio = (data) => {
        const { accelX, accelY, accelZ, gyroX, gyroY, gyroZ } = data;

        // Calcular la magnitud de la aceleración y del giro
        const magnitudAceleracion = Math.sqrt(accelX ** 2 + accelY ** 2 + accelZ ** 2);
        const magnitudGiro = Math.sqrt(gyroX ** 2 + gyroY ** 2 + gyroZ ** 2);

        // Almacenar las últimas `ventanaTiempo` lecturas
        const nuevasLecturasAcelerometro = [...lecturasAcelerometro, magnitudAceleracion].slice(-ventanaTiempo);
        const nuevasLecturasGiroscopio = [...lecturasGiroscopio, magnitudGiro].slice(-ventanaTiempo);

        setLecturasAcelerometro(nuevasLecturasAcelerometro);
        setLecturasGiroscopio(nuevasLecturasGiroscopio);

        // Si no hay suficientes lecturas, no promediamos aún
        if (nuevasLecturasAcelerometro.length < ventanaTiempo || nuevasLecturasGiroscopio.length < ventanaTiempo) {
            return;
        }

        // Calcular el promedio de las lecturas almacenadas
        const promedioAceleracion = nuevasLecturasAcelerometro.reduce((acc, val) => acc + val, 0) / nuevasLecturasAcelerometro.length;
        const promedioGiro = nuevasLecturasGiroscopio.reduce((acc, val) => acc + val, 0) / nuevasLecturasGiroscopio.length;

        console.log(`Promedio Aceleración: ${promedioAceleracion}, Promedio Giro: ${promedioGiro}`);

        // Verificar si los promedios superan los umbrales definidos
        if (promedioAceleracion > umbralAceleracion && promedioGiro > umbralGiro) {
            mostrarNotificacion('¡Movimiento brusco y posible caída detectados!');
        } else if (promedioAceleracion > umbralAceleracion) {
            mostrarNotificacion('¡Movimiento brusco detectado por aceleración!');
        } else if (promedioGiro > umbralGiro) {
            mostrarNotificacion('¡Movimiento brusco detectado por giroscopio!');
        }
    };

    // Función para obtener los datos de la API y analizar el movimiento usando el promedio
    const fetchSensorData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/sensores/data/');
            const data = await response.json();
            console.log("Datos recibidos:", data);

            if (data.length > 0) {
                const lastData = data[data.length - 1];
                setSensorData(lastData);

                // Analizar movimientos usando promedios
                analizarMovimientoPromedio(lastData);

                // Actualizar las gráficas
                setAccelChartData((prevState) => ({
                    ...prevState,
                    series: [
                        { ...prevState.series[0], data: [...prevState.series[0].data, lastData.accelX] },
                        { ...prevState.series[1], data: [...prevState.series[1].data, lastData.accelY] },
                        { ...prevState.series[2], data: [...prevState.series[2].data, lastData.accelZ] },
                    ],
                    options: {
                        ...prevState.options,
                        xaxis: {
                            categories: [...prevState.options.xaxis.categories, new Date().toLocaleTimeString()],
                        },
                    },
                }));

                setGyroChartData((prevState) => ({
                    ...prevState,
                    series: [
                        { ...prevState.series[0], data: [...prevState.series[0].data, lastData.gyroX] },
                        { ...prevState.series[1], data: [...prevState.series[1].data, lastData.gyroY] },
                        { ...prevState.series[2], data: [...prevState.series[2].data, lastData.gyroZ] },
                    ],
                    options: {
                        ...prevState.options,
                        xaxis: {
                            categories: [...prevState.options.xaxis.categories, new Date().toLocaleTimeString()],
                        },
                    },
                }));
            }
        } catch (error) {
            console.error('Error al obtener los datos del sensor:', error);
        }
    };

    // Polling para actualizar los datos cada 2 segundos
    useEffect(() => {
        const interval = setInterval(fetchSensorData, 2000); // Actualiza cada 2 segundos
        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, []);

    // Cargar el mapa cuando se hace clic en "Localizar en el Mapa"
    const loadMap = () => {
        if (sensorData && sensorData.latitude && sensorData.longitude) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
            script.async = true;
            script.onload = () => {
                const mapOptions = {
                    center: { lat: sensorData.latitude, lng: sensorData.longitude },
                    zoom: 15,
                };
                const newMap = new window.google.maps.Map(document.getElementById('map'), mapOptions);
                setMap(newMap);

                // Agregar marcador en la ubicación
                const newMarker = new window.google.maps.Marker({
                    position: { lat: sensorData.latitude, lng: sensorData.longitude },
                    map: newMap,
                });
                setMarker(newMarker);
            };
            document.head.appendChild(script);
        }
    };

    // Función para actualizar la localización en el mapa cuando se presiona el botón
    const handleLocalizar = () => {
        if (!map) {
            loadMap(); // Cargar el mapa si aún no está cargado
        } else if (map && sensorData && sensorData.latitude && sensorData.longitude) {
            const newPosition = { lat: sensorData.latitude, lng: sensorData.longitude };
            map.setCenter(newPosition);
            marker.setPosition(newPosition);
        }
    };

    return (
        <Card>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            >
                <div>
                    <Typography variant="h6" color="blue-gray">
                        Datos del Sensor en Tiempo Real
                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="max-w-sm font-normal"
                    >
                        Visualización de los datos del Acelerómetro y Giroscopio.
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className="px-2 pb-0">
                <div className="mb-6">
                    <Typography variant="h6" color="blue-gray">
                        Gráfica del Acelerómetro:
                    </Typography>
                    <Chart {...accelChartData} />
                </div>

                <div className="mb-6">
                    <Typography variant="h6" color="blue-gray">
                        Gráfica del Giroscopio:
                    </Typography>
                    <Chart {...gyroChartData} />
                </div>

                <div className="mb-6">
                    <Typography variant="h6" color="blue-gray">
                        Latitud y Longitud:
                    </Typography>
                    {sensorData ? (
                        <div>
                            <p>Latitud: {sensorData.latitude}</p>
                            <p>Longitud: {sensorData.longitude}</p>
                        </div>
                    ) : (
                        <p>Cargando datos del sensor...</p>
                    )}
                </div>

                <Button color="blue" className='text-black' onClick={handleLocalizar}>
                    Localizar en el Mapa
                </Button>

                <div id="map" style={{ height: "400px", width: "100%", marginTop: "20px" }}></div>

                <ToastContainer />
            </CardBody>
        </Card>
    );
};

export default Sensores;
