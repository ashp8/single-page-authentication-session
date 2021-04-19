import mongoose from 'mongoose';


mongoose.connect(process.env.DB_URI, {useUnifiedTopology:true, useNewUrlParser:true, useCreateIndex:false}, ()=>{
    console.log("Connection to db successfull");
});

export default mongoose.connection;