import "./Register.css"
import * as React from "react"
import apiClient from "../../services/apiClient"
import { useState, useEffect } from "react" 
import { useNavigate, Link } from "react-router-dom"
 
export default function Register({ user, setUser }) {
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        username: "", 
        firstName: "", 
        lastName: "",
        password: "",
        passwordConfirm: ""
    })

    useEffect(() => {
        //should navigate to /activity 
        if (user?.email) {
            navigate("/activity")
        }
    }, [user, navigate])

    const handleOnTextChange = (event) => {
        // add errors, passwords dont match, invalid email, etc., part 11
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    } 

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setErrors((e) => ({...e, form: null}))
        //add error checking 
        const { data, error } = await apiClient.registerUser({ email: form.email, username: form.username, firstName: form.firstName, lastName: form.lastName, password: form.password })
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
        <div className="register">
            <div className="create">
                <div className="material-icons">account_circle</div>
                <h1>Create An Account</h1>
                <div className="register-form">
                    <div className="input-field">
                        <i className="fa fa-envelope"></i>
                        <input type="email" name="email" placeholder="Email" onChange={handleOnTextChange}/>
                    </div>
                    <div className="input-field">
                        <i className="fa fa-user"></i>
                        <input type="text" name="username" placeholder="Username" onChange={handleOnTextChange}/>
                    </div>
                    <div className="name"> 
                        <div className="input-field fname">
                            <input type="text" name="firstName" placeholder="First Name" onChange={handleOnTextChange}/>
                        </div>
                        <div className="input-field lname">
                            <input type="text" name="lastName" placeholder="Last Name" onChange={handleOnTextChange}/>
                        </div>
                    </div>
                    <div className="input-field">
                        <i className="fa fa-lock"></i>
                        <input type="password" name="password" placeholder="Password" onChange={handleOnTextChange}/>
                    </div>
                    <div className="input-field">
                        <input type="password" name="passwordConfirm" placeholder="Confirm Password" onChange={handleOnTextChange}/>
                    </div>
                    <div className="input-field">
                        <button className="register-btn" onClick={handleOnSubmit}>Sign up</button>
                    </div>
                </div>
                <div className="login-redirect">
                    <p>Already have an account? <Link to="/login"><span>Sign in</span></Link></p>
                </div>
            </div>
        </div>
    )
}