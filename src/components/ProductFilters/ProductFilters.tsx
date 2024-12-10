import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './ProductFilters.module.css';

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterSection {
  id: string;
  title: string;
  type: 'checkbox' | 'range' | 'search';
  options?: FilterOption[];
  min?: number;
  max?: number;
}

export interface Filter {
  sectionId: string;
  type: 'checkbox' | 'range' | 'search';
  value: string | string[] | [number, number];
}

export interface ProductFiltersProps {
  /** List of filter sections */
  sections: FilterSection[];
  /** Currently applied filters */
  appliedFilters: Filter[];
  /** Called when filters change */
  onFilterChange: (filters: Filter[]) => void;
  /** Additional class name */
  className?: string;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  sections,
  appliedFilters,
  onFilterChange,
  className,
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    sections.map(section => section.id)
  );

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleCheckboxChange = (sectionId: string, optionId: string, checked: boolean) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    const currentFilter = appliedFilters.find(f => f.sectionId === sectionId);
    const currentValues = (currentFilter?.value as string[]) || [];

    const newValues = checked
      ? [...currentValues, optionId]
      : currentValues.filter(v => v !== optionId);

    const newFilters = appliedFilters.filter(f => f.sectionId !== sectionId);
    if (newValues.length > 0) {
      newFilters.push({
        sectionId,
        type: 'checkbox',
        value: newValues,
      });
    }

    onFilterChange(newFilters);
  };

  const handleRangeChange = (sectionId: string, values: [number, number]) => {
    const newFilters = appliedFilters.filter(f => f.sectionId !== sectionId);
    newFilters.push({
      sectionId,
      type: 'range',
      value: values,
    });
    onFilterChange(newFilters);
  };

  const handleSearchChange = (sectionId: string, value: string) => {
    const newFilters = appliedFilters.filter(f => f.sectionId !== sectionId);
    if (value) {
      newFilters.push({
        sectionId,
        type: 'search',
        value,
      });
    }
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    onFilterChange([]);
  };

  const removeFilter = (filter: Filter) => {
    onFilterChange(appliedFilters.filter(f => f !== filter));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const renderFilterContent = (section: FilterSection) => {
    const currentFilter = appliedFilters.find(f => f.sectionId === section.id);

    switch (section.type) {
      case 'checkbox':
        return (
          <div className={styles.checkboxGroup}>
            {section.options?.map(option => (
              <label key={option.id} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={(currentFilter?.value as string[] || []).includes(option.id)}
                  onChange={e => handleCheckboxChange(section.id, option.id, e.target.checked)}
                />
                <span className={styles.checkboxLabel}>{option.label}</span>
                {option.count !== undefined && (
                  <span className={styles.count}>({option.count})</span>
                )}
              </label>
            ))}
          </div>
        );

      case 'range':
        if (!section.min || !section.max) return null;
        const [min, max] = currentFilter?.value as [number, number] || [section.min, section.max];
        return (
          <div className={styles.rangeSlider}>
            <div className={styles.rangeInputs}>
              <input
                type="number"
                className={styles.rangeInput}
                value={min}
                min={section.min}
                max={section.max}
                onChange={e => handleRangeChange(section.id, [Number(e.target.value), max])}
              />
              <span className={styles.rangeDash}>-</span>
              <input
                type="number"
                className={styles.rangeInput}
                value={max}
                min={section.min}
                max={section.max}
                onChange={e => handleRangeChange(section.id, [min, Number(e.target.value)])}
              />
            </div>
          </div>
        );

      case 'search':
        return (
          <div className={styles.searchInput}>
            <SearchIcon className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Buscar..."
              value={currentFilter?.value as string || ''}
              onChange={e => handleSearchChange(section.id, e.target.value)}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.header}>
        <h2 className={styles.title}>Filtros</h2>
        {appliedFilters.length > 0 && (
          <button
            className={styles.clearButton}
            onClick={clearFilters}
            type="button"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {appliedFilters.length > 0 && (
        <div className={styles.appliedFilters}>
          {appliedFilters.map(filter => {
            const section = sections.find(s => s.id === filter.sectionId);
            if (!section) return null;

            let label = '';
            if (filter.type === 'checkbox') {
              const values = filter.value as string[];
              const options = values.map(v => 
                section.options?.find(o => o.id === v)?.label
              ).filter(Boolean);
              label = options.join(', ');
            } else if (filter.type === 'range') {
              const [min, max] = filter.value as [number, number];
              label = `${formatCurrency(min)} - ${formatCurrency(max)}`;
            } else {
              label = filter.value as string;
            }

            return (
              <div key={filter.sectionId} className={styles.filterTag}>
                <span>{section.title}: {label}</span>
                <button
                  className={styles.removeTag}
                  onClick={() => removeFilter(filter)}
                  aria-label={`Remover filtro ${section.title}`}
                >
                  <CloseIcon />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {sections.map(section => (
        <div key={section.id} className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>{section.title}</h3>
            <button
              className={styles.expandButton}
              onClick={() => toggleSection(section.id)}
              aria-expanded={expandedSections.includes(section.id)}
              aria-controls={`filter-content-${section.id}`}
            >
              <ChevronDownIcon />
            </button>
          </div>
          {expandedSections.includes(section.id) && (
            <div
              id={`filter-content-${section.id}`}
              className={styles.content}
            >
              {renderFilterContent(section)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

ProductFilters.displayName = 'ProductFilters';

// Icons
const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx={11} cy={11} r={8} />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
