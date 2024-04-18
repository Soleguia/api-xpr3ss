import express from 'express';
import cors from 'cors';

const app = express();

const port = 8000;

app.use(cors());

// Evita errores al trabajar con POST, hace saber al server que se envía y recoge datos json
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.listen(port, () => {
    
    console.log(`Listening on port ${port}`);

});

app.get('/', (req, res) => {
    
    res.send('Hello World!');
});
