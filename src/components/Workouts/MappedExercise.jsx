import React, { Component } from 'react'
import styled from 'styled-components'

const UnorderedList = styled.ul`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: space-around;
  background-color: white;
  color: black;
  font-size: 2em;
  list-style: none;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  font-weight: 400;
`

class MappedExercise extends Component {
  render() {
    return this.props.workout.map((exercise, i) => {
      return (
        <UnorderedList key={i}>
          <li>{exercise.muscle}</li>
          <li>{exercise.workout_name}</li>
          <li>
            {exercise.equipment} | {exercise.weight}lbs
          </li>
          <li>
            {exercise.sets} sets | {exercise.reps} reps
          </li>
          <button onClick={() => this.props.deleteWorkout(exercise.id)}>
            Delete
          </button>
        </UnorderedList>
      )
    })
  }
}

export default MappedExercise
