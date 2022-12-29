import express from "express";
import {products} from '../data.js'

const router = express.Router();

router.get('/',(req, res) => {
    // res.json(products)
    let result = products.map(i => {
        const {id, name, price, image} = i;
        return {id, name, price, image}
    })

    res.json(result)
})

router.get('/:id', (req, res) => {
    console.log(req.params);
    let {id} = req.params;
    let result = products.find(i => i.id == id)
    console.log(result);
    if(!result) {
        return res.status(404).send("Product not found!")
    }
    res.json(result)
})

export default router;