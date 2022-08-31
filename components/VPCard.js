import { React } from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { updateVp } from '../api/VPData';

export default function VPCards({ vpObj, onUpdate }) {
  const handleClick = () => {
    console.warn(vpObj);
    updateVp(vpObj.firebaseKey).then(() => onUpdate());
  };

  return (
    <Card style={{ textDecorationLine: vpObj.left ? 'line-through' : 'none', textDecorationStyle: vpObj.left ? 'solid' : 'none', margin: '10px' }} className="text-center vp-card">
      <Card.Header>Attendee: {vpObj.attendanceNum}</Card.Header>
      <Card.Body>
        <Card.Title>
          {vpObj.abbreviation} - {vpObj.name} - {vpObj.attendanceNum}
        </Card.Title>
        <Card.Text>Welcome {vpObj.name} to Disney&apos;s Vice President economics discussion Panel!</Card.Text>
        <Button onClick={handleClick} variant="primary">Leave</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{vpObj.timeIn}</Card.Footer>
    </Card>
  );
}

VPCards.propTypes = {
  vpObj: PropTypes.shape({
    name: PropTypes.string,
    abbreviation: PropTypes.string,
    attendanceNum: PropTypes.string,
    timeIn: PropTypes.string,
    firebaseKey: PropTypes.string,
    left: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
