import React from 'react';

export default function Listing (props) {
  const {
    description,
    location,
    timeframe,
    type
  } = props;
  return (
    <>
      <h3>Listing</h3>
      <div>
        <p>Just showing {type} type so we can see the change</p>
        <p>Description: {description}</p>
        <p>Location: {location}</p>
        <p>Timeframe: {timeframe}</p>
      </div>
    </>
  )
}
