import { useProductStore } from '../../store/useProductStore'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { ProductFilters } from '../../components/ProductFilters/ProductFilters'
import { type ProductFilters as Filters } from '../../types/product'
import styles from './Catalog.module.css'

export function Catalog() {
  const { filteredProducts, setFilters } = useProductStore()
  const products = filteredProducts()

  // Calcula categorias únicas e suas contagens
  const categories = Array.from(
    new Set(products.map(p => p.category))
  ).map(category => ({
    name: category,
    count: products.filter(p => p.category === category).length
  }))

  // Calcula marcas únicas e suas contagens
  const brands = Array.from(
    new Set(products.map(p => p.brand))
  ).map(brand => ({
    name: brand,
    count: products.filter(p => p.brand === brand).length
  }))

  const handleFilterChange = (filters: Filters) => {
    setFilters(filters)
  }

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className={styles.title}>Catálogo de Produtos</h1>
        <p className={styles.description}>
          Encontre as melhores peças para seu veículo
        </p>
      </div>

      <div className={styles.catalog}>
        <aside>
          <ProductFilters
            categories={categories}
            brands={brands}
            onFilterChange={handleFilterChange}
          />
        </aside>

        <section>
          {products.length > 0 ? (
            <div className={styles.grid}>
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <p>Nenhum produto encontrado com os filtros selecionados.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
