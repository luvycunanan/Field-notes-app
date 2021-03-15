import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Col, Card, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';

// Buttons
import { MdSettings } from 'react-icons/md';
import { CgFileAdd } from 'react-icons/cg';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin3Line } from 'react-icons/ri';
import { GoDiffAdded } from 'react-icons/go';

import NewDestination from './crudFunctions/NewDestination';
import NewSpot from './crudFunctions/NewSpot';
import SpotsCard from './SpotsCard';
import GeoCode from './google/GeoCode';

import './DestinationsList.css';

const URL = 'https://field-notes-api.herokuapp.com/api/destinations';


const DestinationsList = (props) => {
  const [destId, setDestId] = useState('');
  const [dest, setDest] = useState([]);
  const [spots, setSpots] = useState([]);
  const [clearMap, setClearMap] = useState([]);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  
  const updateSpots = () => {
    fetch(`${URL}/${destId}/`)
    .then((res) => res.json())
    .then((data) => {
      setSpots(data.spots)
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetch(`${URL}/${destId}/`)
    .then((res) => res.json())
    .then((data) => {
      setSpots(data.spots)
      setDest(data)
    })
    .catch((err) => console.log(err))
  }, [destId])

  const handleChange = (e) => {
    setDestId(e.target.value)
    setClearMap([]);
  }

  return(
    <div fluid style={{
      display: 'flex',
      flexDirection: 'row',
      height: '600px',
      alignItems: 'center',
      justifyContent: 'center'

    }} >
      
        
      <Card 
        style={{
          width: '300px',
          height: '500px',
          borderRadius: '10px',
          border: '2px solid rgba(0,0,0,0.2)',
          boxShadow: '2px 2px 10px rgba(255,255,255,0.8)',
        }}
      >

        <Card.Title fixed='top'
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
              
          <select 
            style={{ 
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: 'rgba(255,255,255,0.8)',
              fontWeight: 'bold',
              fontSize: '21px',
            }} 
            className='dropdown' 
            onChange={handleChange}
            >

            <option>Select Destination</option>
            {props.destinations.map((destination) => (
              <option className='dropdown-item' value={destination._id}>
                {destination.destinationName}
              </option>
            ))}

          </select>
              
              <div className="dropdown"
                style={{
                  position: 'relative',
                  border: 'none',
                  width: '20px',
                  paddingRight: '5px',
                  marginLeft: '-3%',
                  backgroundColor: 'none'
                }}
              >
                
                <MdSettings 
                  className="btn dropdown-toggle-bs" 
                  type="button" 
                  id="dropdownMenuButton" 
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false" 
                  style={{
                    position: 'relative',
                    border: 'none',
                    color: 'black',
                    backgroundColor: 'none',
                    fontSize: '50px',
                    marginLeft: '-10px'
                  }}
                />
                
                <div className="dropdown-menu drop-custom-css" 
                  aria-labelledby="dropdownMenuButton"
                  style={{
                    // display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    width: '200px',
                    height: '250px',
                    borderRadius: '10px',
                    border: '1.5px solid white',
                  }}
                >
                  <Col style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    margin: '5px',
                  }}>
                    <Link
                      style={{
                        alignSelf: 'flex-end',
                        padding: '0 5px 5px 0',
                        color: 'rgba(255,255,255,0.8)'
                      }}
                    >
                      <OverlayTrigger
                        key='left'
                        placement='left'
                        overlay={
                          <Tooltip id='tooltip-left'>New Destination</Tooltip>
                        }
                        >
                      <GoDiffAdded onClick={handleShow2}
                        style={{
                          fontSize: '45px',
                          color: 'white',
                          margin: 'auto'
                        }} />
                      </OverlayTrigger>
                    </Link>
                  
                    <Modal show={show2} onHide={handleClose2}>
                      <Modal.Header closeButton>
                        <Modal.Title>New Destination</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>

                        <NewDestination handleChange={props.handleChange}
                          handleClose={handleClose2}
                        style={{
                          alignSelf: 'flex-end',
                          padding: '5px',
                        }}/>

                      </Modal.Body>

                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                  <Col style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    margin: '5px',
                  }}>
                    <Link to={`/edit-destination/${destId}`}
                      style={{
                        alignSelf: 'flex-end',
                        padding: '0 5px 5px 0',
                        color: 'rgba(255,255,255,0.8)'
                      }}
                    >
                      <OverlayTrigger
                        key='left'
                        placement='left'
                        overlay={
                          <Tooltip id='tooltip-left'>Edit Destination</Tooltip>
                        }
                        >
                      <AiOutlineEdit 
                        style={{
                          fontSize: '45px',
                          color: 'white',
                          margin: 'auto'
                        }}
                      />
                      </OverlayTrigger>
                    </Link>
                  </Col>
                  <Col style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    margin: '5px',
                  }}>
                    <Link onClick={() => props.deleteDestination(destId)}
                      style={{
                        alignSelf: 'flex-end',
                        padding: '0 5px 5px 0',
                        color: 'rgba(255,255,255,0.8)'
                      }}
                    >
                      <OverlayTrigger
                        key='left'
                        placement='left'
                        overlay={
                          <Tooltip id='tooltip-left'>Delete Destination</Tooltip>
                        }
                        >
                      <RiDeleteBin3Line 
                        style={{
                          fontSize: '45px',
                          color: 'white',
                          margin: 'auto'
                        }}
                      />
                      </OverlayTrigger>
                    </Link>
                  </Col>
                  <Col style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    margin: '5px',
                  }}>
                    <Link
                      style={{
                        alignSelf: 'flex-end',
                        padding: '0 5px 5px 0',
                        color: 'rgba(255,255,255,0.8)'
                      }}
                    >
                      <OverlayTrigger
                        key='left'
                        placement='left'
                        overlay={
                          <Tooltip id='tooltip-left'>Add New Spot</Tooltip>
                        }
                        >
                      <CgFileAdd onClick={handleShow}
                        style={{
                          fontSize: '45px',
                          color: 'white',
                          margin: 'auto'
                        }}
                      />
                      </OverlayTrigger>
                    </Link>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>New Spot</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>

                        <NewSpot 
                        destId={destId} 
                        setDest={setDest} 
                        updateSpots={updateSpots} 
                        style={{
                          alignSelf: 'flex-end',
                          padding: '5px',
                        }}/>

                      </Modal.Body>

                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>

{/* ////////////////////////////////// */}
                    
                  </Col>

                </div>
              </div>
              
            </Card.Title>
            <ListGroup 
              style={{
                height: '410px',
                overflow: 'scroll',
              }}
            >
              {spots ? spots.map((spot) => (
                <ListGroup.Item  
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    color: 'rgba(255, 255, 255, 0.8)'
                  }}>
                  <SpotsCard spot={spot}/>
                </ListGroup.Item>
                )) : ''}
            </ListGroup>
              
            </Card>
          
        <Col md={{ span: 6}}>
          <GeoCode  destName={dest.destinationName} clearMap={clearMap} destName={dest.destinationName} spots={spots}/>
        </Col>
      
    </div>
  )
};

export default DestinationsList;