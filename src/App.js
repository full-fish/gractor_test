import Map from "./components/Map";
import Table from "./components/Table";
import Dashboard from "./components/Dashboard";
import Service from "./components/Service";
import Event from "./components/Event";
import System from "./components/System";
import NavBar from "./components/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Echarts from "./components/Echarts";

function App() {
  return (
    <>
      <Echarts />
      {/* <Router>
        <NavBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/service" element={<Service />} />
          <Route
            path="/"
            element={
              <>
                <Map />
                <Table />
              </>
            }
          />
          <Route path="/event" element={<Event />} />
          <Route path="/system" element={<System />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
