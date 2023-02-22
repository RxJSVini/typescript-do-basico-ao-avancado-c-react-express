import  express, {Request, Response} from 'express';

const app = express();


app.use(express.json());

app.use(express.urlencoded({extended:false}));



app.all("/users/v1/create", (req:Request, res:Response) =>{
    if(req.method === 'POST'){
        res.json({
            method:'POST',
            handler:'Cadastro de usuários',
            data:{}
        })
    } else {
        res.json({
            method:'GET',
            handler:'Listagem de usuários',
            data:{}
        })
    }
})
app.get("/", (req:Request, res:Response) =>{
    return res.send("Hello, Express!");
});


app.listen(3000, () =>{
    console.log("Aplicação de TS + Express funcionando!");
})