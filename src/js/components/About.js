// From React Router v6 Youtube Clip
import React from "react";
import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';
import Safari from "../../images/Safari.png";
//import elephant from "../../images/elephant.png";
//import impala from "../../images/impala.png";
//import zebra from "../../images/zebra.png";

export default function About() {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Text>
          Omdat ons ook self passievolle Wildtuinmense is, weet ons hoe belangrik dit vir jou is om jou gunsteling plekke te kry, so ons gee jou nie bloot die plekke wat beskikbaar is wanneer jou bespreking gedoen word nie, ons hou aan met soek vir kansellasies totdat ons jou gunsteling plekke vir jou gekry het.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={Safari} />
      </Card>
    </>
  );
};