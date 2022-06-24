import { Route, Routes } from "react-router-dom";
import "./App.css";
import PDFReader from "./components/PDFReader";
import Home from "./pages/Home";
import Redindies from "./pages/Redindies";
import Dwarka from './pages/Dwarka'
import Pourpure from './pages/Pourpure'
import LuckyResturant from './pages/LuckyResturant'
import SaharaBeverages from './pages/SaharaBeverages'
import Swaad from "./pages/Swaad";
import LayoutPage from "./pages/LayoutPage";

function App() {
  return (
    <div className="App">
      {/* <PDFReader /> */}
      <LayoutPage>
      <main>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/001067RIKN" element={<Redindies />} exact />
              <Route path="/002209DNSP" element={<Dwarka />} exact />
              <Route path="/003067PPKN" element={<Pourpure />} exact />
              <Route path="/004014LRD" element={<LuckyResturant />} exact />
              <Route path="/005209SBNSP" element={<SaharaBeverages />} exact />
              <Route path="/006014SD" element={<Swaad />} exact />
            </Routes>
          </main>
          </LayoutPage>
    </div>
  );
}

export default App;
