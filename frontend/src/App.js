import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlinkBearLanding from "@/components/BlinkBearLanding";
import SoftLanding from "@/components/SoftLanding";
import MotionLanding from "@/components/MotionLanding";
import MinimalLanding from "@/components/MinimalLanding";
import FuturisticLanding from "@/components/FuturisticLanding";
import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import Impressum from "@/components/legal/Impressum";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlinkBearLanding />} />
          <Route path="/soft" element={<SoftLanding />} />
          <Route path="/motion" element={<MotionLanding />} />
          <Route path="/minimal" element={<MinimalLanding />} />
          <Route path="/futuristic" element={<FuturisticLanding />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
