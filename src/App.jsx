import Header from "./components/header";
import Hero from "./components/hero";
import PricingPlans from "./components/PricingPlans";
import Nosotros from "./components/Nosotros";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/planes" element={<PricingPlans />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
