import express from "express";
import {products} from './data.js'
import logger from "./loggerMiddleware.js";
import authorize from "./authorizeMiddleware.js";
import morgan from "morgan";
import productsRouter from './routers/productsRouter.js'

const app = express();


// app.use(logger)
// app.use([logger, authorize])
app.use('/api', logger)
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.status(200).send("Home page")
})

app.use('/products', productsRouter)

app.get('/about', (req, res) => {
    res.status(200).send("About page")
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