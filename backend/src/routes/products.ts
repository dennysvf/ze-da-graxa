import express from 'express';
import { products } from '../mocks/products.mock';

const router = express.Router();

// GET /api/products
router.get('/', (req, res) => {
  const { 
    page = 1, 
    limit = 20,
    search,
    category,
    minPrice,
    maxPrice,
    sort
  } = req.query;

  let filteredProducts = [...products];

  // Aplicar filtros
  if (search) {
    const searchStr = String(search).toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchStr) ||
      p.description.toLowerCase().includes(searchStr)
    );
  }

  if (category) {
    filteredProducts = filteredProducts.filter(p => 
      p.category.slug === category
    );
  }

  if (minPrice) {
    filteredProducts = filteredProducts.filter(p => 
      p.price >= Number(minPrice)
    );
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter(p => 
      p.price <= Number(maxPrice)
    );
  }

  // Aplicar ordenação
  if (sort) {
    switch (sort) {
      case 'price_asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name_asc':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name_desc':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
  }

  // Paginação
  const startIndex = (Number(page) - 1) * Number(limit);
  const endIndex = startIndex + Number(limit);
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  res.json({
    items: paginatedProducts,
    total: filteredProducts.length,
    page: Number(page),
    totalPages: Math.ceil(filteredProducts.length / Number(limit))
  });
});

// GET /api/products/featured
router.get('/featured', (req, res) => {
  const featuredProducts = products.filter(p => p.featured);
  res.json(featuredProducts);
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  
  if (!product) {
    return res.status(404).json({
      status: 'error',
      message: 'Product not found'
    });
  }

  res.json(product);
});

export default router;
