const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {

        const {page = 1} = req.query;
        //usando mongoose-paginate
        const products = await Product.paginate({}, { page:page , limit: 10 }); 

        return res.json(products);
    },

    async show(req, res) {
        //buscando id dos produtos
        const product = await Product.findById(req.params.id)

        return res.json(product);
    },

    async store(req, res) {
        //passando o corpo da requisição
        const product = await Product.create(req.body)

        return res.json(product);
    },

    async update(req, res) {
        //atualizando o produto com o conteudo do body show+store
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();//retrona respost e sucess sem conteúdo
    }
}