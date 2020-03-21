import React from 'react';

export default function Listing (props) {
  const {
    description,
    location,
    timeframe
  } = props;
  return (
    <>
      <h3>Listing</h3>
      <div>
        <p>{description}</p>
        <p>{location}</p>
        <p>{timeframe}</p>
      </div>
    </>
  )
}
