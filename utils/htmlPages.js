export const htmlPages = {
  landing:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>API Documentation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      color: #333;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #4CAF50;
      color: white;
      padding: 20px;
      text-align: center;
    }
    main {
      max-width: 900px;
      margin: 20px auto;
      padding: 20px;
      background-color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    section {
      margin-bottom: 40px;
    }
    h1 {
      text-align: center;
    }
    h2 {
      color: #4CAF50;
    }
    p {
      margin: 5px 0;
    }
    code {
      background-color: #f4f4f4;
      padding: 2px 5px;
      border-radius: 4px;
      font-size: 0.9em;
    }
    .endpoint {
      font-weight: bold;
      color: #333;
    }
    .parameters {
      margin-left: 20px;
    }
    footer {
      text-align: center;
      margin-top: 40px;
      color: #777;
    }
  </style>
</head>
<body>

<header>
  <h1>API Documentation</h1>
  <p>Explore the available API endpoints</p>
</header>

<main>
  <section>
    <h2>/products</h2>
    <p class="endpoint">GET /products</p>
    <p>Returns a list of products based on filter parameters.</p>
    <p><strong>Parameters:</strong></p>
    <ul class="parameters">
      <li><code>rating</code>: Minimum product rating (optional).</li>
      <li><code>pricegt</code>: Minimum price (optional).</li>
      <li><code>pricelt</code>: Maximum price (optional).</li>
      <li><code>discount</code>: Minimum discount percentage (optional).</li>
      <li><code>reviews</code>: Minimum number of reviews (optional).</li>
    </ul>
    <p><strong>Returns:</strong> Filtered list of products in JSON format.</p>
  </section>

  <section>
    <h2>/product/:id</h2>
    <p class="endpoint">GET /product/:id</p>
    <p>Fetches a specific product by its unique ID.</p>
    <p><strong>Parameters:</strong></p>
    <ul class="parameters">
      <li><code>id</code>: The unique ID of the product (required).</li>
    </ul>
    <p><strong>Returns:</strong> The product object in JSON format.</p>
  </section>

  <section>
    <h2>/categories</h2>
    <p class="endpoint">GET /categories</p>
    <p>Returns a list of all available product categories.</p>
    <p><strong>Parameters:</strong> None</p>
    <p><strong>Returns:</strong> A list of categories in JSON format.</p>
  </section>

  <section>
    <h2>/categories/:category</h2>
    <p class="endpoint">GET /categories/:category</p>
    <p>Returns products that belong to a specific category.</p>
    <p><strong>Parameters:</strong></p>
    <ul class="parameters">
      <li><code>category</code>: The name of the product category (required).</li>
    </ul>
    <p><strong>Returns:</strong> List of products in the specified category in JSON format.</p>
  </section>

  <section>
    <h2>/deals</h2>
    <p class="endpoint">GET /deals</p>
    <p>Returns a list of products that are on deals (IDs divisible by 6).</p>
    <p><strong>Parameters:</strong> None</p>
    <p><strong>Returns:</strong> A list of products on deals in JSON format.</p>
  </section>

  <section>
    <h2>/bestseller</h2>
    <p class="endpoint">GET /bestseller</p>
    <p>Returns a list of bestseller products (IDs divisible by 5).</p>
    <p><strong>Parameters:</strong> None</p>
    <p><strong>Returns:</strong> A list of bestseller products in JSON format.</p>
  </section>

  <section>
    <h2>/search/:query</h2>
    <p class="endpoint">GET /search/:query</p>
    <p>Searches products by matching the search query in category, title, or description.</p>
    <p><strong>Parameters:</strong></p>
    <ul class="parameters">
      <li><code>query</code>: The search query string (required).</li>
    </ul>
    <p><strong>Returns:</strong> List of matching products in JSON format.</p>
  </section>
</main>

<footer>
  <p>© 2024 Your Company | API Documentation</p>
</footer>

</body>
</html>`
}