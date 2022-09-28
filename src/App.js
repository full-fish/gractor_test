import Dashboard from "./components/otherPages/Dashboard";
import Service from "./components/otherPages/Service";
import Event from "./components/otherPages/Event";
import System from "./components/otherPages/System";
import Map from "./components/Map";
import SideBar from "./components/SideBar";
import NavBar from "./components/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Echarts from "./components/Echarts";

function App() {
  return (
    <>
      {/* <Echarts /> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/service" element={<Service />} />
          <Route
            path="/"
            element={
              <>
                <Map />
                <SideBar />
              </>
            }
          />
          <Route path="/event" element={<Event />} />
          <Route path="/system" element={<System />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
