import React, { useState } from 'react';
import { SortIcon } from './app/components/icons/SortIcon';
import type { SortField, SortDirection } from './app/components/SortDropdown';

/**
 * Interactive demo component to test the dynamic sort icon implementation
 * 
 * To use: Import and render this component in any page
 * import { SortIconDemo } from './sort-icon-demo';
 * <SortIconDemo />
 */
export function SortIconDemo() {
  const [currentField, setCurrentField] = useState<SortField>('name');
  const [currentDirection, setCurrentDirection] = useState<SortDirection>('asc');

  const sortFields: Array<{ field: SortField; label: string }> = [
    { field: 'name', label: 'Name' },
    { field: 'age', label: 'Age' },
    { field: 'location', label: 'Location' },
    { field: 'totalAudience', label: 'Total Audience' },
    { field: 'instagram', label: 'Instagram Audience' },
    { field: 'tiktok', label: 'TikTok Audience' },
    { field: 'youtube', label: 'YouTube Audience' },
  ];

  const handleFieldClick = (field: SortField) => {
    if (field === currentField) {
      // Toggle direction
      setCurrentDirection(currentDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // New field, start with asc
      setCurrentField(field);
      setCurrentDirection('asc');
    }
  };

  return (
    <div style={{
      maxWidth: '1000px',
      margin: '40px auto',
      padding: '40px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        marginBottom: '40px',
        borderBottom: '2px solid #e5e7eb',
        paddingBottom: '20px'
      }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '12px' }}>
          🎯 Dynamic Sort Icon Demo
        </h1>
        <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.6' }}>
          Click on different sort fields below to see the icon change dynamically!
          Click the same field twice to toggle between ascending/descending.
        </p>
      </div>

      {/* Current State Display */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '32px',
        borderRadius: '16px',
        color: 'white',
        marginBottom: '40px',
        boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '14px', marginBottom: '12px', opacity: 0.9 }}>
            Current Sort Icon
          </div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            padding: '24px',
            borderRadius: '12px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '100px'
          }}>
            <div style={{ transform: 'scale(2.5)' }}>
              <SortIcon
                color="white"
                field={currentField}
                direction={currentDirection}
              />
            </div>
          </div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '20px' }}>
            {sortFields.find(f => f.field === currentField)?.label}
          </div>
          <div style={{ fontSize: '16px', opacity: 0.9, marginTop: '8px' }}>
            {currentDirection === 'asc' ? '↑ Ascending' : '↓ Descending'}
          </div>
        </div>
      </div>

      {/* Field Selector */}
      <div style={{
        background: 'white',
        border: '2px solid #e5e7eb',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '40px'
      }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
          Click to Sort By:
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px'
        }}>
          {sortFields.map(({ field, label }) => {
            const isActive = currentField === field;
            return (
              <button
                key={field}
                onClick={() => handleFieldClick(field)}
                style={{
                  padding: '16px 20px',
                  borderRadius: '8px',
                  border: `2px solid ${isActive ? '#3b82f6' : '#e5e7eb'}`,
                  background: isActive ? '#eff6ff' : 'white',
                  color: isActive ? '#1e40af' : '#374151',
                  fontWeight: isActive ? 'bold' : 'normal',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#9ca3af';
                    e.currentTarget.style.background = '#f9fafb';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.background = 'white';
                  }
                }}
              >
                {isActive && (
                  <div style={{ transform: 'scale(1.2)' }}>
                    <SortIcon
                      color="#3b82f6"
                      field={field}
                      direction={currentDirection}
                    />
                  </div>
                )}
                {label}
                {isActive && (
                  <span style={{
                    marginLeft: 'auto',
                    fontSize: '12px',
                    opacity: 0.7
                  }}>
                    Click to toggle
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Reference Table */}
      <div style={{
        background: 'white',
        border: '2px solid #e5e7eb',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
          📚 Icon Reference Guide
        </h2>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px'
        }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Field Type</th>
              <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold' }}>Ascending</th>
              <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold' }}>Descending</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Visual Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '12px' }}>Name, Location</td>
              <td style={{ padding: '12px', textAlign: 'center' }}>
                <SortIcon field="name" direction="asc" color="#374151" />
              </td>
              <td style={{ padding: '12px', textAlign: 'center' }}>
                <SortIcon field="name" direction="desc" color="#374151" />
              </td>
              <td style={{ padding: '12px', color: '#6b7280' }}>A→Z / Z→A alphabetical</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '12px' }}>Age, Total Audience</td>
              <td style={{ padding: '12px', textAlign: 'center' }}>
                <SortIcon field="age" direction="asc" color="#374151" />
              </td>
              <td style={{ padding: '12px', textAlign: 'center' }}>
                <SortIcon field="age" direction="desc" color="#374151" />
              </td>
              <td style={{ padding: '12px', color: '#6b7280' }}>0→9 / 9→0 (narrow→wide bars)</td>
            </tr>
            <tr>
              <td style={{ padding: '12px' }}>Instagram, TikTok, etc.</td>
              <td style={{ padding: '12px', textAlign: 'center' }}>
                <SortIcon field="instagram" direction="asc" color="#374151" />
              </td>
              <td style={{ padding: '12px', textAlign: 'center' }}>
                <SortIcon field="instagram" direction="desc" color="#374151" />
              </td>
              <td style={{ padding: '12px', color: '#6b7280' }}>Platform audience indicators</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Instructions */}
      <div style={{
        marginTop: '40px',
        background: '#fef3c7',
        border: '2px solid #fbbf24',
        borderRadius: '12px',
        padding: '20px'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px', color: '#92400e' }}>
          💡 How This Works
        </h3>
        <ol style={{ margin: 0, paddingLeft: '20px', color: '#78350f', lineHeight: '1.8' }}>
          <li>The SortIcon component now accepts <code>field</code> and <code>direction</code> props</li>
          <li>Based on the field type, it automatically selects the appropriate icon</li>
          <li>Text fields (name, location) use A-Z/Z-A icons</li>
          <li>Numeric fields (age, audience) use narrow→wide/wide→narrow icons</li>
          <li>Platform fields get directional arrows with visual indicators</li>
          <li>This is now live in QuickFilters, ContentSearchToolbar, and MediaKitsQuickFilters!</li>
        </ol>
      </div>
    </div>
  );
}
