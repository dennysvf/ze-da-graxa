import express from 'express';
import { auth } from '../middleware/auth';
import { cartData } from '../mocks/cart.mock';
import { products } from '../mocks/products.mock';

const router = express.Router();

// GET /api/cart
router.get('/', auth, (req, res) => {
  const userId = req.user!.userId;
  const cart = cartData[userId] || { items: [] };

  // Calcular totais
  const cartWithDetails = {
    items: cart.items.map(item => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return null;

      return {
        id: item.productId,
        quantity: item.quantity,
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0]
        },
        total: product.price * item.quantity
      };
    }).filter(Boolean),
    subtotal: 0,
    shipping: 10.00, // Valor fixo para mock
    total: 0
  };

  // Calcular subtotal
  cartWithDetails.subtotal = cartWithDetails.items.reduce(
    (sum, item) => sum + (item?.total || 0), 
    0
  );

  // Calcular total
  cartWithDetails.total = cartWithDetails.subtotal + cartWithDetails.shipping;

  res.json(cartWithDetails);
});

// POST /api/cart/items
router.post('/items', auth, (req, res) => {
  const userId = req.user!.userId;
  const { productId, quantity } = req.body;

  // Validar produto
  const product = products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({
      status: 'error',
      message: 'Product not found'
    });
  }

  // Inicializar carrinho se não existir
  if (!cartData[userId]) {
    cartData[userId] = { items: [] };
  }

  // Verificar se produto já está no carrinho
  const existingItem = cartData[userId].items.find(
    item => item.productId === productId
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartData[userId].items.push({
      productId,
      quantity
    });
  }

  res.status(201).json({
    status: 'success',
    message: 'Item added to cart'
  });
});

// PUT /api/cart/items/:productId
router.put('/items/:productId', auth, (req, res) => {
  const userId = req.user!.userId;
  const { productId } = req.params;
  const { quantity } = req.body;

  if (!cartData[userId]) {
    return res.status(404).json({
      status: 'error',
      message: 'Cart not found'
    });
  }

  const itemIndex = cartData[userId].items.findIndex(
    item => item.productId === productId
  );

  if (itemIndex === -1) {
    return res.status(404).json({
      status: 'error',
      message: 'Item not found in cart'
    });
  }

  if (quantity === 0) {
    // Remover item
    cartData[userId].items.splice(itemIndex, 1);
  } else {
    // Atualizar quantidade
    cartData[userId].items[itemIndex].quantity = quantity;
  }

  res.json({
    status: 'success',
    message: 'Cart updated'
  });
});

// DELETE /api/cart/items/:productId
router.delete('/items/:productId', auth, (req, res) => {
  const userId = req.user!.userId;
  const { productId } = req.params;

  if (!cartData[userId]) {
    return res.status(404).json({
      status: 'error',
      message: 'Cart not found'
    });
  }

  const itemIndex = cartData[userId].items.findIndex(
    item => item.productId === productId
  );

  if (itemIndex === -1) {
    return res.status(404).json({
      status: 'error',
      message: 'Item not found in cart'
    });
  }

  cartData[userId].items.splice(itemIndex, 1);

  res.json({
    status: 'success',
    message: 'Item removed from cart'
  });
});

export default router;
