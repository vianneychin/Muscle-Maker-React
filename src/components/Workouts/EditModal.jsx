import React from 'react'
import styled from 'styled-components'

/* <----------- styled components -----------> */
const Modal = styled.div`
  width: 30em;
  background-color: grey;
`
const Inputs = styled.div`
  display: flex;
  flex-direction: column;

  > button {
      width: 23em;
  }
  > :nth-child(10) {
      width: 4em;
  }
  > :nth-child(12) {
      width: 4em;
  }
`
/* <-----------------------------------------> */

const EditModal = (props) => {
  return (
    <Modal>
      <button onClick={props.hideEditModal}>✕</button>
      <h1>Edit Workout</h1>
      <Inputs>
        <label>Workout Name:</label>
        <input placeholder="workout" />

        <label>Muscle Group:</label>
        <input placeholder="muscle" />

        <label>Equipment:</label>
        <input placeholder="equipment" />

        <label>Weight:</label>
        <input placeholder="weight" />

        <label>Sets:</label>
        <input placeholder="#" />

        <label>Reps:</label>
        <input placeholder="#" />

        <button>Confirm Changes</button>
      </Inputs>
    </Modal>
  )
}

export default EditModal