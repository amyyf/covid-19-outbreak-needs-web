import React from 'react';
import PropTypes from 'prop-types';

import api from '../../api';
import Listing from '../Listing';
import ListGroup from 'react-bootstrap/ListGroup';
import Toggle from '../Toggle';
import { useState } from 'react';

export default function List (props) {
  const { 
    categories,
    offerString,
    requestString,
    type
   } = props;
  const title = type[0].toUpperCase() + type.slice(1);
  const typeConvert = {};
  typeConvert[offerString] = 'offers';
  typeConvert[requestString] = 'requests';

  const [category, setCategory] = useState('All');

  const data = api.getData();
  const filteredData = type === 'all' ? data : data.filter(listing => typeConvert[listing.type] === type);
  const filteredDataByCategory = category === 'All' ? filteredData : filteredData.filter(listing => listing.category === category);

  return (
    <>
    <h3>{title}</h3>
    <Toggle
      handleChange={setCategory}
      options={categories}
      selected={category}
    />
    <ListGroup className="mb-3">
      {filteredDataByCategory.map(listing => <Listing
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
  categories: PropTypes.array.isRequired,
  offerString: PropTypes.string.isRequired,
  requestString: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
