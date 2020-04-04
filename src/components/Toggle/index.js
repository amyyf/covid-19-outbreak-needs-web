import React from 'react';
import PropTypes from 'prop-types';

import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export default function Toggle (props) {
  const {
    displayTitles,
    handleChange,
    options,
    selected
  } = props;

  return (
    <>
    <ToggleButtonGroup
      className="mb-3"
      name="type"
      onChange={handleChange}
      type="radio"
      value={selected}
    >
      {options.map(option => (
        <ToggleButton 
          key={`radio-${option}`}
          id={option}
          name="type"
          value={option}
          variant="light"
        >
          {displayTitles[option]}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
    </>
  )
}

Toggle.propTypes = {
  // displayTitles is a map that uses `options` as the keys
  displayTitles: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired
}
