import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const URL = 'https://field-notes-api.herokuapp.com/api/spots';

class NewSpot extends Component {
  state = {
    spotName: '',
    destination: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      destination: this.props.destId,
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
      this.props.updateSpots()
      this.setState({
        spotName: ''
      })
    })
    .catch((err) => console.log(err));
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type='text'
              id='spotName'
              name='spotName'
              placeholder='New spot...'
              value={this.state.spotName}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    )
  }
};

export default withRouter(NewSpot);