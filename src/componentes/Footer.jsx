import React from 'react';

function Footer({ email, telefono, github, linkedin }) {
  return (
    <footer
      style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#f3f3f3',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
      }}
    >
      <p>{email}</p>
      <p> {telefono}</p>
      <p>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>{' '}
        |{' '}
        <a href={linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

export default Footer;
