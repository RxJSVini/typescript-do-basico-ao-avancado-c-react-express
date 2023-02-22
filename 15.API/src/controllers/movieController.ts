import { Request, Response } from 'express';

interface IMovieProps {
   title: string;
   rating: number;
   description: string;
   stars: number;
   director: string;
   poster: string;
}

//Model
import { MovieModel } from '../models/Movies';

//Logger
import Logger from '../../config/logger';

export async function createMovie(req: Request, res: Response):Promise<any> {
    try {
        const data = req.body;
        const movie = await MovieModel.create<IMovieProps>(data);

        return res.status(200).json(movie);

    } catch (error) {
        Logger.error('Erro no sistema' + error);
        return res.status(500).json({
            text:'Erro ao tentar processar a requisição.'
        });
    }
}


export async function findMovieById(req:Request, res:Response):Promise<any>{
    try {
        const { id } = req.params;
        const movie = await MovieModel.findById(id);
        return res.status(200).json(movie);
    } catch (error) {
        Logger.error('Erro no sistema' + error);
        return res.status(500).json({
            text:'Erro ao tentar processar a requisição.'
        });
    }

}

export async function getAllMovies(req:Request, res:Response) :Promise<any>{
    try {
        const movies = await MovieModel.find({});
        return res.status(200).json(movies);

    } catch (error) {
        Logger.error('Erro no sistema' + error);
        return res.status(500).json({
            text:'Erro ao tentar processar a requisição.'
        });
    }
}


export async function removeMovie(req:Request, res:Response) :Promise<any> {
    try {
        const { id } = req.params;

        const movie = await MovieModel.findById(id);

        if(!movie){
            return res.status(404).json({
                text:'Filme não localizado!'
            });
        }

        movie.delete();
        return res.status(204).end();

    } catch (error) {
        Logger.error('Erro no sistema' + error);
        return res.status(500).json({
            text:'Erro ao tentar processar a requisição.'
        });
    }
}


export async function updateMovie(req:Request, res:Response) :Promise<any>{
    const { id } = req.params;
    try {
        const movie = await MovieModel.findById(id);
        const data = req.body;
        if(!movie){
            return res.status(404).end();
        }
        movie.updateOne({_id:id}, data);

    } catch (error) {
        Logger.error('Erro no sistema' + error);
        return res.status(500).json({
            text:'Erro ao tentar processar a requisição.'
        });

    }

}
