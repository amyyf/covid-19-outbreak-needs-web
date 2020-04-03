import React from 'react';
import PropTypes from 'prop-types';

import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export default function Toggle (props) {
  const {
    displayText,
    handleChange,
    options,
    prependOptionText,
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
          value={displayText ? displayText[option] : option}
          variant="light"
        >
          {prependOptionText + option}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
    </>
  )
}

Toggle.defaultProps = {
  prependOptionText: ''
}

Toggle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  prependOptionText: PropTypes.string,
  selected: PropTypes.string.isRequired
}
