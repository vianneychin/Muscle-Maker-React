import React, { Component } from 'react'

class MappedExercise extends Component {
    render(){
        return this.props.workout.map((exercise, i) => {
            return(
                <li key={i}> 
                    <p>{exercise.muscle}</p>
                    <p>{exercise.workout_name}</p>
                    <p>{exercise.equipment}</p>
                    <p>{exercise.weight}</p>
                    <p>{exercise.sets}</p>
                    <p>{exercise.reps}</p>
                </li>
        )
    })
}
}



export default MappedExercise