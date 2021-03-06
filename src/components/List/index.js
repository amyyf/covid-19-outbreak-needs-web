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
    categoryDisplayTitles,
    categoryKeys,
    filterKeys,
    offerString,
    requestString,
    type
   } = props;
  const typeConvert = {};
  typeConvert[offerString] = filterKeys.offers;
  typeConvert[requestString] = filterKeys.needs;

  const [category, setCategory] = useState(categoryKeys.all);
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

  const filteredData = type === filterKeys.all ? data : data.filter(listing => typeConvert[listing.type] === type);
  const filteredDataByCategory = category === categoryKeys.all ? filteredData : filteredData.filter(listing => listing.category === category);
  filteredDataByCategory.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1);

  return (
    <>
    <h3>Categories</h3>
    <Toggle
      displayTitles={categoryDisplayTitles}
      handleChange={setCategory}
      options={categories}
      selected={category}
    />
    {
      !filteredDataByCategory.length &&
      <Message
        text={`No listings in ${categoryDisplayTitles[category]}`}
      />
    }
    {
      !!filteredDataByCategory.length &&
      <ListGroup className="mb-3">
        {filteredDataByCategory.map(listing => <Listing
          category={listing.category}
          details={listing.details}
          displayTitle={categoryDisplayTitles[listing.category]}
          key={uid(listing)}
          location={listing.location}
          summary={listing.summary}
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
