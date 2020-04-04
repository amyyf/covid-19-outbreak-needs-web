import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Form () {
  return (
    <Container>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc6l6ESk_hkej-impsmXuwuIxfHvUw7_t78mXD3NvNOESeDkg/viewform?embedded=true" width="640" height="1479" frameBorder="0" marginHeight="0" marginWidth="0" title="Needs/Provides Submission Form">Loading…</iframe>
      <Button
        className="mr-2 mb-3"
        href={'/'}
        variant="outline-info"
      >
        Return to the listings page
      </Button>
    </Container>
  );
}
