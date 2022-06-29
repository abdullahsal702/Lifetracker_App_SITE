import "./Register.css"
import * as React from "react"
import { Link } from "react-router-dom"
 
export default function Register() {
    return (
        <div className="register">
            <div className="create">
                <div class="material-icons">account_circle</div>
                <h1>Create An Account</h1>
                <div className="register-form">
                    <div className="input-field">
                        <i className="fa fa-envelope"></i>
                        <input type="email" name="email" placeholder="Email" value=""/>
                    </div>
                    <div className="input-field">
                        <i className="fa fa-user"></i>
                        <input type="text" name="username" placeholder="Username" value=""/>
                    </div>
                    <div className="name"> 
                        <div className="input-field fname">
                            <input type="text" name="fname" placeholder="First Name" value=""/>
                        </div>
                        <div className="input-field lname">
                            <input type="text" name="lname" placeholder="Last Name" value=""/>
                        </div>
                    </div>
                    <div className="input-field">
                        <i className="fa fa-lock"></i>
                        <input type="password" name="password" placeholder="Password" value=""/>
                    </div>
                    <div className="input-field">
                        <input type="password" name="confirm-password" placeholder="Confirm Password" value=""/>
                    </div>
                    <div className="input-field">
                        <button className="register-btn">Sign up</button>
                    </div>
                </div>
                <div className="login-redirect">
                    <p>Already have an account? <Link to="/login"><span>Sign in</span></Link></p>
                </div>
            </div>
        </div>
    )
}