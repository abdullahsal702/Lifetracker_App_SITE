import * as React from "react"
import "./App.css"
import Navbar from "../Navbar/Navbar"
import Landing from "../Landing/Landing"
import Login from "../Login/Login"
import Register from "../Register/Register"
import Activity from "../Activity/Activity"
import Nutrition from "../Nutrition/Nutrition"
import Exercise from "../Exercise/Exercise"
import NotFound from "../NotFound/NotFound"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  const [user, setUser] = useState({}) 
  const [addingExercise, setAddingExercise] = useState(false)

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar user={user} setUser={setUser}/> 
          <Routes>
            {/* add conditional inside element prop to render either activity or redirect to login */}
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/login" element={<Login user={user} setUser={setUser}/>}></Route>
            <Route path="/register" element={<Register user={user} setUser={setUser}/>}></Route>
            <Route path="/activity" element={user ? <Activity setAddingExercise={setAddingExercise}/> : <NotFound/>}></Route>
            <Route path="/nutrition" element={user ? <Nutrition/> : <NotFound/>}></Route>
            <Route path="/exercise" element={user ? <Exercise addingExercise={addingExercise} setAddingExercise={setAddingExercise}/> : <NotFound/>}></Route>
          </Routes> 
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
