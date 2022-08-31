/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src="https://logos-world.net/imageup/Disney_World/Disney_World_(6).png" width="50" height="30" className="d-inline-block align-top" />
          Disney World Hotel &amp; Resort Conferences
        </Navbar.Brand>
        <Button style={{ fontFamily: 'Mali, cursive' }} type="button" className="btn btn-danger" onClick={signOut}>
          Sign Out
        </Button>
      </Container>
    </Navbar>
  );
}
