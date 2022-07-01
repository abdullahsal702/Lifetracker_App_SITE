import * as React from "react"
import "./App.css"
import Navbar from "../Navbar/Navbar"
import Landing from "../Landing/Landing"
import Login from "../Login/Login"
import Register from "../Register/Register"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // const [email, setEmail] = useState("")
  // const [usernameame, setUsername] = useState("")
  // const [password, setPassword] = useState("")

  // const handleOnTextChange = (event) => {
  //   if (event.target.name == "email") {
  //     setEmail(event.target.value)
  //   } else if (event.target.name == "fname") {
  //     setFirstName(event.target.value)
  //   } else if (event.target.name == "lname") {
  //     setLastName(event.target.value)
  //   } else if (event.target.name == "username") {
  //     setUsername(event.target.value)
  //   } else if (event.target.name == "password") {
  //     setPassword(event.target.value)
  //   } 
  // }

  const [user, setUser] = useState({}) 


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar/> 
          <Routes>
            {/* add conditional inside element prop to render either activity or redirect to login */}
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/login" element={<Login user={user} setUser={setUser}/>}></Route>
            <Route path="/register" element={<Register user={user} setUser={setUser}/>}></Route>
          </Routes> 
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
