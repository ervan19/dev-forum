import React from 'react';

import CardTags from '../CardTags/CardTags';
import CardText from '../CardText/CardText';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';

export default function Card() {
  return (
    <div className="card">
      <CardBody>
        <CardText />
        <CardTags />
      </CardBody>
      <CardFooter />
    </div>
  );
}
