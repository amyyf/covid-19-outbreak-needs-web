import React from 'react';
import config from '../../config';

import Button from 'react-bootstrap/Button';

export default function Form () {
  const {
    formData: {
      breakpoint,
      desktopHeight,
      desktopWidth,
      mobileHeight,
      mobileWidth,
      src
    }
  } = config;
  const screenWidth = window.innerWidth;
  const displayWidth = screenWidth < breakpoint ? mobileWidth : desktopWidth;
  const displayHeight = screenWidth < breakpoint ? mobileHeight : desktopHeight;

  return (
    <>
      <div id="scroll-location" />
      <div style={{ height: displayHeight + 'px' }}>
        <div className="iframe-wrapper">
          <iframe src={src} width={displayWidth} height={displayHeight} frameBorder="0" marginHeight="0" marginWidth="0" title="Needs/Provides Submission Form" onLoad={() => window.parent.parent.document.getElementById('scroll-location').scrollIntoView()}>Loading…</iframe>
        </div>
      </div>
      <Button
        className="mr-2 mb-3 d-block"
        href={'/'}
        variant="outline-info"
      >
        Return to the listings page
      </Button>
    </>
  );
}
