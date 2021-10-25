import express from 'express';
import ProductList from './products';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/product/:id', (req, res) => {
    const product = ProductList.find(e => e._id === req.params.id);
    res.json(product);
});

app.get('/api/products', (req, res) => {
    res.json(ProductList);
}); 


app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on Port ${PORT}`));