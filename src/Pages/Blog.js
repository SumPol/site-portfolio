import React, { Component } from "react";
import { Container, Media, Col, Row, Card, ListGroup } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
        <Container>
          <Row>
            <Col md="9">
              <Media className="m-5">
                <img 
                  width={150}
                  height={150}
                  className="mr-3"
                  src="https://images.pexels.com/photos/1268530/pexels-photo-1268530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
                <Media.Body>
                  <h5>Блог пост</h5>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus ex, dignissim eu eros nec, sagittis consequat libero. Donec in leo a leo porta blandit vel a magna. Sed augue.
                  </p>
                </Media.Body>
              </Media>
              <Media className="m-5">
                <img 
                  width={150}
                  height={150}
                  className="mr-3"
                  src="https://images.pexels.com/photos/1268530/pexels-photo-1268530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
                <Media.Body>
                  <h5>Блог пост</h5>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus ex, dignissim eu eros nec, sagittis consequat libero. Donec in leo a leo porta blandit vel a magna. Sed augue.
                  </p>
                </Media.Body>
              </Media>
              <Media className="m-5">
                <img 
                  width={150}
                  height={150}
                  className="mr-3"
                  src="https://images.pexels.com/photos/1268530/pexels-photo-1268530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
                <Media.Body>
                  <h5>Блог пост</h5>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus ex, dignissim eu eros nec, sagittis consequat libero. Donec in leo a leo porta blandit vel a magna. Sed augue.
                  </p>
                </Media.Body>
              </Media>
              <Media className="m-5">
                <img 
                  width={150}
                  height={150}
                  className="mr-3"
                  src="https://images.pexels.com/photos/1268530/pexels-photo-1268530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
                <Media.Body>
                  <h5>Блог пост</h5>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus ex, dignissim eu eros nec, sagittis consequat libero. Donec in leo a leo porta blandit vel a magna. Sed augue.
                  </p>
                </Media.Body>
              </Media>
            </Col>
            <Col md="3">
              <h5 className="text-center mt-5"> Категории </h5>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>Литература</ListGroup.Item>
                  <ListGroup.Item>Видео</ListGroup.Item>
                  <ListGroup.Item>Stepick</ListGroup.Item>
                  <ListGroup.Item>Другие курсы</ListGroup.Item>
                  <ListGroup.Item>Сертификаты</ListGroup.Item>
                </ListGroup>
              </Card>

              <Card className="mt-3" bg="light">
                <Card.Body>
                  <Card.Title>Виджет</Card.Title>
                  <Card.Text>Donec in leo a leo porta blandit vel a magna. Sed augue.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    )
  }
}