import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container, Image } from 'react-bootstrap';
import landscape from "../../images/landscape.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
    <hr className="b-example-divider" />

      <Container className="col-xxl-8 px-4 py-5">
        <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
          <Col xs={10} sm={8} lg={6}>
            <Image src={landscape} width="700" height="500" alt="Bootstrap Themes" loading="lazy" className="d-block mx-lg-auto img-fluid" />
          </Col>
          <Col lg={6}>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button variant="primary" className="btn-lg px-4 me-md-2" as={Link} to="/path-for-primary-button">Primary</Button>
              <Button variant="outline-secondary" className="btn-lg px-4" as={Link} to="/path-for-secondary-button">Default</Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Card>
        <Card.Body>
          <Card.Text>
          Omdat ons ook self passievolle Wildtuinmense is, weet ons hoe belangrik dit vir jou is om jou gunsteling plekke te kry, so ons gee jou nie bloot die plekke wat beskikbaar is wanneer jou bespreking gedoen word nie, ons hou aan met soek vir kansellasies totdat ons jou gunsteling plekke vir jou gekry het.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={landscape} />
      </Card>
    </>
  );
};