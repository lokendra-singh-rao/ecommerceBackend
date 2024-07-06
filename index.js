import express from "express";
import cors from "cors";
import { products } from "./products.js";
import { categories } from "./products.js";
import path from "path";
import { fileURLToPath } from "url";

const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/", (req, res) => {
  res.send("Welcome to ecommerce api by Lokenrao");
});

app.get("/products", async (req, res) => {
  let { rating, pricegt, pricelt, discount, reviews } = req.query;
  pricegt = pricegt || 0;
  pricelt = pricelt || 100000;
  rating = rating || 0;
  discount = discount || 0;
  reviews = reviews || 0;
  const response = products.filter(
    (product) =>
      Number(product.rating) >= Number(rating) &&
      Number(product.pricing.discount) >= Number(discount) &&
      Number(product.pricing.cost) <= Number(pricelt) &&
      Number(product.pricing.cost) >= Number(pricegt) &&
      Number(product.noOfReviews) >= Number(reviews)
  );
  res.json(response);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const response = products.find((product) => product.id === id);
  res.json(response);
});

app.get("/categories", async (req, res) => {
  res.json(categories);
});

app.get("/categories/:category", async (req, res) => {
  const { category } = req.params;
  const response = products.filter((product) => product.category === category);
  res.json(response);
});

app.get("/deals", async (req, res) => {
  const response = products.filter((product) => product.id % 6 === 0);
  res.json(response);
});

app.get("/bestseller", async (req, res) => {
  const response = products.filter((product) => product.id % 5 === 0);
  res.json(response);
});

app.get("/search/:query", async (req, res) => {
  const { query } = req.params;
  const response = products.filter(
    (product) =>
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
  );
  res.json(response);
});

app.listen(port, async (req, res) => {
  console.log("Port active ", port);
});
