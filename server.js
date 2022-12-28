import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Home page")
})

app.get('/about', (req, res) => {
    res.status(200).send("About page")
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