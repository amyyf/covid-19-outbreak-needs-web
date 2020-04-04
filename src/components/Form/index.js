import React from 'react';
import config from '../../config';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Form () {
  const {
    formData: {
      height,
      src,
      width
    }
  } = config;
  return (
    <Container>
      <iframe src={src} width={width} height={height} frameBorder="0" marginHeight="0" marginWidth="0" title="Needs/Provides Submission Form">Loading…</iframe>
      <Button
        className="mr-2 mb-3"
        href={'/'}
        variant="info"
      >
        Return to the listings page
      </Button>
    </Container>
  );
}
