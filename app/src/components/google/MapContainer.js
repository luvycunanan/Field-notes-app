import { useEffect, useState } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
  const [geometry, setGeometry] = useState([])

  useEffect (() => {
    if (props.geometry) {
      let prevGeo = [...geometry]
      prevGeo.push(props.geometry)
      setGeometry(prevGeo)
    }
  }, [props.geometry])

    useEffect(() => {
      setGeometry(props.clearMap)
    }, [props.clearMap])

  let initCenter = { 
    lat: 37.7749,
    lng: -122.4194}
    
  console.log(geometry)
    return (
      <div>
        <Map 
          google={props.google} 
          style={{
            width: '700px',
            height: '500px',
            border: '1px solid white',
            boxShadow: '2px 2px 10px rgba(255,255,255,0.8)',
          }}
          initialCenter={initCenter}
          zoom={1.5}
        >
          {geometry.map((geoObj) => (
              <Marker position={{
                lat: geoObj.lat,
                lng: geoObj.lng
              }} />
          ))}
        </Map>
      </div>
    );
  
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)

// default key AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg