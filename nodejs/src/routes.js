const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');
//ProductController chamando o método index criado que retorna um JSON
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
//rota que cria algo POST
routes.post('/products', ProductController.store);
//rota que atualiza
routes.put('/products/:id', ProductController.update);
//reta para remover
routes.delete('/products/:id', ProductController.destroy);



//criando e acessando rota raiz
// routes.get('/products', (req, res) => {

//     //requisição: parametros, corpo, usuario, autenticação da requisição
//     //resposta: respota dada ao usuario
    
//     //crindo produto pra Testar o model
//     //inserindo registro do produto no mongoDB
//         // Product.create({
//         //     title: 'React nativ',
//         //     description: 'build native app',
//         //     url: 'http://github.com/'
//         // });
    
//         return res.send('Hello ');
//     })
    
    module.exports = routes;
    