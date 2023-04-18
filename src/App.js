
import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar';
// import Dashboard from './Dashboard';
import Home from './Components/Home';
import InsightsHub from './Components/InsightsHub';


function App() {
  return (
    <div className="App">
         <Sidebar />
          <Routes >
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/insightshub" element={<InsightsHub />}>
            </Route>
          </Routes>
    

    </div>
  );
}

export default App;
