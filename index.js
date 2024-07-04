import express from "express"
import cors from "cors"
import { products } from "./products.js"
import { categories } from "./products.js"
import path from 'path'
import { fileURLToPath } from "url"

const port = 8080
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

app.use(cors())

app.use('/images', express.static(path.join(__dirname, 'images')))

app.get("/", (req,res) => {
    res.send("Welcome to ecommerce api by Lokenrao")
})

app.get("/products", async (req, res) => {
    res.json(products)
})

app.get("/products/:id", async (req,res) => {
    const {id} = req.params
    const response = products.find((product) => product.id === id)
    res.json(response)
})

app.get("/categories", async (req,res) => {
    res.json(categories)
})

app.get("/categories/:category", async (req, res) => {
    const {category} = req.params
    const response = products.filter((product) => product.category === category)
    res.json(response)
})

app.get("/deals", async (req, res) => {
    const response = products.filter((product) => product.id % 6 === 0)
    res.json(response)
})

app.get("/bestseller", async (req, res) => {
    const response = products.filter((product) => product.id % 5 === 0)
    res.json(response)
})

app.get("/search/:query", async (req, res) => {
    const {query} = req.params
    const response = products.filter((product) => 
        product.category.includes(query) || 
        product.title.includes(query) ||
        product.description.includes(query)
    )
    res.json(response)
})

app.listen(port, async (req, res) => {
    console.log("Port active ", port)
})