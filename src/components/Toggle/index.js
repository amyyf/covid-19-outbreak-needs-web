import React from 'react';

export default function Toggle (props) {
  const {
    options,
    onChange,
    selected
  } = props;

  return (
    <fieldset>
      <legend>I want to...</legend>
      {options.map(option => (
        <label htmlFor={option.type} key={`radio-${option.type}`}>
          <input
            checked={selected === option.type}
            id={option.type}
            type="radio"
            name="type"
            onChange={() => onChange(option.type)}
            value={option.type}
          />
          See who {option.labelText} help
        </label>
      ))}
    </fieldset>
  )
}
