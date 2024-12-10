import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCart } from '../../hooks/useCart';
import { CheckoutFormData } from '../../types/checkout';
import { checkoutService } from '../../services/checkout.mock';
import { CartSummary } from '../../components/CartSummary';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import styles from './Checkout.module.scss';

const addressSchema = z.object({
  street: z.string().min(1, 'Rua é obrigatória'),
  number: z.string().min(1, 'Número é obrigatório'),
  complement: z.string().optional(),
  district: z.string().min(1, 'Bairro é obrigatório'),
  city: z.string().min(1, 'Cidade é obrigatória'),
  state: z.string().length(2, 'Estado deve ter 2 letras'),
  zipCode: z.string().length(9, 'CEP inválido'),
});

const creditCardSchema = z.object({
  number: z.string().length(19, 'Número do cartão inválido'),
  name: z.string().min(1, 'Nome é obrigatório'),
  expiry: z.string().length(5, 'Data de validade inválida'),
  cvv: z.string().length(3, 'CVV inválido'),
});

const checkoutSchema = z.object({
  address: addressSchema,
  payment: z.object({
    method: z.enum(['credit_card', 'pix']),
    creditCard: creditCardSchema.optional(),
  }),
});

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, selectedShipping, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'pix'>('credit_card');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      payment: {
        method: 'credit_card',
      },
    },
  });

  if (!cart.items.length) {
    return (
      <div className={styles.empty}>
        <h1>Seu carrinho está vazio</h1>
        <Button variant="primary" onClick={() => navigate('/')}>
          Voltar para a Loja
        </Button>
      </div>
    );
  }

  if (!selectedShipping) {
    return (
      <div className={styles.empty}>
        <h1>Selecione o método de entrega</h1>
        <Button variant="primary" onClick={() => navigate('/cart')}>
          Voltar para o Carrinho
        </Button>
      </div>
    );
  }

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      setLoading(true);

      const checkoutData = {
        items: cart.items,
        shipping: selectedShipping,
        address: data.address,
        payment: data.payment,
        subtotal: cart.subtotal,
        total: cart.total + selectedShipping.price,
      };

      const order = await checkoutService.createOrder(checkoutData);
      clearCart();
      navigate(`/orders/success/${order.id}`);
    } catch (error) {
      console.error('Erro ao finalizar pedido:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.content}>
        <div className={styles.form}>
          <h1 className={styles.title}>Finalizar Pedido</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Endereço de Entrega</h2>
              <div className={styles.grid}>
                <Input
                  label="CEP"
                  {...register('address.zipCode')}
                  error={errors.address?.zipCode?.message}
                  mask="99999-999"
                />
                <Input
                  label="Rua"
                  {...register('address.street')}
                  error={errors.address?.street?.message}
                />
                <Input
                  label="Número"
                  {...register('address.number')}
                  error={errors.address?.number?.message}
                />
                <Input
                  label="Complemento"
                  {...register('address.complement')}
                  error={errors.address?.complement?.message}
                />
                <Input
                  label="Bairro"
                  {...register('address.district')}
                  error={errors.address?.district?.message}
                />
                <Input
                  label="Cidade"
                  {...register('address.city')}
                  error={errors.address?.city?.message}
                />
                <Input
                  label="Estado"
                  {...register('address.state')}
                  error={errors.address?.state?.message}
                  maxLength={2}
                  style={{ textTransform: 'uppercase' }}
                />
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Método de Pagamento</h2>
              <div className={styles.paymentMethods}>
                <label className={styles.paymentMethod}>
                  <input
                    type="radio"
                    value="credit_card"
                    checked={paymentMethod === 'credit_card'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'credit_card')}
                  />
                  <span>Cartão de Crédito</span>
                </label>
                <label className={styles.paymentMethod}>
                  <input
                    type="radio"
                    value="pix"
                    checked={paymentMethod === 'pix'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'pix')}
                  />
                  <span>PIX</span>
                </label>
              </div>

              {paymentMethod === 'credit_card' && (
                <div className={styles.grid}>
                  <Input
                    label="Número do Cartão"
                    {...register('payment.creditCard.number')}
                    error={errors.payment?.creditCard?.number?.message}
                    mask="9999 9999 9999 9999"
                  />
                  <Input
                    label="Nome no Cartão"
                    {...register('payment.creditCard.name')}
                    error={errors.payment?.creditCard?.name?.message}
                  />
                  <Input
                    label="Validade"
                    {...register('payment.creditCard.expiry')}
                    error={errors.payment?.creditCard?.expiry?.message}
                    mask="99/99"
                  />
                  <Input
                    label="CVV"
                    {...register('payment.creditCard.cvv')}
                    error={errors.payment?.creditCard?.cvv?.message}
                    mask="999"
                  />
                </div>
              )}

              {paymentMethod === 'pix' && (
                <div className={styles.pixInfo}>
                  <p>
                    Ao finalizar o pedido, você receberá um QR Code para pagamento
                    via PIX.
                  </p>
                </div>
              )}
            </section>

            <Button
              type="submit"
              variant="primary"
              className={styles.submitButton}
              loading={loading}
              disabled={loading}
            >
              Finalizar Pedido
            </Button>
          </form>
        </div>

        <div className={styles.summary}>
          <CartSummary
            cart={cart}
            selectedShipping={selectedShipping}
            showShippingCalculator={false}
          />
        </div>
      </div>
    </div>
  );
};
