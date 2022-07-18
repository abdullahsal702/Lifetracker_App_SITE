import "./Activity.css"
import * as React from "react"
import { Link } from "react-router-dom"

export default function Activity() {
    return (
        <div className="activity-overview">
            <div className="header">
                <h1>Activity Feed</h1>
                <button>Add Exercise</button>
                <button>Add Nutrition</button>
                <button>Add Sleep</button>
            </div>
        </div>
    )
}