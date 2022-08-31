import React from 'react';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <div style={{ color: 'lightblue' }}>
        <h4>Hi Disney cast member! Please sign in to take attendance</h4>
        <h1>Disney&apos;s Vice President economics discussion Panel</h1>
      </div>
      <button type="button" className="btn btn-primary btn-lg copy-btn" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Signin;
