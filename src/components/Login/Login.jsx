import "./Login.css"
import * as React from "react"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="container">
            <div className="welcome">
                <div class="material-icons">account_circle</div>
                <h1>Welcome</h1>
                <div className="login-form">
                    <div className="input-field">
                        <i className="fa fa-envelope"></i>
                        <input type="email" name="email" placeholder="Email" value=""/>
                    </div>
                    <div className="input-field">
                        <i className="fa fa-lock"></i>
                        <input type="password" name="password" placeholder="Password" value=""/>
                    </div>
                    <div className="input-field">
                        <button className="login-btn">Login</button>
                    </div>
                </div>
                <div className="register-redirect">
                    <p>Dont have an account? <Link to="/register"><span>Sign up</span></Link></p>
                </div>
            </div>
        </div>
    )
}
