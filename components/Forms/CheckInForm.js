import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createVp, getVps } from '../../api/VPData';

const initialState = {
  name: '',
  abbreviation: '',
  attendanceNum: '0',
  timeIn: '',
};

export default function CheckInForm() {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput, uid: user.uid };
    createVp(payload).then(() => {
      router.push('/');
      getVps().then();
      setFormInput(initialState);
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="check-in-form">
      <FloatingLabel controlId="floatingTextarea" label="Name" className="mb-3 form-text-background">
        <Form.Control type="text" placeholder="Name" name="name" value={formInput.name} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Initials" className="mb-3 form-text-background">
        <Form.Control type="text" placeholder="initials" name="abbreviation" value={formInput.abbreviation} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Time in" className="mb-3 form-text-background">
        <Form.Control type="text" placeholder="Time in" name="timeIn" value={formInput.timeIn} onChange={handleChange} required />
      </FloatingLabel>
      <label htmlFor="attendanceNum" style={{ padding: '5px', color: 'white', fontSize: '20px' }}>
        Attendance Number
      </label>
      <input style={{ margin: '10px' }} type="text" name="attendanceNum" value={formInput.attendanceNum} onChange={handleChange} required />
      <div>
        <Button
          type="submit"
          style={{
            maxWidth: '400px',
            margin: '0 auto',
          }}
          className="btn btn-dark btn-lg copy-btn"
        >
          Check-in
        </Button>
      </div>
    </Form>
  );
}
CheckInForm.defaultProps = {
  obj: initialState,
};
CheckInForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    abbreviation: PropTypes.string,
    attendanceNum: PropTypes.string,
    timeIn: PropTypes.string,
  }),
};
