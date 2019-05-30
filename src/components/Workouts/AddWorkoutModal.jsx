import React from 'react'
import styled from 'styled-components'

/* <----------- styled components -----------> */
const Modal = styled.div`
  position: absolute;
  left: 31%;
  top: 11%;
  font-family: 'Roboto', sans-serif;
  background-color: rgb(20, 20, 20, .99);
  border-top: 5px solid rgb(0, 255, 0);
  height: 85vh;
  width: 36.8em;
  h3 {
    margin-left: .7em;
    color: white;
    font-weight: 300;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: grey; */
    height: 76vh;
    div {
      position: relative;
      top: 6%;
    }
    button {
      position: relative;
      top: -15%;
      font-size: 1.5em;
      background-color: rgb(0,255,0,0.5);
      border: 4px solid white;
      color: white;
      padding: 11px;
      padding-left: 1.5em;
      padding-right: 1.5em;
      margin-top: .5em;
      margin-bottom: .5em;
      border-radius: 15px;
      &:hover {
        border: 4px solid #7FFF00;
        color: #7FFF00;
        cursor: pointer;
      }
    }
    .cancel-button {
      top: -2%;
      margin-left: 20px;
      padding: 18px;
      font-size: 2em;
      width: 6em;
      background-color: rgb(0,0,0, .0);
      &:hover {
        border: 4px solid hotpink;
        color: hotpink;
      }
    }
  input {
    width: 70%;
    padding-top: 5%;
    display: block;
    background: 0;
    border: 0;
    border-bottom: 2px solid white;
    color: #fff;
    font-weight: 600;
    font-size: 2em;
    padding-bottom: 8px;
    outline: 0;
    text-align: center;
    }
  }
`
/* <------- end of styled components --------> */

class AddWorkoutModal extends React.Component {
  render() {
    return (
      <Modal>
        <form onSubmit={e => this.doRegisterUser(e) }>
          <input
            autocomplete="off"
            placeholder="workout"
          />
          <input
            autocomplete="off"
            placeholder="muscle"
          />
          <input
            autocomplete="off"
            placeholder="equipment"
          />
          <input
            autocomplete="off"
            placeholder="weight"
          />
          <input
            autocomplete="off"
            placeholder="Sets"
          />
          <input
            autocomplete="off"
            placeholder="Reps"
          />
          <div>
            <button>Add<br/>workout</button>
            <button
              onClick={this.props.hideAddWorkoutModalModal}
              className="cancel-button"
            >
              Cancel</button>
          </div>
        </form>
      </Modal>
    )
  }
}

export default AddWorkoutModal