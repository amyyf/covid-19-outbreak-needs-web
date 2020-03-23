import React from 'react';
import PropTypes from 'prop-types';

import Alert from 'react-bootstrap/Alert';

export default function AlertWrapper (props) {
  let {
    link,
    linkText,
    text,
    textAfterLink,
    textBeforeLink,
    variant
  } = props;

  textAfterLink = ' ' + textAfterLink;
  textBeforeLink = textBeforeLink + ' ';

  if (link !== '') {
    return (
      <Alert variant={variant}>
        {textBeforeLink}
        <Alert.Link href={link}>
          {linkText}
        </Alert.Link>
        {textAfterLink}
      </Alert>
    )
  } else {
    return (
      <Alert variant={variant}>
        {text}
      </Alert>
    )
  }
}

AlertWrapper.defaultProps = {
  link: '',
  linkText: '',
  text: '',
  textAfterLink: '',
  textBeforeLink: ''
}

AlertWrapper.propTypes = {
  link: PropTypes.string,
  linkText: PropTypes.string,
  text: PropTypes.string,
  textAfterLink: PropTypes.string,
  textBeforeLink: PropTypes.string,
  variant: PropTypes.string.isRequired
}
