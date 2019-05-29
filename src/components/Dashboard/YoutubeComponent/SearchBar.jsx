import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  > label {
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Input = styled.input `
  background-color: transparent;
  font-size: 16px;
  box-shadow: none;
  max-width: 100%;
  line-height: 24px;
  border: 1px solid grey;
  box-shadow: inset 0 1px 2px grey;
  padding: 2px 6px;
  border-radius: 2px 0 0 2px;
`

class SearchBar extends React.Component {
  state = { term: '' }
  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }
  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onTermSubmit( this.state.term )
  }
  render() {
    return (
      <Wrapper>
        <label>Search for workout videos on YouTube</label>
        <Form onSubmit={this.onFormSubmit}>
          <Input
            placeholder="Search"
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </Form>
      </Wrapper>
    )
  }
}
export default SearchBar