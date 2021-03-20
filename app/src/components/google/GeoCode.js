import { useState, useEffect } from 'react';
import MapContainer from './MapContainer';

import './SearchBar.css'

const KEY = process.env.REACT_APP_API_KEY; 

const GeoCode = (props) => {
  const [results, setResults] = useState('')

  useEffect(() => {
    if (props.spots) {props.spots.forEach((spot) => {
      const URL = `https://maps.googleapis.com//maps/api/geocode/json?address=${spot.spotName}&components=country${props.destName}&key=${KEY}`;
      fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results[0].geometry.location)
      })
      .catch((err) => console.log(err))
    })}
  }, [props.spots])

  return(
    <div style={{
      position: 'relative',
      marginTop: '-250px',
    }}>
      <MapContainer clearMap={props.clearMap} geometry={results} />
    </div>
  )
}

export default GeoCode;