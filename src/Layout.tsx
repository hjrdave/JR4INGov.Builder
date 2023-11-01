import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

interface Props {
  children?: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">JR4IN Builder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col className={"pt-3"}>{children}</Col>
        </Row>
      </Container>
    </>
  );
}
