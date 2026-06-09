import http from 'node:http'
import { getDataFromDB } from './Database/db.js';

const PORT = 8000;

const server = http.createServer(async(req,res)=>{
    const destination = await getDataFromDB();

    if(req.url === '/api' && req.method === 'GET'){
        res.setHeader ('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify(destination))
    }
})

server.listen(PORT,()=> console.log(`server is listening on Port ${PORT}`));



