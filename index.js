import express from "express"
import cors from "cors"
import { products } from "./products.js"
const port = 8080

const app = express()
app.use(cors())
app.use("/images", express.static("images"))
app.get("/", (req,res) => {
    res.send("Welcome to ecommerce api by Lokenrao")
})

app.get("/products", (req, res) => {
    res.json(products)
})

app.get("/products/:id", (req,res) => {
    const {id} = req.params
    const product = products.find((product) => product.id === id)
    res.json(product)
})

app.listen(port, (req, res) => {
    console.log("Port active ", port)
})