import express from 'express';
import moviesRouter from './movies';

const router = express.Router();
console.log(router)

router.use('/movies', moviesRouter);

export default router;