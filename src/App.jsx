import Header from "./components/header";
import Hero from "./components/hero";
import PricingPlans from "./components/PricingPlans";
import Nosotros from "./components/Nosotros";
import Login from "./components/login";
import Register from "./components/register";
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col">
      {location.pathname !== '/login' && location.pathname !== '/register' && <Header />}
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/planes" element={<PricingPlans />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;