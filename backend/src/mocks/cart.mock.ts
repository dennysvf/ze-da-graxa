interface CartData {
  [userId: string]: {
    items: {
      productId: string;
      quantity: number;
    }[];
  };
}

export const cartData: CartData = {
  '2': { // ID do usuário João Cliente
    items: [
      {
        productId: '1',
        quantity: 2
      },
      {
        productId: '2',
        quantity: 1
      }
    ]
  }
};
