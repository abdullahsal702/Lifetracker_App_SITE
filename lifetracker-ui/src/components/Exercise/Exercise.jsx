import "./Exercise.css"
import * as React from "react"
import { useState, useEffect } from "react" 
import { Link } from "react-router-dom"

export default function Exercise({addingExercise, setAddingExercise}) {

    const handleOnAdd = () => {
        setAddingExercise(true)
    } 

    const [form, setForm] = useState({	
        "name" : "", 
        "category" : "", 
        "duration" : "", 
        "intensity" : ""
    })

    const handleOnInputChange = (event) => {
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
        // console.log(form)
    }

    const handleOnSubmit = () => {
        setAddingExercise(false)
        // console.log("submitted")
    }

    return (
        <div className="exercise-content">
            <div className="exercise-header">
                <h1>Exercise</h1>
            </div>
            { !addingExercise ? 
            <div className="exercise-overview">
                <h1 className="overview-label">Overview</h1>
                <button className="add-exercise-button" onClick={handleOnAdd}>Add Exercise</button>
            </div> : 
            <AddExercise form={form} handleOnInputChange={handleOnInputChange} handleOnSubmit={handleOnSubmit}/>
            }
     
        </div>
    )
}

export function AddExercise({form, handleOnInputChange, handleOnSubmit}) {

    return (
        <div className="form">
            <div>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Exercise name" value={form.name} onChange={handleOnInputChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" placeholder="Exercise category" value={form.category} onChange={handleOnInputChange}/>
                </div>
                <div className="split-input-field">
                    <div className="input-field">
                        <label htmlFor="duration">Duration (min)</label>
                        <input type="number" name="duration" min="1" max="100000" value={form.duration} onChange={handleOnInputChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="intensity">Intensity (RPE)</label>
                        <input type="number" name="intensity" min="1" max="10" value={form.intensity} onChange={handleOnInputChange}/>
                    </div>
                </div>
                <button className="save-btn" onClick={handleOnSubmit}>Save</button>
            </div>
        </div>
    )
}