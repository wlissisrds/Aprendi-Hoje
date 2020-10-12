//importou o express
const express = require('express');
const mongoose = require('mongoose');


//iniciando o app
const app = express();
//permite que envie info em formato de JSON pelo express
app.use(express.json());

//iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true },
    {useUnifiedTopology: true}
);
//importando model Product
require('./src/models/Product');


// Rotas
// .use -> aceita todo tipo de requisição
app.use('/api', require('./src/routes'))

//ouvindo a porta
app.listen(3001);