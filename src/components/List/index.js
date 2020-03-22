import React from 'react';
import PropTypes from 'prop-types';

import Listing from '../Listing';
import ListGroup from 'react-bootstrap/ListGroup';

export default function List (props) {
  const { 
    data,
    offerString,
    requestString,
    type
   } = props;
  const title = type[0].toUpperCase() + type.slice(1);
  const typeConvert = {};
  typeConvert[offerString] = 'offer';
  typeConvert[requestString] = 'request';

  return (
    <>
    <h3>{title}</h3>
    <ListGroup className="mb-3">
      {data.map(listing => <Listing
        category={listing.category}
        description={listing.details}
        key={listing.location}
        location={listing.location}
        timeframe="soon"
        type={typeConvert[listing.type]}
      />)}
    </ListGroup>
    </>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  offerString: PropTypes.string.isRequired,
  requestString: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
