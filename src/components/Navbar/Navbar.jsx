import "./Navbar.css"
import * as React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="content">
                <div className="logo">
                    <Link to="/"><img src="https://info.codepath.org/hs-fs/hubfs/logo_codepath_darkandgreen.png?width=2298&name=logo_codepath_darkandgreen.png" alt="logo"/></Link>
                </div>
                <div className="links">
                    <li><a href="#">Activity</a></li>
                    <li><a href="#">Exercise</a></li>
                    <li><a href="#">Nutrition</a></li>
                    <li><a href="#">Sleep</a></li>
                </div>
                <div className="links">
                    <ul>
                        <li><Link to="/login">Sign In</Link></li>
                        <li><button className="register-btn">Register</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
} 