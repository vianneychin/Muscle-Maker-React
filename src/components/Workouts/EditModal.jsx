import React from 'react'
import styled from 'styled-components'

/* <----------- styled components -----------> */
const Modal = styled.div`
  position: absolute;
  left: 66%;
  top: 11%;
  font-family: 'Roboto',sans-serif;
  background-color: rgb(20, 20, 20, .99);
  border-top: 5px solid orangered;
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
    height: 85vh;
    div {
      margin-top: 2em;
    }
    button {
      position: relative;
      width: 8em;
      top: -10%;
      font-size: 2em;
      background-color: orangered;
      border: 4px solid orangered;
      color: white;
      margin-top: .5em;
      margin-bottom: .5em;
      border-radius: 15px;
      padding: 2px;
      padding-left: 1em;
      padding-right: 1em;
      &:hover {
        background-color: rgb(0, 0, 0, 0);
        border: 4px solid rgb(0, 0, 0, 0);
        color: orangered;
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
      position: relative;
      top: 4%;
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

class EditModal extends React.Component {
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
            <button>
              Confirm<br/>changes
            </button>
            <button onClick={this.props.hideEditModal} className="cancel-button">
              Cancel
            </button>
          </div>
      </form>
    </Modal>
    )
  }
}

export default EditModal