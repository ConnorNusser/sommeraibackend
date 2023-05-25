const express = require('express')
const app = express();

import contactRouter from './routes/contacts';
app.get('/', (req: any, res: any) => {
    res.send('Home Page')
})


const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,

}
app.use(cors(corsOptions));
app.use('/contacts', contactRouter);

app.listen(5001);

