import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); //using json for the whole application
app.get('/',(req,res)=>{
    console.log('[TEST]!')
    res.send('hello from the homepage')
});

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));

