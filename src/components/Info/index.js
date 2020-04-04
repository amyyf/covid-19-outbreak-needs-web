import React from 'react';

export default function Info (props) {
  const { responseEmail } = props;
  return (
    <section className="border-bottom mb-3">
      <p className="font-weight-bold info">
        What is this for?
      </p>
      <p>
        In response to the current pandemic, we've created this site to quickly share and meet community needs.
          This site is not for emergencies - please <a className="info" href={`mailto:${responseEmail}`}>contact Marci</a> directly for those.
        </p>
      <p className="font-weight-bold info">
        I have a need or request:
      </p>
      <p>
        Click the "Submit" button to send in a request.
        Note that submissions will be reviewed for completion before they appear below.
      </p>
      <p className="font-weight-bold info">
        I am available to help:
      </p>
      <p>
        To respond to one of the listings below, click the "Email us" button and include the listing title in the email.
        We will connect you with the listing's poster.
        For more general offers or availability, click the "Submit" button to fill out the submission form.
      </p>
    </section>
  )
}
