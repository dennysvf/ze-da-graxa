import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '../Typography';
import { Input } from '../Input';
import { Button } from '../Button';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import styles from './HeroSection.module.css';

interface PopularCategory {
  id: string;
  name: string;
  slug: string;
  icon?: React.ReactNode;
}

const popularCategories: PopularCategory[] = [
  { id: '1', name: 'Filtros', slug: 'filtros' },
  { id: '2', name: 'Freios', slug: 'freios' },
  { id: '3', name: 'Óleo e Lubrificantes', slug: 'oleo-lubrificantes' },
  { id: '4', name: 'Suspensão', slug: 'suspensao' },
  { id: '5', name: 'Motor', slug: 'motor' },
];

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/produtos?busca=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleCategoryClick = (slug: string) => {
    navigate(`/produtos?categoria=${slug}`);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <Typography variant="h1" className={styles.title}>
            Encontre as Melhores Peças para seu Veículo
          </Typography>
          <Typography variant="body1" className={styles.subtitle}>
            Qualidade garantida, preço justo e entrega rápida para sua oficina
          </Typography>
        </div>

        <form onSubmit={handleSearch} className={styles.searchForm} role="search">
          <div className={styles.searchContainer}>
            <Input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Digite o nome da peça ou código..."
              leftIcon={<MagnifyingGlassIcon />}
              aria-label="Buscar peças"
              fullWidth
            />
            <Button 
              type="submit" 
              variant="primary"
              disabled={!searchQuery.trim()}
              aria-label="Buscar"
            >
              Buscar
            </Button>
          </div>

          <div className={styles.categories}>
            <Typography variant="caption" className={styles.categoriesLabel}>
              Categorias Populares:
            </Typography>
            <div className={styles.categoryTags}>
              {popularCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.slug)}
                  className={styles.categoryTag}
                  type="button"
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </form>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="/images/hero-mechanic.jpg"
          alt="Mecânico profissional trabalhando"
          className={styles.heroImage}
          width={600}
          height={400}
          loading="eager"
        />
      </div>
    </section>
  );
};
