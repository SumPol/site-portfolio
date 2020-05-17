import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default class Contacts extends Component {
  render() {
    return (
        <Container className="contacts-container" style={{'max-width': '500px'}}>
          <h1 className="text-center"> Свяжитесь со мной </h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email адрес</Form.Label>
              <Form.Control type="email" placeholder="Введите email" />
              <Form.Text>
                Ваш email не будет отправлен кому-то еще
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Пример текстовой области</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Проверить меня" />
            </Form.Group>
            <Button variant="primary" type="submit" >Подтвердить</Button>

          </Form>
        </Container>
    )
  }
}