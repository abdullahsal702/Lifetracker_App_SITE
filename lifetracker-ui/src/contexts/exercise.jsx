import {createContext, useState, useContext, useEffect} from 'react'

import apiClient from '../services/apiClient';
import { useAuthContext } from './auth';

const ExerciseContext = createContext(null);

export const ExerciseContextProvider = ({children}) => {
    const [exercises, setExercises] = useState([])
    const [error, setError] = useState(null)
    const { user }= useAuthContext()

    useEffect(() => {
       const getExercises = async () => {
            const {data, error} = await apiClient.getExercises()
            if (data) {
                console.log(data)
                await setExercises(data)
            }

            if (error) setError(error);
       } 
       const token = localStorage.getItem("lifetracker-token");
       if(token) {
            apiClient.setToken(token);
            getExercises();
        }
    }, [user]);

    const exerciseValue = {
        exercises, 
        setExercises,
        error, 
        setError
    }

    return (
        <ExerciseContext.Provider value={exerciseValue}>
            <>{children}</>
        </ExerciseContext.Provider>
    )

}

export const useExerciseContext = () => useContext(ExerciseContext)
