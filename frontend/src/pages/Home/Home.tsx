import React, { useEffect, useState } from 'react';
import { HeroSection } from '../../components/HeroSection';
import { FeaturedProducts } from '../../components/FeaturedProducts';
import { Product } from '../../types/product';
import { productsService } from '../../services/products';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await productsService.getFeaturedProducts();
        setFeaturedProducts(products);
      } catch (error) {
        console.error('Erro ao carregar produtos em destaque:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.home}>
      <HeroSection />
      
      {!loading && (
        <FeaturedProducts
          title="Produtos em Destaque"
          subtitle="Selecionados especialmente para sua oficina"
          products={featuredProducts}
        />
      )}

      <section className={styles.benefits}>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🚚</div>
            <h3>Entrega Rápida</h3>
            <p>Receba suas peças em até 24h*</p>
          </div>
          
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>✨</div>
            <h3>Qualidade Garantida</h3>
            <p>Produtos originais com garantia</p>
          </div>
          
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>💰</div>
            <h3>Melhor Preço</h3>
            <p>Economia para sua oficina</p>
          </div>
          
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🛠️</div>
            <h3>Suporte Técnico</h3>
            <p>Auxílio na escolha das peças</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Cadastre sua Oficina</h2>
          <p>
            Tenha acesso a preços especiais e condições exclusivas para sua oficina
          </p>
          <button onClick={() => window.location.href = '/register'}>
            Cadastrar Agora
          </button>
        </div>
      </section>
    </div>
  );
};
