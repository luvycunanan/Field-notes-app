import React, { Component } from 'react';
import DestinationsList from '../DestinationsList';

const URL = 'http://localhost:4000/api/destinations';

class Destination extends Component {
  state = {
    destinations: [],
  };
  
  componentDidMount() {
    fetch(URL)
    .then((res) => res.json())
    .then((data) => this.setState({
      destinations: data,
    }))
    .catch((err) => console.log(err))
  }
  
  handleChange = () => {
    fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        destinations: data,
      })
    })
    .catch((err) => console.log(err))
  }

  handleDelete = (id) => {
    fetch(`${URL}/${id}`,
    {method: 'DELETE'})
    .then((res) => res.json())
    .then((data) => {
      this.handleChange();
    })
    .catch((err) => console.log(err))
  }

  addSpot = (newSpot, destinationID) => {
    this.setState((prevState) => {
      const updatedDestinations = prevState.destinations.map((destination) => {
        if (destination._id === destinationID) {
          destination.spots.push(newSpot)
          return destination
        }
        return destination
      })
      return {destinations: updatedDestinations}
    })
  };

  render() {
    return(
        <DestinationsList 
          addSpot={this.addSpot} 
          destinations={this.state.destinations} 
          deleteDestination={this.handleDelete}
          handleChange={this.handleChange}
        />
    )
  }
};

export default Destination;