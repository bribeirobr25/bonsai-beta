import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav 
      aria-label="Breadcrumb" 
      style={{
        padding: '0.75rem 0',
        marginBottom: '1.5rem'
      }}
    >
      <ol style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {/* Home link */}
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              color: 'var(--earth-brown)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'color 0.2s ease',
              opacity: 0.8
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--forest-green)';
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--earth-brown)';
              e.currentTarget.style.opacity = '0.8';
            }}
          >
            <Home size={16} />
            <span>Home</span>
          </Link>
        </li>

        {/* Breadcrumb items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <React.Fragment key={index}>
              {/* Separator */}
              <li style={{ 
                display: 'flex', 
                alignItems: 'center',
                color: 'var(--soft-moss)',
                opacity: 0.6
              }}>
                <ChevronRight size={16} />
              </li>
              
              {/* Breadcrumb item */}
              <li style={{ display: 'flex', alignItems: 'center' }}>
                {isLast ? (
                  <span style={{
                    color: 'var(--charcoal-gray)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    opacity: 1
                  }}>
                    {item.label}
                  </span>
                ) : item.path ? (
                  <Link
                    to={item.path}
                    style={{
                      color: 'var(--earth-brown)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      transition: 'color 0.2s ease',
                      opacity: 0.8
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--forest-green)';
                      e.currentTarget.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--earth-brown)';
                      e.currentTarget.style.opacity = '0.8';
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span style={{
                    color: 'var(--earth-brown)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    opacity: 0.8
                  }}>
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

