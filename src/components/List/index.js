import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';

import api from '../../api';
import Listing from '../Listing';
import ListGroup from 'react-bootstrap/ListGroup';
import Message from '../Message';
import Toggle from '../Toggle';

export default function List (props) {
  const { 
    categories,
    displayTitles,
    offerString,
    requestString,
    type
   } = props;
  const typeConvert = {};
  typeConvert[offerString] = 'offers';
  typeConvert[requestString] = 'needs';

  const [category, setCategory] = useState('All');
  const [data, setData] = useState(null);
  useEffect(() => {
    api.getData()
      .then(data => setData(data));
  }, [])

  // before data has returned - any condition other than an empty array
  if (!data) {
    return <Message
      spinner
      text="Loading"
    />
  }

  const filteredData = type === 'all' ? data : data.filter(listing => typeConvert[listing.type] === type);
  const filteredDataByCategory = category === 'All' ? filteredData : filteredData.filter(listing => listing.category === category);
  filteredDataByCategory.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1);

  return (
    <>
    <p className="font-weight-bold">Categories</p>
    <Toggle
      displayTitles={displayTitles}
      handleChange={setCategory}
      options={categories}
      selected={category}
    />
    {
      !filteredDataByCategory.length &&
      <Message
        text="No results"
      />
    }
    {
      !!filteredDataByCategory.length &&
      <ListGroup className="mb-3">
        {filteredDataByCategory.map(listing => <Listing
          category={listing.category}
          description={listing.details}
          displayTitle={displayTitles[listing.category]}
          key={uid(listing)}
          location={listing.location}
          type={typeConvert[listing.type]}
        />)}
      </ListGroup>
    }
    </>
  );
}

List.propTypes = {
  categories: PropTypes.array.isRequired,
  offerString: PropTypes.string.isRequired,
  requestString: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
