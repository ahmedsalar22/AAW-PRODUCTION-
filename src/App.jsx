import React from "react";
  import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/layout";
import Aboutus from "./pages/Aboutus";

import Categories from "./pages/Categories";
import MapExample from "./pages/Mapexample";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/Map-Example" element={<MapExample />} />
            <Route path="/Categories" element={<Categories/>}/>
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
