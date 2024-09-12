import Header from "./components/header";
import Hero from "./components/hero";
import PricingPlans from "./components/PricingPlans";
<<<<<<< HEAD
import Login from "./components/login";
import Register from "./components/register";
import { Routes, Route, useLocation } from 'react-router-dom';
=======
import Nosotros from "./components/Nosotros";
import { Routes, Route } from 'react-router-dom';
>>>>>>> 9aef19bce1e49a849f309aafb149c10608de07ce

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col">
      {location.pathname !== '/login' && location.pathname !== '/register' && <Header />}
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/planes" element={<PricingPlans />} />
<<<<<<< HEAD
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
=======
          <Route path="/nosotros" element={<Nosotros />} />
>>>>>>> 9aef19bce1e49a849f309aafb149c10608de07ce
        </Routes>
      </div>
    </div>
  );
}

export default App;