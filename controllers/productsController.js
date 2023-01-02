import {products} from '../data.js'


const getProducts = (req, res) => {
    // res.json(products)
    let result = products.map(i => {
        const {id, name, price, image} = i;
        return {id, name, price, image}
    })

    res.json(result)
}

const getProduct = (req, res) => {
    console.log(req.params);
    let {id} = req.params;
    let result = products.find(i => i.id == id)
    console.log(result);
    if(!result) {
        return res.status(404).send("Product not found!")
    }
    res.json(result)
}

export {getProduct, getProducts}