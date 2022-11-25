import express from 'express';
import MoviesController from '../controllers/movies';

const router = express.Router();

const moviesController = new MoviesController();

const middleware = () => {
    console.log('Me chamaram?')
}

router.get('/', middleware, (req, res) => moviesController.get(req, res));

export default router;
