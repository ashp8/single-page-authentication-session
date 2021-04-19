import express from 'express';
import router from '#root/routes';
import db from '#root/config/connection';
import {session} from '#root/config/session';
const app = express();


app.use(session);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', router);



app.listen(4000, ()=>{
    console.log("http://localhost:4000");
});