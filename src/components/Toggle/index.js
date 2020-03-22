import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export default function Toggle (props) {
  const {
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
          See {option}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
    </>
  )
}
