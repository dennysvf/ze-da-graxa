import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/20/solid'
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline'
import { Button, Input } from '../../components'
import { useProductStore } from '../../store/useProductStore'
import styles from './ProductDetails.module.css'

export function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products } = useProductStore()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.id === id)

  if (!product) {
    navigate('/catalogo')
    return null
  }

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => {
      if (index < Math.floor(rating)) {
        return <StarIcon key={index} className={styles.star} width={16} />
      }
      return <StarOutlineIcon key={index} className={styles.star} width={16} />
    })
  }

  const handleQuantityChange = (value: string) => {
    const num = parseInt(value)
    if (num > 0 && num <= product.stock) {
      setQuantity(num)
    }
  }

  const handleAddToCart = () => {
    // TODO: Implementar adição ao carrinho
    console.log('Adicionar ao carrinho:', {
      productId: product.id,
      quantity
    })
  }

  return (
    <div className="container">
      <div className={styles.product}>
        <div className={styles.gallery}>
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className={styles.mainImage}
          />
          <div className={styles.thumbnails}>
            {product.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${product.name} - Imagem ${index + 1}`}
                className={`${styles.thumbnail} ${
                  selectedImage === index ? styles.active : ''
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.header}>
            <span className={styles.brand}>{product.brand}</span>
            <h1 className={styles.name}>{product.name}</h1>
            
            <div className={styles.price}>
              <span className={styles.currentPrice}>
                {formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <>
                  <span className={styles.oldPrice}>
                    {formatPrice(product.oldPrice)}
                  </span>
                  <span className={styles.discount}>
                    -{discount}%
                  </span>
                </>
              )}
            </div>

            <div className={styles.rating}>
              {renderStars(product.rating)}
              <span className={styles.reviewCount}>
                ({product.reviewCount} avaliações)
              </span>
            </div>
          </div>

          <p className={styles.description}>{product.description}</p>

          <div className={styles.actions}>
            <Input
              type="number"
              value={quantity}
              onChange={e => handleQuantityChange(e.target.value)}
              min={1}
              max={product.stock}
              className={styles.quantity}
            />
            <Button
              onClick={handleAddToCart}
              fullWidth
            >
              Adicionar ao Carrinho
            </Button>
          </div>

          <div>
            <h2>Especificações</h2>
            <div className={styles.specs}>
              {Object.entries(product.specifications).map(([key, value]) => (
                <Fragment key={key}>
                  <span className={styles.specLabel}>{key}:</span>
                  <span className={styles.specValue}>{value}</span>
                </Fragment>
              ))}
            </div>
          </div>

          <div>
            <h2>Compatibilidade</h2>
            <div className={styles.compatibility}>
              {product.compatibleVehicles.map(vehicle => (
                <span key={vehicle} className={styles.vehicle}>
                  {vehicle}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
