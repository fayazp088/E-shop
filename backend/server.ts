import express from 'express';
import ProductList from './products';

const app = express();

app.get('/api/product/:id', (req, res) => {
    const product = ProductList.find(e => e._id === req.params.id);
    res.json(product);
});

app.get('/api/products', (req, res) => {
    res.json(ProductList);
});



app.listen(5000, () => console.log("hello typ"));