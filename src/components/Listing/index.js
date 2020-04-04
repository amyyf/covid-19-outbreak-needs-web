import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Listing (props) {
  const {
    details,
    displayTitle,
    location,
    summary,
    type
  } = props;

  // TODO: handle this in config
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
      <section>
        <h4>{symbolWrapper} <span>{summary}</span></h4>
        { details && <p>{details}</p> }
        <p className="mb-0"><span className="text-secondary">Category:</span> {displayTitle}</p>
        <p className="mb-0"><span className="text-secondary">Location:</span> {location}</p>
      </section>
    </ListGroup.Item>
  )
}

Listing.propTypes = {
  details: PropTypes.string.isRequired,
  displayTitle: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
