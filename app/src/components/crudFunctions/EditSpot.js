import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const URL = 'https://field-notes-api.herokuapp.com/api/spots';

class EditSpot extends Component {
  state = {
    spotName: '',
    address: '',
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

  handleDelete = (e) => {
    e.preventDefault();
    fetch(`${URL}/${this.props.match.params.id}`, 
    {method: 'DELETE'})
    .then(() => this.props.history.push('/destinations'))
    .catch((err) => console.log(err));
  };
  
  render() {
    return(
      <div>
        <h1>Edit Spot</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type='text'
              id='spotName'
              name='spotName'
              placeholder={this.state.spotName}
              value={this.props.spotName}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit' >Save</button>
          <button onClick={this.handleDelete}>Delete</button>
        </form>
      </div>
    )
  }
};

export default withRouter(EditSpot);