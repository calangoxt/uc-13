import express,{Application,Request,Response} from 'express';

const app:Application = express();
app.get ('/', (req:Request, res:Response):void => {
    res.send ('<h1>ola mundo</h1>');
    });
    app.get ('/nome', (req:Request, res:Response):void => {
        res.send ('<h1>ola pessoa</h1>');
        });
    app.listen (3000, () =>{
        console.log ('servidor iniciado na porta 3000');
        });