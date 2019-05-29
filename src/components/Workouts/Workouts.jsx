import React           from 'react'
import { Link }        from 'react-router-dom'
import EditModal       from './EditModal'
import AddWorkoutModal from './AddWorkoutModal'
import styled          from 'styled-components'

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

class Workouts extends React.Component {
  state = {
    addWorkoutModal: false,
    editModal: false
  }
  showAddWorkoutModal = () => {
    this.setState({ addWorkoutModal: true })
  }
  hideAddWorkoutModal = () => {
    this.setState({ addWorkoutModal: false })
  }
  showEditModal = () => {
    this.setState({ editModal: true })
  }
  hideEditModal = () => {
    this.setState({ editModal: false })
  }
  render() {
    return (
      <div>
        <Link to="/dashboard"><h3>Go back</h3></Link>

        {/* Toggle button for modal. */}
        <button type="button" onClick={this.showAddWorkoutModal}>Add a Workout</button>
        <button type="button" onClick={this.showEditModal}>Edit</button>

        {/* Ternary to show/hide Modal */}
        {
          this.state.addWorkoutModal
          ? <AddWorkoutModal
              hideAddWorkoutModal={this.hideAddWorkoutModal}
            />
          : <div />
        }

        {/* Ternary to show/hide Modal */}
        {
          this.state.editModal
          ? <EditModal
              hideEditModal={this.hideEditModal}
            />
          : <div />
        }

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

        {/* COMPONENT */}
        <EditModal />

        {/* COMPONENT */}
        <AddWorkoutModal />
      </div>
    )
  }
}
export default Workouts