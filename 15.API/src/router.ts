import { Router, Request, Response} from 'express';
import { createMovie, findMovieById, getAllMovies, removeMovie } from './controllers/movieController';
import { validate } from './middlewares/handleValidation';
const router = Router();


export default router.get('/test', (
    req:Request,
    res:Response
) =>{
    res.json({
        status:200,
        text:'OK'
    });
});

router.post('/movie', validate, createMovie);

router.get('/movie/:id', validate,findMovieById);

router.get('/movies', validate, getAllMovies);

router.delete('/movie/:id', validate, removeMovie);
