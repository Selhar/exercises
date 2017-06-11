import express from 'express';
import data from '../src/assets/mockData.json';
const router = express.Router();

router.get('/contests', (request, response) => {
    response.send({ contests: data.contests });
});

export default router;