// src/App.jsx
import { useRef } from 'react';
import Header from "./components/header";
import Hero from "./components/hero";
import PricingPlans from "./components/PricingPlans";
import Nosotros from "./components/Nosotros";
import Login from "./components/login";
import Register from "./components/register";
import SectionSlider from "./components/SectionSlider";
import Sensores from './components/Sensores';
import Footer from "./components/footer";  // Importa el componente Footer
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const sectionSliderRef = useRef(null);

  const handleScrollToSlider = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      sectionSliderRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <Header onServiciosClick={handleScrollToSlider} />
      )}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div ref={sectionSliderRef}>
                <SectionSlider />
              </div>
            </>
          } />
          <Route path="/planes" element={<PricingPlans />} />
          <Route path="/sensores" element={<Sensores />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </div>
      <Footer />  {/* Agrega el Footer al final */}
    </div>
  );
}

export default App;
