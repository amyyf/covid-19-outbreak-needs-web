import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'react-bootstrap/Spinner';

export default function Message (props) {
  const { spinner, text } = props;
  return (
    <div className="d-flex align-items-baseline mb-3">
      <p className="h5 font-italic mb-0 mr-2 ml-2 text-secondary">
        {text}
      </p>
      {
        spinner &&
        <Spinner
          animation="border"
          size="sm"
          variant="secondary"
        />
      }
    </div>
  )
}

Message.defaultProps = {
  spinner: false
}

Message.propTypes = {
  spinner: PropTypes.bool,
  text: PropTypes.string.isRequired
}
