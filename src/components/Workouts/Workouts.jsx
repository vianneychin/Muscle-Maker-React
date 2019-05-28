import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import EditModal from './EditModal'
import AddWorkoutModal from './AddWorkoutModal'

/* <----------- styled components -----------> */
const Header = styled.div`
  display: flex;
  justify-content: space-around;
`
const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: darkgrey;
`
/* <-----------------------------------------> */

// TODO: on/off button for the Add a workout modal.

const Workouts = ( props ) => {
  return (
    <div>
      <Link to="/dashboard"><h3>Go back</h3></Link>

{/*       <a><h1>Add a Workout</h1></a> */}

      <Header>
        <h4>workout</h4>
        <h4>muscle</h4>
        <h4>equipment and/or weight</h4>
        <h4>sets + reps</h4>
      </Header>
      <UnorderedList>
        <li>Squats</li>
        <li>Glutes</li>
        <li>100lb Squat Rack</li>
        <li>5 sets of 15 reps</li>
      </UnorderedList>
      <EditModal /> {/* EditModal Component */}
      <br/>
      <AddWorkoutModal /> {/* AddWorkoutModal Component */}
    </div>
  )
}
export default Workouts