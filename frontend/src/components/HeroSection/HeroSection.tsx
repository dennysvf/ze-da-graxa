import React from 'react';
import { SearchInput } from '../SearchInput';
import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.scss';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (searchTerm: string) => {
    navigate(`/produtos?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Encontre as Melhores Peças para seu Veículo
        </h1>
        <p className={styles.subtitle}>
          Qualidade, preço justo e entrega rápida para sua oficina
        </p>
        <div className={styles.search}>
          <SearchInput
            onSearch={handleSearch}
            placeholder="Digite o nome da peça ou código..."
            className={styles.searchInput}
          />
        </div>
        <div className={styles.categories}>
          <span className={styles.categoriesLabel}>Categorias Populares:</span>
          <div className={styles.categoryTags}>
            <button onClick={() => navigate('/produtos?categoria=filtros')}>
              Filtros
            </button>
            <button onClick={() => navigate('/produtos?categoria=freios')}>
              Freios
            </button>
            <button onClick={() => navigate('/produtos?categoria=oleo')}>
              Óleo e Lubrificantes
            </button>
            <button onClick={() => navigate('/produtos?categoria=suspensao')}>
              Suspensão
            </button>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/hero-mechanic.jpg"
          alt="Mecânico trabalhando"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};
