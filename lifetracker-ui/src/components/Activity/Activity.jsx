import "./Activity.css"
import * as React from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Activity({setAddingExercise}) {
    const navigate = useNavigate();

    const handleOnAddExercise = () => {
        setAddingExercise(true)
        navigate("/exercise")
    }

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
        </div>
    )
}