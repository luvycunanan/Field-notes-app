import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const URL = 'http://localhost:4000/api/destinations';

class EditDestination extends Component {
  state = {
    destinationName: '',
  };

  componentDidMount() {
    fetch(`${URL}/${this.props.match.params.id}`)
        .then((response) => {
          return response.json();
        })
        .then((jsonData) => {
          this.setState(jsonData)
        })
        .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${URL}/${this.props.match.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
    .then(() => this.props.history.push('/destinations'))
    .catch((err) => console.log(err));
  };
  
  render() {
    return(
      <div>
        <h1>Edit Destination</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type='text'
              id='destinationName'
              name='destinationName'
              placeholder={this.state.destinationName}
              value={this.props.destinationName}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit' >Save</button>
        </form>
      </div>
    )
  }
};

export default withRouter(EditDestination);