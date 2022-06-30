const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.post("/login", async (req, res, next) => {
    try {
        //take the users email and password and attempt to authenticate them 
        const user = await User.login(req.body)
        return res.status(200).json({ user })
    } catch (err) {
        next(err)
    }
}) 

router.post("/register", async (req, res, next) => {
    try {
        //take the users first/last name, email, password, date of vaccine, location of vaccine
        //and create a new user in our database  
        const user = await User.register(req.body)
        return res.status(201).json({ user })
    } catch (err) {
        next(err)
    }
}) 

module.exports = router 