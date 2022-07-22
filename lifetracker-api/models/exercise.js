const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Exercise {
    static async fetchExercises({user}) {
        const results = await db.query(
            `
                SELECT exercise.id,
                       exercise.name,
                       exercise.category, 
                       exercise.duration, 
                       exercise.intensity, 
                       users.email 
                FROM exercise 
                JOIN users ON users.id = exercise.user_id
                WHERE users.email = $1 
                ORDER BY exercise.createdAt DESC
            `, [user.email]
        ) 
        console.log(results)

        return results.rows 
    }

    static async postExercise({user, post}) {
        const requiredFields = ["name", "category", "duration", "intensity"]
        requiredFields.forEach(field => {
            if (!post.hasOwnProperty(field)) {
                throw new BadRequestError(`Required field - ${field} - missing from request body`)
            }
        })
        const results = await db.query(
            `
                INSERT INTO exercise (name, category, duration, intensity, user_id)
                VALUES ($1, $2, $3, $4, (SELECT id FROM users WHERE email = $5))
                RETURNING id, 
                          name, 
                          category, 
                          duration, 
                          intensity, 
                          user_id
            `, [post.name, post.category, post.duration, post.intensity, user.email]
        )

        return results.rows[0]
    }
}

module.exports = Exercise