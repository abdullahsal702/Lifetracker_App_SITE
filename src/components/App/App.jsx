import * as React from "react"
import "./App.css"
import Navbar from "../Navbar/Navbar"
import Landing from "../Landing/Landing"
import Login from "../Login/Login"
import Register from "../Register/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar/> 
          <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
          </Routes> 
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
