import "./Exercise.css"
import * as React from "react"
import { Link } from "react-router-dom"

export default function Activity() {
    return (
        <div className="exercise-content">
            <div className="exercise-header">
                <h1>Exercise</h1>
            </div>
            <div className="exercise-overview">
                <h1 className="overview-label">Overview</h1>
                <button className="add-exercise-button">Add Exercise</button>
            </div>
        </div>
    )
}