import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getVps, sortVps } from '../api/VPData';
import CheckInForm from '../components/Forms/CheckInForm';
import VPCards from '../components/VPCard';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  const [attendees, setAttendees] = useState([]);
  const getAttendeesDescending = () => {
    sortVps().then(setAttendees);
  };
  const getAttendeesAscending = () => {
    getVps().then(setAttendees);
  };
  useEffect(() => {
    getAttendeesDescending();
  }, []);
  useEffect(() => {
    getAttendeesAscending();
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
      <div style={{ color: 'white' }}>
        <h4>Thank you cast member {user.displayName} for signing in to take attendance</h4>
        <h1>Disney&apos;s Vice President economics discussion Panel</h1>
        <h3>Please fill out form below to check in</h3>
      </div>
      <CheckInForm />
      <div>
        <Button
          style={{
            maxWidth: '400px',
            margin: '5px',
            paddingTop: '4px',
            paddingBottom: '4px',
            fontFamily: 'Mali, cursive',
          }}
          className="btn btn-dark btn-lg copy-btn"
          type="button"
          onClick={getAttendeesAscending}
        >
          Ascending
        </Button>
        <Button
          style={{
            maxWidth: '400px',
            margin: '5px',
            paddingTop: '4px',
            paddingBottom: '4px',
            fontFamily: 'Mali, cursive',
          }}
          className="btn btn-dark btn-lg copy-btn"
          type="button"
          onClick={getAttendeesDescending}
        >
          Descending
        </Button>
      </div>
      {attendees.map((attendee) => (
        <VPCards key={attendee.firebaseKey} vpObj={attendee} onUpdate={getAttendeesAscending} />
      ))}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://logos-world.net/imageup/Disney_World/Disney_World_(6).png" width="915" alt="Disney Logo" />
    </div>
  );
}

export default Home;
