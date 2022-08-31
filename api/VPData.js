import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getVps = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/vicepresidents.json`)
    .then((response) => resolve(Object.values(response.data).sort((a, b) => (a.attendanceNum > b.attendanceNum ? 1 : -1))))
    .catch((error) => reject(error));
});

const createVp = (vpObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/vicepresidents.json`, vpObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vicepresidents/${response.data.name}.json`, payload).then(resolve);
    })
    .catch(reject);
});

// Update User Property
const updateVp = (firebaseKey) => new Promise((resolve, reject) => {
  const payload = { left: true };
  axios.patch(`${dbUrl}/vicepresidents/${firebaseKey}.json`, payload).then(resolve)
    .catch(reject);
});

const sortVps = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/vicepresidents.json`)
    .then((response) => resolve(Object.values(response.data).sort((a, b) => (a.attendanceNum < b.attendanceNum ? 1 : -1))))
    .catch(reject);
});

export {
  sortVps,
  getVps,
  createVp,
  updateVp,
};
