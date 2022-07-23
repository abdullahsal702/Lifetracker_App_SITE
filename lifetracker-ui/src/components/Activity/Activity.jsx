import "./Activity.css"
import * as React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Activity({setAddingExercise}) {
    const navigate = useNavigate();

    const handleOnAddExercise = () => {
        setAddingExercise(true)
        navigate("/exercise")
    }

    const [exercises, setExercises] = useState([])

    async function getExercises() {
        try {
            let config = {
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAZ21haWwuY29tIiwiaWF0IjoxNjU4NTU4MDU5LCJleHAiOjE2NTg2NDQ0NTl9.piYEqMTayBBOLwdjTKqoIwZ28epTQBRplcieQr5CZmI"
                }
              }
            let response = await axios.get("http://localhost:3001/exercise", config)
            setExercises(response.data.results)
            console.log(response.data.results)
        } catch(error) {
            console.error(error)
        } 
    }

    let totalExerciseMinutes = 0
    exercises.forEach((exercise) => {
        totalExerciseMinutes = exercise.duration + totalExerciseMinutes 
    })

    useEffect(() => {
        getExercises()
      }, [])

    return (
        <div className="activity-overview">
            <div className="header">
                <div className="header-label">
                    <h1>Activity Feed</h1>
                </div> 
                <div className="activity-buttons">
                    <button onClick={handleOnAddExercise}>Add Exercise</button>
                    <button>Add Nutrition</button>
                    <button>Add Sleep</button>
                </div>
            </div>
            <div className="activity-card-container">
                <div className="activity-card">
                    <p className="card-label">Total Exercise Minutes</p>
                    <h1>{totalExerciseMinutes}</h1>
                </div>
                <div className="activity-card">
                    <p>Avg Hours Slept</p>
                    <h1>0</h1>
                </div>
                <div className="activity-card">
                    <p>Avg Daily Calories</p>
                    <h1>0</h1>
                </div>
            </div>
        </div>
    )
}