import React from 'react';
import Listing from '../Listing';

export default function List (props) {
  const { type } = props;
  return (
    <>
      <h2>{type}</h2>
      {/*
      const listings = api.getListingsByType(type);
      listings.map(listing => <Listing props />);
       */}
      <Listing
       description="This is a description of the listing"
       location="East Village, Manhattan"
       timeframe="next weekend"
      />
    </>
  );
}
