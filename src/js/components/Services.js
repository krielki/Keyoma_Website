// From React Router v6 Youtube Clip
import React from "react";
import ContactForm from './Contactform';
import SafariDrive from "../../images/SafariDrive.png";
// import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import kudu from "../../images/kudu.png";
import impala from "../../images/impala.png";
import zebra from "../../images/zebra.png";

function Services() {
  return (
    <>
    <div>
    <Card>
        <Card.Body>
          <Card.Title>Our Services are Free!</Card.Title>
          <Card.Text>
          We receive compensation from the providers of the accommodation and other services.
          </Card.Text>
          <Button variant="dark">Book Now</Button>
        </Card.Body>
    </Card>
    </div>
    <br />
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={kudu} />
        <Card.Body>
          <Card.Title>SA National Parks</Card.Title>
          <Card.Text>
          Tau Safaris is an official reservations agent for SA National Parks.
          We provide a free reservation service for all SA National Parks, including Kruger National Park, Kgalagadi Transfrontier Park & Addo Elephant National Park.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={impala} />
        <Card.Body>
          <Card.Title>Established.</Card.Title>
          <Card.Text>
          Tau Safaris was established in 2000, but our expertise has been built up since 1990.
          Use our expertise to help you plan and book your next holiday or excursion to the Kruger Park or other SA National Park.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={zebra} />
        <Card.Body>
          <Card.Title>Car Rental</Card.Title>
          <Card.Text>
          We also do Car Rental in South Africa. Call us today to check availability, or send us an e-mail {' '}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <br />
    <ContactForm />

</>
        );
  }

  export default Services;