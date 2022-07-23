import "./Exercise.css"
import * as React from "react"
import { useState, useEffect } from "react" 
import { useExerciseContext } from "../../contexts/exercise";
import axios from "axios"
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

    const [exercises, setExercises] = useState([])

    const handleOnInputChange = (event) => {
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
        // console.log(form)
    }

    async function postExercise() {
        try {
            let config = {
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAZ21haWwuY29tIiwiaWF0IjoxNjU4NTU4MDU5LCJleHAiOjE2NTg2NDQ0NTl9.piYEqMTayBBOLwdjTKqoIwZ28epTQBRplcieQr5CZmI"
                }
              }
            let response = await axios.post("http://localhost:3001/exercise", form, config)
            console.log(response.data.results)
            getExercises()
        } catch(error) {
            console.error(error)
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault() 
        postExercise()
        setAddingExercise(false)
    }

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

    useEffect(() => {
        getExercises()
      }, [])
    

    return (
        <div className="exercise-content">
            <div className="exercise-header">
                <h1>Exercise</h1>
            </div>
            { !addingExercise ? 
            <div> 
                <div className="exercise-overview">
                    <h1 className="overview-label">Overview</h1>
                    <button className="add-exercise-button" onClick={handleOnAdd}>Add Exercise</button>
                </div> 
                <div className="exercise-grid">
                    {exercises.map((exercise, index) => {
                        return <ExerciseCard key={index} name={exercise.name} category={exercise.category} duration={exercise.duration} intensity={exercise.intensity}/>
                    })}
                </div>
            </div>
            : 
            <AddExercise form={form} handleOnInputChange={handleOnInputChange} handleOnSubmit={handleOnSubmit}/>
            }
     
        </div>
    )
}

export function AddExercise({form, handleOnInputChange, handleOnSubmit}) {

    return (
        <div className="form">
            <h1>Add Exercise</h1>
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

export function ExerciseCard({name, category, duration, intensity}) {
    return (
        <div className="exercise-card">
            <p>{name}</p>
            <p>{category}</p>
            <p>{duration}</p>
            <p>{intensity}</p>
        </div>
    )
}