import React from 'react';
import PropTypes from 'prop-types';
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

Listing.propTypes = {
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  timeframe: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
