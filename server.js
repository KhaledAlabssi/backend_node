import express from "express";
import {products} from './data.js'

const app = express();

const logger = (req, res, next) => {
    let url = req.url;
    let method = req.method;
    let time = new Date().getTime();
    console.log(method, url, time);
    next()
}

app.get('/', logger, (req, res) => {
    res.status(200).send("Home page")
})

app.get('/about', (req, res) => {
    res.status(200).send("About page")
})

app.get('/products',(req, res) => {
    // res.json(products)
    let result = products.map(i => {
        const {id, name, price, image} = i;
        return {id, name, price, image}
    })

    res.json(result)
})

app.get('/products/:id', (req, res) => {
    console.log(req.params);
    let {id} = req.params;
    let result = products.find(i => i.id == id)
    console.log(result);
    if(!result) {
        return res.status(404).send("Product not found!")
    }
    res.json(result)
})

app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query;
    let sortedProducts = [...products];
    if(search) {
        sortedProducts = sortedProducts.filter(i => i.name.includes(search))
    }
    if(limit) {
        sortedProducts = sortedProducts.slice(0, limit)
    }

    res.status(200).json(sortedProducts)
})

app.all("*", (req, res) => {
    res.status(404).send("<h1>Not found</h1>")
})


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
app.listen(5000, ()=>{console.log("Listening to 5000");})