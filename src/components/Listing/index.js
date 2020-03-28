import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Listing (props) {
  const {
    category,
    description,
    location,
    type
  } = props;

  let symbol, variant;
  if (type === 'needs') {
    symbol = 'Need';
    variant = "warning"
  }
  if (type === 'offers') {
    symbol = 'Offer';
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
        <span>Category: {category}</span>
      </p>
    </ListGroup.Item>
  )
}

Listing.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
