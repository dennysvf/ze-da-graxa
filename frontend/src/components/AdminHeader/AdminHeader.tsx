import React, { useState } from 'react';
import clsx from 'clsx';
import { Button } from '../Button';
import { SearchInput } from '../SearchInput';
import { UserMenu } from '../UserMenu';
import { LoadingSpinner } from '../LoadingSpinner';
import styles from './AdminHeader.module.scss';

interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface AdminHeaderProps {
  /** Título opcional do cabeçalho */
  title?: string;
  /** Callback chamado quando o botão de menu é clicado */
  onMenuClick: () => void;
  /** Callback opcional chamado quando o usuário digita na busca */
  onSearch?: (query: string) => void;
  /** Dados do usuário logado */
  user: User;
  /** Indica se está carregando dados */
  loading?: boolean;
}

export const AdminHeader = ({
  title,
  onMenuClick,
  onSearch,
  user,
  loading = false,
}: AdminHeaderProps) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value: string) => {
    setSearchValue(value);
    onSearch?.(value);
  };

  return (
    <header className={styles.header} role="banner">
      <div className={styles.leftSection}>
        <Button
          variant="outline"
          className={styles.menuButton}
          onClick={onMenuClick}
          aria-label="Abrir menu de navegação"
        >
          <span className="material-icons">menu</span>
        </Button>
        
        {title && (
          <h1 className={styles.title}>{title}</h1>
        )}

        {onSearch && (
          <SearchInput
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Buscar..."
            aria-label="Campo de busca"
            className={clsx(styles.search, isSearchFocused && styles.searchFocused)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        )}
      </div>

      <div className={styles.rightSection}>
        {loading && (
          <LoadingSpinner 
            size="small" 
            className={styles.loading} 
          />
        )}
        <UserMenu user={user} />
      </div>
    </header>
  );
};
