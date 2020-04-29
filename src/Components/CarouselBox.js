import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from "react-bootstrap";
import light_1 from '../assets/light_1.jpeg';
import light_2 from '../assets/light-2.jpg';
import light_3 from '../assets/light_3.jpg';
import CarouselCaption from "react-bootstrap/CarouselCaption";

export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ light_1 }
                    alt="Light 1"
                    height="600"
                />
                <Carousel.Caption>
                    <h3>Light image</h3>
                    <p>Инструмент настраивает среду для использования новейших возможностей JavaScript, оптимизирует приложение для продакшена и обеспечивает комфорт во время разработки. Вам понадобятся Node.js не ниже версии 8.10 и npm не ниже версии 5.6 на вашем компьютере. Для создания проекта выполните команды:</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ light_2 }
                    alt="Light 2"
                    height="600"
                />
                <Carousel.Caption>
                    <h3>Light image 2</h3>
                    <p>Инструмент настраивает среду для использования новейших возможностей JavaScript, оптимизирует приложение для продакшена и обеспечивает комфорт во время разработки. Вам понадобятся Node.js не ниже версии 8.10 и npm не ниже версии 5.6 на вашем компьютере. Для создания проекта выполните команды:</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ light_3 }
                    alt="Light 3"
                    height="600"
                />
                <Carousel.Caption>
                    <h3>Light image 3</h3>
                    <p>Инструмент настраивает среду для использования новейших возможностей JavaScript, оптимизирует приложение для продакшена и обеспечивает комфорт во время разработки. Вам понадобятся Node.js не ниже версии 8.10 и npm не ниже версии 5.6 на вашем компьютере. Для создания проекта выполните команды:</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
  }
}