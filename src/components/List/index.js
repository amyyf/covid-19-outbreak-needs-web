import React from 'react';
import PropTypes from 'prop-types';

import api from '../../api';
import Listing from '../Listing';
import ListGroup from 'react-bootstrap/ListGroup';

export default function List (props) {
  const { 
    offerString,
    requestString,
    type
   } = props;
  const title = type[0].toUpperCase() + type.slice(1);
  const typeConvert = {};
  typeConvert[offerString] = 'offers';
  typeConvert[requestString] = 'requests';

  const data = api.getData();
  const filteredData = type === 'all' ? data : data.filter(listing => typeConvert[listing.type] === type);

  return (
    <>
    <h3>{title}</h3>
    <ListGroup className="mb-3">
      {filteredData.map(listing => <Listing
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
  offerString: PropTypes.string.isRequired,
  requestString: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
