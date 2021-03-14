import { Container, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './SpotsCard.css'

const SpotsCard = (props) => {

  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`${URL}/${this.props.match.params.id}`, 
    {method: 'DELETE'})
    .then(() => this.props.history.push('/destinations'))
    .catch((err) => console.log(err));
  };
  

  return(
    <Container>
        <Col>
          <h4>{props.spot.spotName}</h4>
        </Col>
        <Col>
          <OverlayTrigger
            key='left'
            placement='left'
            overlay={
              <Tooltip id='tooltip-left'>Edit or Delet Spot</Tooltip>
            }
            >
            <Link id='card-actions' to={`/edit-spot/${props.spot._id}`} >
              <select style={{
                background: 'none',
                backgroundColor: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.8)'
              }}>
                <option></option>
                <Link to='/edit-spot'><option>Edit</option></Link>
                <option onClick={handleDelete}>Delete</option>
              </select>
            </Link>
          </OverlayTrigger>
        </Col>
    </Container>
  )
};

export default SpotsCard;