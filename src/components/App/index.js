import React from 'react';
import './index.css';
import config from '../../config';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from '../Form';
import Info from '../Info';
import ListWrapper from '../ListWrapper';

export default function App () {
  const { responseEmail } = config;
  let path = window.location.pathname;
  // ensure any other paths just return home
  if (path !== '/submit' && path !== '/') {
    window.history.replaceState(null, '', '/');
    path = '/';
  }

  return (
    <Container className="App">
      <header className="border-bottom mb-3 mt-3">
        <h1>LMCC Needs/Provides Forum</h1>
        {/* Not adding `noreferrer` so LMCC analytics see this site as the referrer */}
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <p className="lead">A message board for the <a className="info" href="https://www.lowermanhattanchurch.com/" target="_blank" rel="noopener">Lower Manhattan Community Church</a> community</p>
        <div>
          {
            path !== '/' &&
            <Button
              className="mr-2 mb-3"
              href={'/'}
              variant="outline-info"
            >
              Return to the listings page
            </Button>
          }
          {
            path === '/' &&
            <>
              <Button
                className="mr-2 mb-3"
                href={'/submit'}
                variant="info"
              >
                <img src="/document.png" alt="" className="icon mr-2" />
                Submit a need or offer
              </Button>
              <Button
                className="mb-3"
                href={`mailto:${responseEmail}`}
                variant="info"
              >
                <img src="/envelope.png" alt="" className="icon mr-2" />
                Email us to respond to a listing
              </Button>
              <Button
                className="floating-button"
                href={`mailto:${responseEmail}`}
                variant="info"
              >
                <img src="/envelope.png" alt="" className="icon" />
                <span className="sr-only">Email us</span>
              </Button>
            </>
          }
        </div>
      </header>
      <Info
        responseEmail={responseEmail}
      />
      {
        path === '/submit' &&
        <Form />
      }
      {
        path === '/' &&
        <ListWrapper />
      }
    </Container>
  );
}
