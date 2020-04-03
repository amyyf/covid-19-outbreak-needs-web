import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Form () {
  return (
    <Container>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc6l6ESk_hkej-impsmXuwuIxfHvUw7_t78mXD3NvNOESeDkg/viewform?embedded=true" width="640" height="1479" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      <Button
        className="mr-2 mb-3"
        href={'/'}
        variant="outline-secondary"
      >
        Return to the listings page
      </Button>
    </Container>
  );
}
