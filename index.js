import express from 'express';
import bodyParser from 'body-parser';

import usersRoute from './routes/users.js'

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); //using json for the whole application

app.use('/users',usersRoute);

app.get('/',(req,res)=>{
    console.log('[TEST]!')
    res.send('hello from the homepage')
});

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));

