const express = require("express")
const Exercise = require("../models/exercise")
const secuirty = require("../middleware/security")
const router = express.Router()

router.post("/", secuirty.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { user } = res.locals 
        const results = await Exercise.postExercise({user, post : req.body})
        return res.status(201).json({results})
    } catch(err) {
        next(err)
    }
})

router.get("/", async (req, res, next) => {
    try {
        const { user } = res.locals 
        const results = await Exercise.fetchExercises({user})
        console.log(results)
        return res.status(200).json({results})
    } catch(err) {

    }
})

module.exports = router 