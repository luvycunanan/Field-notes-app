import React, { Component } from 'react';

const URL = 'http://localhost:4000/api/destinations';

class NewDestination extends Component {
  state = {
    destinationName: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
    .then((res) => res.json())
    .then((data) => {
      this.props.handleClose();
      this.props.handleChange();
      this.setState({
        destinationName: ''
      })
    })
    .catch((err) => console.log(err));
  };

  

  render() {
    return(
      <div>
        <h1>Add New Destination</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type='text'
              id='destinationName'
              name='destinationName'
              value={this.state.destinationName}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit' >Save</button>
        </form>
      </div>
    )
  }
};

export default NewDestination;