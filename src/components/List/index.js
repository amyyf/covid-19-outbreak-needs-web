import React from 'react';
import PropTypes from 'prop-types';

import Listing from '../Listing';
import ListGroup from 'react-bootstrap/ListGroup';

export default function List (props) {
  const { type } = props;
  const title = type[0].toUpperCase() + type.slice(1);

  return (
    <>
    <h3>{title}</h3>

    {/* const listings = api.getListingsByType(type); */}
    {/* listings.map(listing => <Listing props />); */}
    {/* put inside <Row> */}
    <ListGroup className="mb-3">
      <Listing
        description="This is a description of the listing"
        location="East Village, Manhattan"
        timeframe="next weekend"
        type={type}
      />
      <Listing
        description="This is a description of another listing"
        location="Red Hook, Brooklyn"
        timeframe="ASAP"
        type={type}
      />
      <Listing
        description="Moar OREOs pls"
        location="Roosevelt Island"
        timeframe="never b/c you can't get here"
        type={type}
      />
    </ListGroup>
    </>
  );
}

List.propTypes = {
  type: PropTypes.string.isRequired,
}
