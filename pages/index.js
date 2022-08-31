import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getVps } from '../api/VPData';
import VPCards from '../components/VPCard';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  const [attendees, setAttendees] = useState([]);
  const getAttendees = () => {
    getVps().then(setAttendees);
  };
  useEffect(() => {
    getAttendees();
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        padding: '30px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <p>Thank you cast member {user.displayName} for signing in to take attendance</p>
      <h1>Disney&apos;s Vice President economics discussion Panel</h1>
      <h3>Please fill out form below to check in</h3>
      <Button
        style={{
          maxWidth: '400px',
          margin: '0 auto',
        }}
        className="btn btn-dark btn-lg copy-btn"
        type="button"
      >
        Check-in
      </Button>
      {attendees.map((attendee) => (
        <VPCards key={attendee.firebaseKey} vpObj={attendee} onUpdate={getAttendees} />
      ))}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://logos-world.net/imageup/Disney_World/Disney_World_(6).png" width="915" alt="Disney Logo" />
    </div>
  );
}

export default Home;
