import React from 'react';
import PropTypes from 'prop-types';

import api from '../../api';
import Listing from '../Listing';
import ListGroup from 'react-bootstrap/ListGroup';
import Toggle from '../Toggle';
import { useEffect, useState } from 'react';

export default function List (props) {
  let { 
    categories,
    offerString,
    requestString,
    type
   } = props;
  let title = type[0].toUpperCase() + type.slice(1);
  let typeConvert = {};
  typeConvert[offerString] = 'offers';
  typeConvert[requestString] = 'requests';

  let [category, setCategory] = useState('All');
  let [data, setData] = useState([]);
  useEffect(() => {
    api.getData()
      .then(data => setData(data));
  }, [])

  let filteredData = type === 'all' ? data : data.filter(listing => typeConvert[listing.type] === type);
  let filteredDataByCategory = category === 'All' ? filteredData : filteredData.filter(listing => listing.category === category);
  filteredDataByCategory = filteredDataByCategory.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1);

  return (
    <>
    <h3>{title}</h3>
    <p>Optionally filter by category</p>
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
