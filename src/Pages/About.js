import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap"

export default class About extends Component {
  render() {
    return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Programming</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="first">
                                <img className="img-tab" src="https://i.pinimg.com/736x/92/b1/cb/92b1cb77a4ec1c228dec1ed890e1a741.jpg" />
                                <p>Create React App не обрабатывает бэкенд логику или базы данных, он только предоставляет команды для сборки фронтенда, поэтому вы можете использовать его с любым бэкэндом. «Под капотом» используются Babel и webpack, но вам не нужно ничего знать о них.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img className="img-tab" src="https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                <p>Create React App не обрабатывает бэкенд логику или базы данных, он только предоставляет команды для сборки фронтенда, поэтому вы можете использовать его с любым бэкэндом. «Под капотом» используются Babel и webpack, но вам не нужно ничего знать о них.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img className="img-tab" src="https://img5.goodfon.ru/wallpaper/nbig/8/58/dizain-design-neon-light-room-background-neon-abstract.jpg" />
                                <p>Create React App не обрабатывает бэкенд логику или базы данных, он только предоставляет команды для сборки фронтенда, поэтому вы можете использовать его с любым бэкэндом. «Под капотом» используются Babel и webpack, но вам не нужно ничего знать о них.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img className="img-tab" src="https://image.freepik.com/free-vector/neon-light-arrow-direction-perspective_1017-22033.jpg" />
                                <p>Create React App не обрабатывает бэкенд логику или базы данных, он только предоставляет команды для сборки фронтенда, поэтому вы можете использовать его с любым бэкэндом. «Под капотом» используются Babel и webpack, но вам не нужно ничего знать о них.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <img className="img-tab" src="https://images.unsplash.com/photo-1535079085034-f44d7e20545e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                                <p>Create React App не обрабатывает бэкенд логику или базы данных, он только предоставляет команды для сборки фронтенда, поэтому вы можете использовать его с любым бэкэндом. «Под капотом» используются Babel и webpack, но вам не нужно ничего знать о них.</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
  }
}