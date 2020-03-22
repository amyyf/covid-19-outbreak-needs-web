import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertWrapper (props) {
  let {
    link,
    linkText,
    textAfterLink = '',
    textBeforeLink = '',
    variant
  } = props;

  textAfterLink = ' ' + textAfterLink;
  textBeforeLink = textBeforeLink + ' ';

  return (
    <Alert variant={variant}>
      {textBeforeLink}
      <Alert.Link href={link}>
        {linkText}
      </Alert.Link>
      {textAfterLink}
    </Alert>
  )
}
