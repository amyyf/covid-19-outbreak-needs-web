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
    </>
  );
}
