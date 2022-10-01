import Dashboard from "./pages/Dashboard";
import Service from "./pages/Service";
import Event from "./pages/Event";
import System from "./pages/System";
import GatherData from "./pages/GatherData";
import NavBar from "./components/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/service" element={<Service />} />
          <Route path="/" element={<GatherData />} />
          <Route path="/event" element={<Event />} />
          <Route path="/system" element={<System />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
