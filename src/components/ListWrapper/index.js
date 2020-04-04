import React, { useState } from 'react';
import './index.css';

import List from '../List';
import Toggle from '../Toggle';
import config from '../../config';

export default function ListWrapper() {
  const {
    categories,
    categoryDisplayTitles,
    categoryKeys,
    filters,
    filterDisplayTitles,
    filterKeys,
    offerString,
    requestString
  } = config;
  const [type, setType] = useState(filterKeys.all);

  return (
    <div className="ListWrapper">
      <h2>Listings</h2>
      <section>
        <h3 className="sr-only sr-only-focusable">Types</h3>
        <Toggle
          displayTitles={filterDisplayTitles}
          handleChange={setType}
          options={filters}
          selected={type}
        />
      </section>
      <List
        categories={categories}
        categoryDisplayTitles={categoryDisplayTitles}
        categoryKeys={categoryKeys}
        filterKeys={filterKeys}
        offerString={offerString}
        requestString={requestString}
        type={type}
      />
    </div>
  );
}
