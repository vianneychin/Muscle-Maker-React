import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }
  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }
  onFormSubmit = (event) => {
    event.preventDefault()

    this.props.onTermSubmit(this.state.term)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Video Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    )
  }
}
export default SearchBar