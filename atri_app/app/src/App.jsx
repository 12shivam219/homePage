import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Section1 from "./pages/Section1.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/section1" element={<Section1 />} />
    </Routes>
  );
}
