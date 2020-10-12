const mongoose = require('mongoose');

//criando um model
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, //data de criação de cada produto
    }
})

//registrando o model na aplicação
mongoose.model('Product', ProductSchema)