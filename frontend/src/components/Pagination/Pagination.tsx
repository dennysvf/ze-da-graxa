import React from 'react';
import clsx from 'clsx';
import styles from './Pagination.module.scss';

export interface PaginationProps {
  /** Página atual */
  currentPage: number;
  /** Total de páginas */
  totalPages: number;
  /** Callback quando a página é alterada */
  onPageChange: (page: number) => void;
  /** Itens por página */
  itemsPerPage?: number;
  /** Número de páginas visíveis antes e depois da página atual */
  siblingCount?: number;
  /** Variante visual do componente */
  variant?: 'simple' | 'compact' | 'full';
  /** Tamanho dos botões */
  size?: 'small' | 'medium' | 'large';
  /** Classe CSS adicional */
  className?: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage = 10,
  siblingCount = 1,
  variant = 'full',
  size = 'medium',
  className,
}: PaginationProps) => {
  const getPageNumbers = () => {
    if (variant === 'simple') {
      return [];
    }

    if (variant === 'compact') {
      return [currentPage];
    }

    const pages: (number | string)[] = [];
    const maxVisiblePages = siblingCount * 2 + 3; // First + Last + Current + 2 * Siblings

    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always show first page
    pages.push(1);

    // Calculate middle pages
    const startPage = Math.max(2, currentPage - siblingCount);
    const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

    if (startPage > 2) {
      pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push('...');
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageClick = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  if (totalPages <= 1) return null;

  const pageInfo = `Página ${currentPage} de ${totalPages}`;

  return (
    <nav 
      aria-label="Navegação de páginas" 
      className={clsx(styles.pagination, styles[variant], styles[size], className)}
    >
      <button
        className={clsx(styles.button, styles.arrow)}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <span className="material-icons">chevron_left</span>
      </button>

      {variant !== 'simple' && (
        <ul className={styles.list}>
          {getPageNumbers().map((page, index) => (
            <li key={`${page}-${index}`} className={styles.item}>
              {typeof page === 'number' ? (
                <button
                  className={clsx(
                    styles.button,
                    page === currentPage && styles.active
                  )}
                  onClick={() => handlePageClick(page)}
                  aria-current={page === currentPage ? 'page' : undefined}
                  aria-label={`Página ${page}`}
                >
                  {page}
                </button>
              ) : (
                <span className={styles.ellipsis} aria-hidden="true">
                  {page}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}

      {variant === 'simple' && (
        <span className={styles.info} aria-live="polite">
          {pageInfo}
        </span>
      )}

      <button
        className={clsx(styles.button, styles.arrow)}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Próxima página"
      >
        <span className="material-icons">chevron_right</span>
      </button>
    </nav>
  );
};
