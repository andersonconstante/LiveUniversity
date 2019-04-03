const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({ extended: true }));

//rotas
app.use(require('./rota'));

app.listen(3000, () => console.log('Executando na porta 3000'));