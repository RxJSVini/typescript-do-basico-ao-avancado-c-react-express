import config from './default';

import Logger from './logger';

import morgan, { StreamOptions } from 'morgan';

const stream: StreamOptions =  {
    write:(message) => Logger.http(message),
};
const skip = () =>{
    const env:string = config.env || 'production';
    return env !== 'development';
};


export const morgarMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {stream, skip}
);
