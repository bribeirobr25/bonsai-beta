import React, { useState } from 'react';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';

export interface FilterOptions {
  difficulty: string[];
  category: string[];
  climate: string[];
}

export interface SortOption {
  value: string;
  label: string;
}

interface FilterPanelProps {
  filters: FilterOptions;
  sortBy: string;
  onFilterChange: (filters: FilterOptions) => void;
  onSortChange: (sortBy: string) => void;
  onClearFilters: () => void;
  totalResults: number;
  filteredResults: number;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  sortBy,
  onFilterChange,
  onSortChange,
  onClearFilters,
  totalResults,
  filteredResults
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    difficulty: true,
    category: false,
    climate: false
  });

  const sortOptions: SortOption[] = [
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'difficulty-asc', label: 'Easiest First' },
    { value: 'difficulty-desc', label: 'Hardest First' },
    { value: 'recent', label: 'Recently Added' }
  ];

  const difficultyOptions = ['Beginner', 'Intermediate', 'Expert'];
  const categoryOptions = ['Beginner', 'Intermediate', 'Advanced', 'Rare/Specialty'];
  const climateOptions = ['Tropical', 'Subtropical', 'Temperate', 'Mediterranean', 'Continental'];

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCheckboxChange = (
    filterType: keyof FilterOptions,
    value: string
  ) => {
    const currentValues = filters[filterType];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    onFilterChange({
      ...filters,
      [filterType]: newValues
    });
  };

  const activeFilterCount = 
    filters.difficulty.length + 
    filters.category.length + 
    filters.climate.length;

  return (
    <div style={{
      background: 'white',
      borderRadius: '0.75rem',
      border: '1px solid var(--border)',
      boxShadow: '0 2px 8px rgba(45, 80, 22, 0.08)',
      marginBottom: '2rem',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        padding: '1.25rem 1.5rem',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Filter size={20} style={{ color: 'var(--forest-green)' }} />
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: 'var(--charcoal-gray)',
            margin: 0
          }}>
            Filter & Sort
          </h3>
          {activeFilterCount > 0 && (
            <span style={{
              background: 'var(--bamboo-green)',
              color: 'white',
              padding: '0.25rem 0.625rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 500
            }}>
              {activeFilterCount}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{
            fontSize: '0.875rem',
            color: 'var(--earth-brown)',
            fontWeight: 500
          }}>
            {filteredResults} of {totalResults} species
          </span>
          
          {activeFilterCount > 0 && (
            <button
              onClick={onClearFilters}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.5rem 0.875rem',
                background: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                color: 'var(--earth-brown)',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--warm-stone)';
                e.currentTarget.style.borderColor = 'var(--bamboo-green)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <X size={16} />
              Clear All
            </button>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              padding: '0.5rem 0.875rem',
              background: isExpanded ? 'var(--forest-green)' : 'transparent',
              border: '1px solid var(--forest-green)',
              borderRadius: '0.5rem',
              color: isExpanded ? 'white' : 'var(--forest-green)',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (!isExpanded) {
                e.currentTarget.style.background = 'var(--forest-green)';
                e.currentTarget.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (!isExpanded) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--forest-green)';
              }
            }}
            className="md:hidden"
          >
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {isExpanded ? 'Hide' : 'Show'} Filters
          </button>
        </div>
      </div>

      {/* Filter Content */}
      <div 
        style={{
          display: isExpanded ? 'block' : 'none',
          padding: '1.5rem'
        }}
        className="md:block"
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          {/* Sort By */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--charcoal-gray)',
              marginBottom: '0.75rem'
            }}>
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              style={{
                width: '100%',
                padding: '0.625rem 0.875rem',
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                color: 'var(--charcoal-gray)',
                background: 'white',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'var(--bamboo-green)'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <button
              onClick={() => toggleSection('difficulty')}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: 0,
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                marginBottom: '0.75rem'
              }}
            >
              <span style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--charcoal-gray)'
              }}>
                Difficulty Level
              </span>
              {expandedSections.difficulty ? 
                <ChevronUp size={16} style={{ color: 'var(--earth-brown)' }} /> : 
                <ChevronDown size={16} style={{ color: 'var(--earth-brown)' }} />
              }
            </button>
            {expandedSections.difficulty && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {difficultyOptions.map(option => (
                  <label
                    key={option}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      color: 'var(--charcoal-gray)'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={filters.difficulty.includes(option)}
                      onChange={() => handleCheckboxChange('difficulty', option)}
                      style={{
                        width: '1rem',
                        height: '1rem',
                        cursor: 'pointer',
                        accentColor: 'var(--bamboo-green)'
                      }}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Category Filter */}
          <div>
            <button
              onClick={() => toggleSection('category')}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: 0,
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                marginBottom: '0.75rem'
              }}
            >
              <span style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--charcoal-gray)'
              }}>
                Category
              </span>
              {expandedSections.category ? 
                <ChevronUp size={16} style={{ color: 'var(--earth-brown)' }} /> : 
                <ChevronDown size={16} style={{ color: 'var(--earth-brown)' }} />
              }
            </button>
            {expandedSections.category && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {categoryOptions.map(option => (
                  <label
                    key={option}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      color: 'var(--charcoal-gray)'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={filters.category.includes(option)}
                      onChange={() => handleCheckboxChange('category', option)}
                      style={{
                        width: '1rem',
                        height: '1rem',
                        cursor: 'pointer',
                        accentColor: 'var(--bamboo-green)'
                      }}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Climate Filter */}
          <div>
            <button
              onClick={() => toggleSection('climate')}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: 0,
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                marginBottom: '0.75rem'
              }}
            >
              <span style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--charcoal-gray)'
              }}>
                Climate
              </span>
              {expandedSections.climate ? 
                <ChevronUp size={16} style={{ color: 'var(--earth-brown)' }} /> : 
                <ChevronDown size={16} style={{ color: 'var(--earth-brown)' }} />
              }
            </button>
            {expandedSections.climate && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {climateOptions.map(option => (
                  <label
                    key={option}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      color: 'var(--charcoal-gray)'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={filters.climate.includes(option)}
                      onChange={() => handleCheckboxChange('climate', option)}
                      style={{
                        width: '1rem',
                        height: '1rem',
                        cursor: 'pointer',
                        accentColor: 'var(--bamboo-green)'
                      }}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;

