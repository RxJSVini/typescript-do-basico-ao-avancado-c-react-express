import express from 'express';
import config from '../config/default';
import router from './router';
import { morgarMiddleware  } from '../config/mornganMiddleware';
const app = express();

app.use('/api', router);
app.use(morgarMiddleware);
app.use(express.json());

const port:number | 4000 = config.port;

app.listen(port, async ()=>{
    console.log(`O backend está rodando na porta ${port}`);
});


