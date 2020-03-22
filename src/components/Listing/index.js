import React from 'react';
import './index.css';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Listing (props) {
  const {
    description,
    location,
    timeframe,
    type
  } = props;
  return (
    <ListGroup.Item>
        <p>{description} for {type}</p>
        <p className="text-secondary">
          <span className="pr-4">{location}</span>
          <span>When: {timeframe}</span>
        </p>
    </ListGroup.Item>
  )
}
