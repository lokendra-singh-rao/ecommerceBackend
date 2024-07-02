import express from "express"
import cors from "cors"
import products from "./products.json" with { type: "json" };

const port = 8080

const app = express()
app.use(cors())
app.use("/images", express.static("images"))

app.get("/products", (req, res) => {
    res.send(products)
})

app.listen(port, (req, res) => {
    console.log("Port active ", port)
})