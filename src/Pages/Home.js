import React, { Component } from "react";
import CarouselBox from '../Components/CarouselBox'
import Carousel from 'react-bootstrap/Carousel'
import { Container, CardDeck, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Мои работы</h2>
          <CardDeck className="m-4">
            <Card>
              <Card.Img 
              variant="top" 
              src="https://images.pexels.com/photos/1596884/pexels-photo-1596884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <Card.Body>
                <Card.Title>Сайт 1</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis in porttitor odio.
                </Card.Text>
                <Button variant="primary">Подробнее о сайте 1</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Сайт 2</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis in porttitor odio.
                </Card.Text>
                <Button variant="primary">Подробнее о сайте 2</Button>
              </Card.Body>
              <Card.Img 
              variant="bottom" 
              src="https://images.pexels.com/photos/930005/pexels-photo-930005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </Card>
            <Card>
              <Card.Img 
              variant="top" 
              src="https://images.pexels.com/photos/707408/pexels-photo-707408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <Card.Body>
                <Card.Title>Сайт 3</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis in porttitor odio.
                </Card.Text>
                <Button variant="primary">Подробнее о сайте 3</Button>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck className="m-4">
            <Card>
              <Card.Img 
              variant="top" 
              src="https://images.pexels.com/photos/1596884/pexels-photo-1596884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <Card.Body>
                <Card.Title>Сайт 1</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis in porttitor odio.
                </Card.Text>
                <Button variant="primary">Подробнее о сайте 1</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Сайт 2</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis in porttitor odio.
                </Card.Text>
                <Button variant="primary">Подробнее о сайте 2</Button>
              </Card.Body>
              <Card.Img 
              variant="bottom" 
              src="https://images.pexels.com/photos/930005/pexels-photo-930005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </Card>
            <Card>
              <Card.Img 
              variant="top" 
              src="https://images.pexels.com/photos/707408/pexels-photo-707408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <Card.Body>
                <Card.Title>Сайт 3</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis in porttitor odio.
                </Card.Text>
                <Button variant="primary">Подробнее о сайте 3</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
        </>
    )
  }
}