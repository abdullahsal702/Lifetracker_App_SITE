import "./Activity.css"
import * as React from "react"
import { Link } from "react-router-dom"

export default function Activity() {
    return (
        <div className="activity-overview">
            <div className="header">
                <div className="header-label">
                    <h1>Activity Feed</h1>
                </div> 
                <div className="activity-buttons">
                    <button>Add Exercise</button>
                    <button>Add Nutrition</button>
                    <button>Add Sleep</button>
                </div>
            </div>
        </div>
    )
}