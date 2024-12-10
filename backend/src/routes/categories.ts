import express from 'express';
import { categories } from '../mocks/categories.mock';

const router = express.Router();

// GET /api/categories
router.get('/', (req, res) => {
  res.json(categories);
});

// GET /api/categories/:slug
router.get('/:slug', (req, res) => {
  const category = categories.find(c => c.slug === req.params.slug);
  
  if (!category) {
    return res.status(404).json({
      status: 'error',
      message: 'Category not found'
    });
  }

  res.json(category);
});

export default router;
