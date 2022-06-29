import "./Login.css"
import * as React from "react"

export default function Login() {
    return (
        <div className="container">
            <div className="welcome">
                <h1>Welcome</h1>
                <div className="login-form">
                    <div className="input-field">
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="user@gmail.com" value=""/>
                    </div>
                    <div className="input-field">
                        <label for="password">Password</label>
                        <input type="password" name="password" placeholder="password" value=""/>
                    </div>
                    <div className="input-field">
                        <button className="login-btn">Login</button>
                    </div>
                </div>
                <div className="redirect">
                    <p>Dont have an account? <span>Sign up</span></p>
                </div>
            </div>
        </div>
    )
}
