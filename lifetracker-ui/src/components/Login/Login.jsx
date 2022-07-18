import "./Login.css"
import * as React from "react"
import { useState, useEffect } from "react"
import apiClient from "../../services/apiClient"
import { useNavigate, Link } from "react-router-dom"

export default function Login({ user, setUser }) {
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    useEffect(() => {
        //should navigate to /activity 
        if (user?.email) {
            navigate("/activity")
        }
    }, [user, navigate])

    const handleOnTextChange = (event) => {
        // add errors, passwords dont match, invalid email, etc. 
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    } 

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setErrors((e) => ({...e, form: null}))
        //add error checking 
        const { data, error } = await apiClient.loginUser({ email: form.email, password: form.password })
        if (error) {
            setErrors((e) => ({ ...e, form: error }))
        }
        if (data?.user) {
            setUser(data.user)
            apiClient.setToken(data.token)
        }
        setIsProcessing(false)
    }
    
    return (
        <div className="container">
            <div className="welcome">
                <div className="material-icons">account_circle</div>
                <h1>Welcome</h1>
                <div className="login-form">
                    <div className="input-field">
                        <i className="fa fa-envelope"></i>
                        <input type="email" name="email" placeholder="Email" onChange={handleOnTextChange}/>
                    </div>
                    <div className="input-field">
                        <i className="fa fa-lock"></i>
                        <input type="password" name="password" placeholder="Password" onChange={handleOnTextChange}/>
                    </div>
                    <div className="input-field">
                        <button className="login-btn" onClick={handleOnSubmit}>Login</button>
                    </div>
                </div>
                <div className="register-redirect">
                    <p>Dont have an account? <Link to="/register"><span>Sign up</span></Link></p>
                </div>
            </div>
        </div>
    )
}
