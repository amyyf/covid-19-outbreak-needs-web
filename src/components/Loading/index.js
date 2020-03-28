import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

export default function Loading () {
  return (
    <div class="d-flex align-items-baseline mb-3">
      <p class="h5 font-italic mb-0 mr-2 ml-2 text-secondary">
        Loading
      </p>
      <Spinner
        animation="border"
        size="sm"
        variant="secondary"
      />
    </div>
  )
}
