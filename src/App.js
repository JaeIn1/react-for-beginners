//import logo from './logo.svg';
//import './App.css';
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <h1>Heelo</h1>
    </Router>
  );
}

export default App;
