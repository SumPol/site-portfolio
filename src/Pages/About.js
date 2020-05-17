import React, {Component} from 'react';
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap';
import Footer from '../Components/Footer';

export default class About extends Component {
  render () {
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
                  <div className="containerForImage">
                    <img
                      className="img-tab"
                      src="https://i.pinimg.com/736x/92/b1/cb/92b1cb77a4ec1c228dec1ed890e1a741.jpg"
                    />
                  </div>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec fermentum massa. Maecenas finibus rhoncus justo tincidunt dapibus. Morbi eget pretium mauris. Nullam congue felis urna, lobortis pulvinar felis accumsan ac. Donec imperdiet, lectus nec condimentum ornare, mauris erat auctor libero, et egestas felis justo nec leo. Mauris quis cursus leo. Integer molestie ligula sed porta porta.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="containerForImage">
                    <img
                      className="img-tab"
                      src="https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                  </div>
                  <p>
                  Suspendisse nec fermentum massa. Maecenas finibus rhoncus justo tincidunt dapibus. Morbi eget pretium mauris. Nullam congue felis urna, lobortis pulvinar felis accumsan ac. Donec imperdiet, lectus nec condimentum ornare, mauris erat auctor libero, et egestas felis justo nec leo. Mauris quis cursus leo. Integer molestie ligula sed porta porta. Nunc ligula lorem, viverra vel ipsum a, pharetra facilisis arcu.
Aenean sit amet nisi porttitor, pretium dui in, vehicula ante. Cras imperdiet quam elit, vitae semper diam vulputate ut. Etiam sit amet nisl vitae mauris volutpat eleifend. Pellentesque volutpat tellus id purus lobortis ullamcorper. Vivamus non velit viverra, volutpat felis at, lobortis purus. Mauris vitae massa eget neque maximus ultricies nec eget erat. Nam massa ante, imperdiet id interdum non, dignissim pharetra massa. Fusce pellentesque, quam quis hendrerit consequat, elit elit finibus velit, vitae ullamcorper tellus orci nec velit. Sed ut dignissim enim.
Nam commodo mi ipsum, eget viverra lectus pulvinar posuere. Aliquam est augue, faucibus quis mauris eu, pulvinar molestie sapien. Fusce sed purus tellus. Vivamus laoreet viverra arcu. Pellentesque malesuada ex et erat viverra, vitae imperdiet urna faucibus. Proin ornare augue sed urna dictum vehicula eu a massa. Integer vel dui sollicitudin, cursus massa vel, tempus nisl. Praesent sit amet leo lobortis, aliquet lectus nec, eleifend magna.
Proin ex quam, rutrum ut arcu tristique, tempor eleifend augue. Cras quis molestie lorem. Morbi sed enim a mauris tincidunt iaculis malesuada eget enim. Donec enim urna, finibus ac sapien eget, lobortis vehicula orci. Donec bibendum magna et blandit mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tempus magna a dui fringilla, sed lobortis ipsum fringilla. Etiam viverra convallis purus vitae sollicitudin. Aliquam erat volutpat. Mauris bibendum, urna at euismod bibendum, urna nulla sagittis purus, ut bibendum mi mauris ac nibh. Maecenas sit amet ante eu massa iaculis elementum. Curabitur in massa at nisi scelerisque tristique. Duis a consequat felis. Donec risus felis, varius eleifend pharetra sollicitudin, ultrices vel metus. Maecenas tempus, ex a rutrum mollis, ligula metus placerat felis, quis malesuada eros mauris et augue.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="containerForImage">
                    <img
                      className="img-tab"
                      src="https://img5.goodfon.ru/wallpaper/nbig/8/58/dizain-design-neon-light-room-background-neon-abstract.jpg"
                    />
                  </div>
                  <p>
                  Maecenas finibus rhoncus justo tincidunt dapibus. Morbi eget pretium mauris. Nullam congue felis urna, lobortis pulvinar felis accumsan ac. Donec imperdiet, lectus nec condimentum ornare, mauris erat auctor libero, et egestas felis justo nec leo. Mauris quis cursus leo. Integer molestie ligula sed porta porta. Nunc ligula lorem, viverra vel ipsum a, pharetra facilisis arcu.
Aenean sit amet nisi porttitor, pretium dui in, vehicula ante. Cras imperdiet quam elit, vitae semper diam vulputate ut. Etiam sit amet nisl vitae mauris volutpat eleifend. Pellentesque volutpat tellus id purus lobortis ullamcorper. Vivamus non velit viverra, volutpat felis at, lobortis purus. Mauris vitae massa eget neque maximus ultricies nec eget erat. Nam massa ante, imperdiet id interdum non, dignissim pharetra massa. Fusce pellentesque, quam quis hendrerit consequat, elit elit finibus velit, vitae ullamcorper tellus orci nec velit. Sed ut dignissim enim.
Nam commodo mi ipsum, eget viverra lectus pulvinar posuere. Aliquam est augue, faucibus quis mauris eu, pulvinar molestie sapien. Fusce sed purus tellus. Vivamus laoreet viverra arcu. Pellentesque malesuada ex et erat viverra, vitae imperdiet urna faucibus. Proin ornare augue sed urna dictum vehicula eu a massa. Integer vel dui sollicitudin, cursus massa vel, tempus nisl. Praesent sit amet leo lobortis, aliquet lectus nec, eleifend magna.
Proin ex quam, rutrum ut arcu tristique, tempor eleifend augue. Cras quis molestie lorem. Morbi sed enim a mauris tincidunt iaculis malesuada eget enim. Donec enim urna, finibus ac sapien eget, lobortis vehicula orci. Donec bibendum magna et blandit mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tempus magna a dui fringilla, sed lobortis ipsum fringilla. Etiam viverra convallis purus vitae sollicitudin. Aliquam erat volutpat. Mauris bibendum, urna at euismod bibendum, urna nulla sagittis purus, ut bibendum mi mauris ac nibh. Maecenas sit amet ante eu massa iaculis elementum. Curabitur in massa at nisi scelerisque tristique. Duis a consequat felis. Donec risus felis, varius eleifend pharetra sollicitudin, ultrices vel metus. Maecenas tempus, ex a rutrum mollis, ligula metus placerat felis, quis malesuada eros mauris et augue.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div className="containerForImage">
                    <img
                      className="img-tab"
                      src="https://image.freepik.com/free-vector/neon-light-arrow-direction-perspective_1017-22033.jpg"
                    />
                  </div>
                  <p>
                  Morbi eget pretium mauris. Nullam congue felis urna, lobortis pulvinar felis accumsan ac. Donec imperdiet, lectus nec condimentum ornare, mauris erat auctor libero, et egestas felis justo nec leo. Mauris quis cursus leo. Integer molestie ligula sed porta porta. Nunc ligula lorem, viverra vel ipsum a, pharetra facilisis arcu.
Aenean sit amet nisi porttitor, pretium dui in, vehicula ante. Cras imperdiet quam elit, vitae semper diam vulputate ut. Etiam sit amet nisl vitae mauris volutpat eleifend. Pellentesque volutpat tellus id purus lobortis ullamcorper. Vivamus non velit viverra, volutpat felis at, lobortis purus. Mauris vitae massa eget neque maximus ultricies nec eget erat. Nam massa ante, imperdiet id interdum non, dignissim pharetra massa. Fusce pellentesque, quam quis hendrerit consequat, elit elit finibus velit, vitae ullamcorper tellus orci nec velit. Sed ut dignissim enim.
Nam commodo mi ipsum, eget viverra lectus pulvinar posuere. Aliquam est augue, faucibus quis mauris eu, pulvinar molestie sapien. Fusce sed purus tellus. Vivamus laoreet viverra arcu. Pellentesque malesuada ex et erat viverra, vitae imperdiet urna faucibus. Proin ornare augue sed urna dictum vehicula eu a massa. Integer vel dui sollicitudin, cursus massa vel, tempus nisl. Praesent sit amet leo lobortis, aliquet lectus nec, eleifend magna.
Proin ex quam, rutrum ut arcu tristique, tempor eleifend augue. Cras quis molestie lorem. Morbi sed enim a mauris tincidunt iaculis malesuada eget enim. Donec enim urna, finibus ac sapien eget, lobortis vehicula orci. Donec bibendum magna et blandit mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tempus magna a dui fringilla, sed lobortis ipsum fringilla. Etiam viverra convallis purus vitae sollicitudin. Aliquam erat volutpat. Mauris bibendum, urna at euismod bibendum, urna nulla sagittis purus, ut bibendum mi mauris ac nibh. Maecenas sit amet ante eu massa iaculis elementum. Curabitur in massa at nisi scelerisque tristique. Duis a consequat felis. Donec risus felis, varius eleifend pharetra sollicitudin, ultrices vel metus. Maecenas tempus, ex a rutrum mollis, ligula metus placerat felis, quis malesuada eros mauris et augue.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <div className="containerForImage">
                    <img
                      className="img-tab"
                      src="https://images.unsplash.com/photo-1535079085034-f44d7e20545e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    />
                  </div>
                  <p>
                  Nullam congue felis urna, lobortis pulvinar felis accumsan ac. Donec imperdiet, lectus nec condimentum ornare, mauris erat auctor libero, et egestas felis justo nec leo. Mauris quis cursus leo. Integer molestie ligula sed porta porta. Nunc ligula lorem, viverra vel ipsum a, pharetra facilisis arcu.
Aenean sit amet nisi porttitor, pretium dui in, vehicula ante. Cras imperdiet quam elit, vitae semper diam vulputate ut. Etiam sit amet nisl vitae mauris volutpat eleifend. Pellentesque volutpat tellus id purus lobortis ullamcorper. Vivamus non velit viverra, volutpat felis at, lobortis purus. Mauris vitae massa eget neque maximus ultricies nec eget erat. Nam massa ante, imperdiet id interdum non, dignissim pharetra massa. Fusce pellentesque, quam quis hendrerit consequat, elit elit finibus velit, vitae ullamcorper tellus orci nec velit. Sed ut dignissim enim.
Nam commodo mi ipsum, eget viverra lectus pulvinar posuere. Aliquam est augue, faucibus quis mauris eu, pulvinar molestie sapien. Fusce sed purus tellus. Vivamus laoreet viverra arcu. Pellentesque malesuada ex et erat viverra, vitae imperdiet urna faucibus. Proin ornare augue sed urna dictum vehicula eu a massa. Integer vel dui sollicitudin, cursus massa vel, tempus nisl. Praesent sit amet leo lobortis, aliquet lectus nec, eleifend magna.
Proin ex quam, rutrum ut arcu tristique, tempor eleifend augue. Cras quis molestie lorem. Morbi sed enim a mauris tincidunt iaculis malesuada eget enim. Donec enim urna, finibus ac sapien eget, lobortis vehicula orci. Donec bibendum magna et blandit mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tempus magna a dui fringilla, sed lobortis ipsum fringilla. Etiam viverra convallis purus vitae sollicitudin. Aliquam erat volutpat. Mauris bibendum, urna at euismod bibendum, urna nulla sagittis purus, ut bibendum mi mauris ac nibh. Maecenas sit amet ante eu massa iaculis elementum. Curabitur in massa at nisi scelerisque tristique. Duis a consequat felis. Donec risus felis, varius eleifend pharetra sollicitudin, ultrices vel metus. Maecenas tempus, ex a rutrum mollis, ligula metus placerat felis, quis malesuada eros mauris et augue.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
