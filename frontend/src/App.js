import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MotionLanding from "@/components/MotionLanding";
import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import Impressum from "@/components/legal/Impressum";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MotionLanding />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
