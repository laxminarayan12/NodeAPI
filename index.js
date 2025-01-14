import express from 'express';
import bodyParser from 'body-parser';

//  for Users 
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users' , userRoutes);

app.get('/', (req , res) => {
    res.send('Helle from home page,');
});

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));