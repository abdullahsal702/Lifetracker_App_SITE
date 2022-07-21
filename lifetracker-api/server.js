const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const security = require("./middleware/security")
const { PORT } = require("./config")
const authRoutes = require("./routes/auth")
const exerciseRoutes = require("./routes/exercise")

const { BadRequestError, NotFoundError } = require("./utils/errors")

const app = express() 

//use cross origin resource sharing 
app.use(cors())
//parse incoming request bodies with JSON payloads 
app.use(express.json())
//log request info
app.use(morgan("tiny"))
//for every request, check if a token exists in the authorization header 
//if it does, attach the decoded user to res.locals 
app.use(security.extractUserFromJwt)

app.get("/", (req, res) => {
    res.status(200).json({ping: "pong"});
 });

app.use("/auth", authRoutes)
app.use("/exercise", exerciseRoutes)

app.use((req, res, next) => {
    return next(new NotFoundError())
})

app.use((err, req, res, next) => {
    const status = err.status || 500 
    const message = err.message 

    return res.status(status).json({
        error: { message, status }
    })
}) 

app.listen(PORT, () => {
    console.log(`🚀 Server running http://localhost:${PORT}`)
  })