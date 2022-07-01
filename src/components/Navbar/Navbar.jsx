import "./Navbar.css"
import * as React from "react"
import { Link } from "react-router-dom"

export default function Navbar({user, setUser}) {

    const handleOnLogout = () => {
        setUser(null)
    }

    return (
        <nav className="navbar">
            <div className="content">
                <div className="logo">
                    <Link to="/"><img src="https://info.codepath.org/hs-fs/hubfs/logo_codepath_darkandgreen.png?width=2298&name=logo_codepath_darkandgreen.png" alt="logo"/></Link>
                </div>
                <div className="links">
                    <li><Link to="/activity">Activity</Link></li>
                    <li><Link to="/exercise">Exercise</Link></li>
                    <li><Link to="/nutrition">Nutrition</Link></li>
                    <li><Link to="/sleep">Sleep</Link></li>
                </div>
                { user ? 
                    <div className="links">
                        <ul>
                            <li>{user?.email}</li>
                            <li><Link to="/"><button className="register-btn" onClick={handleOnLogout}>Logout</button></Link></li>
                        </ul>
                    </div> : 
                    <div className="links">
                    <ul>
                        <li><Link to="/login">Sign In</Link></li>
                        <li><Link to="/register"><button className="register-btn">Register</button></Link></li>
                    </ul>
                    </div>
                }
            </div>
        </nav>
    )
} 