import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import contactRoute from './routes/contact.js';


const url = "mongodb+srv://mydevmate:mypassword@cluster0.wryxr.mongodb.net/?retryWrites=true&w=majority";
const port = 5000;


const app = express();
app.use(cors());
app.use(express.json({limit:"10MB"}));
app.use('/contact',contactRoute);


mongoose.connect(url,{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{
    app.listen(port,()=> console.log(`server on listening from ${port}`))
}).catch((err)=> console.log(err));

