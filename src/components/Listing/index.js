import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Listing (props) {
  const {
    description,
    location,
    timeframe,
    type
  } = props;

  let symbol, variant;
  if (type === 'requests') {
    symbol = 'R';
    variant = "warning"
  }
  if (type === 'offers') {
    symbol = 'O';
    variant = "success";
  }
  const symbolWrapper = (
    <Badge variant={variant}>{symbol}</Badge> 
  );

  return (
    <ListGroup.Item>
      <p>{symbolWrapper} {description}</p>
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
