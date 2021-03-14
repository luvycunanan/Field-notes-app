import { Container, Col, Row, Card } from 'react-bootstrap';

import './About.css'

const About = () => {
  return(
    <Container id='about-css' bg='dark'>
      <Row>
        <Col>
          <Card style={{ width: '18rem',
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: '10px',
          }}>
            <Card.Body>
              <Card.Title style={{ color: 'rgba(255,255,255,0.9)'}}>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text style={{ color: 'rgba(255,255,255,0.9)'}}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa similique consectetur tempora natus at deserunt aliquid expedita maxime corrupti vero esse cupiditate eius qui quae a accusantium quo neque, reiciendis, illo quisquam. Minima corrupti quia adipisci? Praesentium perferendis perspiciatis beatae natus earum. Molestias atque autem eveniet inventore quasi dicta vero.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem',
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: '10px',
          }}>
            <Card.Body>
              <Card.Title style={{ color: 'rgba(255,255,255,0.9)'}}>Card Title</Card.Title>
              <Card.Subtitle  className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text style={{ color: 'rgba(255,255,255,0.9)'}}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa similique consectetur tempora natus at deserunt aliquid expedita maxime corrupti vero esse cupiditate eius qui quae a accusantium quo neque, reiciendis, illo quisquam. Minima corrupti quia adipisci? Praesentium perferendis perspiciatis beatae natus earum. Molestias atque autem eveniet inventore quasi dicta vero.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem',
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: '10px',
          }}>
            <Card.Body>
              <Card.Title style={{ color: 'rgba(255,255,255,0.9)'}}>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text style={{ color: 'rgba(255,255,255,0.9)'}}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa similique consectetur tempora natus at deserunt aliquid expedita maxime corrupti vero esse cupiditate eius qui quae a accusantium quo neque, reiciendis, illo quisquam. Minima corrupti quia adipisci? Praesentium perferendis perspiciatis beatae natus earum. Molestias atque autem eveniet inventore quasi dicta vero.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
};

export default About;