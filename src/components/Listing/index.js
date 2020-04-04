import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Listing (props) {
  const {
    description,
    displayTitle,
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
    <Badge variant={variant} className="mr-1">{symbol}</Badge> 
  );

  return (
    <ListGroup.Item>
      <p>{symbolWrapper} {description}</p>
      <p className="mb-0"><span className="text-secondary">Category:</span> {displayTitle}</p>
      <p className="mb-0"><span className="text-secondary">Location:</span> {location}</p>
    </ListGroup.Item>
  )
}

Listing.propTypes = {
  description: PropTypes.string.isRequired,
  displayTitle: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
