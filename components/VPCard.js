import { React } from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useRouter } from 'next/router';
import { updateVp } from '../api/VPData';

export default function VPCards({ vpObj, onUpdate }) {
  // const [left, setLeft] = useState();
  // const router = useRouter();
  // useEffect(() => {

  // })
  const handleClick = () => {
    console.warn(vpObj);
    updateVp(vpObj.firebaseKey).then(() => onUpdate());
    // setLeft((current) => !current);
    // updateVp(left).then(() => router.push('/'));
  };

  return (
    <Card style={{ textDecorationLine: vpObj.left ? 'line-through' : 'none', textDecorationStyle: vpObj.left ? 'solid' : 'none' }} className="text-center">
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
    attendanceNum: PropTypes.number,
    timeIn: PropTypes.string,
    firebaseKey: PropTypes.string,
    left: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
