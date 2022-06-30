const bcrypt = require("bcrypt")
const db = require("../db")
const { BCRYPT_WORK_FACTOR } = require("../config")
const { BadRequestError, UnauthorizedError } = require("../utils/errors")

class User {
    static async makePublicUser(user) {
        return {
            id : user.id, 
            first_name : user.first_name,
            last_name : user.last_name,
            email : user.email, 
            username : user.username,
        }
    }

    static async login(credentials) {
        //user submits email and password 
        //if any of these fields are missing, throw an error 
        const requiredFields = ["email", "password"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })

        //lookup the user in the db by email 
        const user = await User.fetchUserByEmail(credentials.email)
        //if a user is found, compate the submitted password 
        //with the password in the db 
        //if there is a match return the user 
        if (user) {
            const isValid = await bcrypt.compare(credentials.password, user.password)
            if (isValid) {
                return User.makePublicUser(user)
            }
        }
        //if any of this goes wrong throw an error 
        throw new UnauthorizedError("Invalid email or password")
    }

    static async register(credentials) {
        //user submits required info (first name, last name, email, pw, location, date)
        //if any of these fields are missing throw an error 
        const requiredFields = ["firstName", "lastName", "email", "username", "password"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })

        if (credentials.email.indexOf("@") <= 0) {
            throw new BadRequestError("Invalid email.")
        }

        //
        //make sure no user already exists in the system with that email 
        //id one does, throw an error 
        const existingUser = await User.fetchUserByEmail(credentials.email)
        if (existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }
        
        // 
        //take the users pass and hash it 
        const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)
        //take the users email and lowercase it 
        const lowercasedEmail = credentials.email.toLowerCase()
        //
        //create a new user in the db with all their info 
        const result = await db.query(`
            INSERT INTO users (
                first_name,
                last_name, 
                email,
                username,
                password
            )
            VALUES ($1, $2 ,$3, $4, $5)
            RETURNING id, first_name, last_name, email, username, password;
        `, [credentials.firstName, credentials.lastName, lowercasedEmail, credentials.username, hashedPassword])

        //return the user 
        const user = result.rows[0]
        return User.makePublicUser(user) 
    }

    static async fetchUserByEmail(email) {
        if (!email) {
            throw new BadRequestError("No email provided")
        }
        
        //$1 is a query parameter
        const query = `SELECT * FROM users WHERE email = $1`
        
        const result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user 
    }
}

module.exports = User 