import React, { useState } from 'react';
import { 
  ArrowDownUpDuotone,
  ArrowUpAZDuotone,
  ArrowUpZADuotone,
  ArrowDownNarrowWideDuotone,
  ArrowDownWideNarrowDuotone,
  ArrowUpNarrowWideDuotone,
  ArrowUpWideNarrowDuotone
} from 'foamicons';

/**
 * Test component to visualize all new sort icons available in foamicons 0.5.0
 * 
 * To use this component, import it in your App.tsx or any page:
 * import { SortIconShowcase } from './sort-icon-showcase';
 * 
 * Then render it: <SortIconShowcase />
 */
export function SortIconShowcase() {
  const [selectedIcon, setSelectedIcon] = useState<string>('current');

  const icons = [
    {
      id: 'current',
      name: 'ArrowDownUpDuotone',
      component: ArrowDownUpDuotone,
      description: 'Current icon - Generic bi-directional sort',
      useCase: 'General purpose sorting, toggles between asc/desc'
    },
    {
      id: 'az',
      name: 'ArrowUpAZDuotone',
      component: ArrowUpAZDuotone,
      description: 'NEW - Alphabetical A→Z sort',
      useCase: 'Text/name sorting in ascending order'
    },
    {
      id: 'za',
      name: 'ArrowUpZADuotone',
      component: ArrowUpZADuotone,
      description: 'NEW - Alphabetical Z→A sort',
      useCase: 'Text/name sorting in descending order'
    },
    {
      id: 'up-narrow-wide',
      name: 'ArrowUpNarrowWideDuotone',
      component: ArrowUpNarrowWideDuotone,
      description: 'NEW - Ascending sort (small to large)',
      useCase: 'Numerical/size sorting, ascending'
    },
    {
      id: 'up-wide-narrow',
      name: 'ArrowUpWideNarrowDuotone',
      component: ArrowUpWideNarrowDuotone,
      description: 'NEW - Descending sort (large to small)',
      useCase: 'Numerical/size sorting, descending'
    },
    {
      id: 'down-narrow-wide',
      name: 'ArrowDownNarrowWideDuotone',
      component: ArrowDownNarrowWideDuotone,
      description: 'NEW - Arrow down with narrow→wide lines',
      useCase: 'Alternative ascending indicator'
    },
    {
      id: 'down-wide-narrow',
      name: 'ArrowDownWideNarrowDuotone',
      component: ArrowDownWideNarrowDuotone,
      description: 'NEW - Arrow down with wide→narrow lines',
      useCase: 'Alternative descending indicator'
    },
  ];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        marginBottom: '40px',
        borderBottom: '2px solid #e5e7eb',
        paddingBottom: '20px'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: 'bold', 
          marginBottom: '12px',
          color: '#111827'
        }}>
          Sort Icons in Foamicons 0.5.0
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#6b7280',
          lineHeight: '1.6'
        }}>
          You're currently using <code style={{ 
            background: '#f3f4f6', 
            padding: '2px 6px', 
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}>ArrowDownUpDuotone</code>. 
          Here are all the new sort-related icons available. Click on any icon to see it enlarged.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {icons.map((icon) => {
          const Icon = icon.component;
          const isSelected = selectedIcon === icon.id;
          const isCurrent = icon.id === 'current';
          
          return (
            <div
              key={icon.id}
              onClick={() => setSelectedIcon(icon.id)}
              style={{
                background: isSelected ? '#eff6ff' : 'white',
                border: `2px solid ${isSelected ? '#3b82f6' : isCurrent ? '#10b981' : '#e5e7eb'}`,
                borderRadius: '12px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative',
                boxShadow: isSelected ? '0 4px 12px rgba(59, 130, 246, 0.15)' : '0 1px 3px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = '#9ca3af';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = isCurrent ? '#10b981' : '#e5e7eb';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                }
              }}
            >
              {isCurrent && (
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: '#10b981',
                  color: 'white',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Current
                </div>
              )}
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '12px'
              }}>
                <div style={{
                  background: '#f9fafb',
                  padding: '12px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '48px',
                  minHeight: '48px'
                }}>
                  <Icon 
                    size={24} 
                    strokeWidth="1.5" 
                    style={{ color: '#374151' }} 
                  />
                </div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#111827',
                    fontFamily: 'monospace',
                    marginBottom: '4px'
                  }}>
                    {icon.name}
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    margin: 0
                  }}>
                    {icon.description}
                  </p>
                </div>
              </div>
              
              <div style={{
                borderTop: '1px solid #e5e7eb',
                paddingTop: '12px',
                marginTop: '12px'
              }}>
                <p style={{
                  fontSize: '13px',
                  color: '#4b5563',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  <strong>Use case:</strong> {icon.useCase}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Large Preview Section */}
      <div style={{
        background: 'white',
        border: '2px solid #e5e7eb',
        borderRadius: '12px',
        padding: '32px',
        marginTop: '40px'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '24px',
          color: '#111827'
        }}>
          Selected Icon Preview
        </h2>
        
        {(() => {
          const icon = icons.find(i => i.id === selectedIcon);
          if (!icon) return null;
          const Icon = icon.component;
          
          return (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px'
            }}>
              <div style={{
                background: '#f9fafb',
                padding: '40px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Icon 
                  size={64} 
                  strokeWidth="1.5" 
                  style={{ color: '#374151' }} 
                />
              </div>
              
              <div style={{ textAlign: 'center', maxWidth: '600px' }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  fontFamily: 'monospace',
                  color: '#111827'
                }}>
                  {icon.name}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  marginBottom: '16px',
                  lineHeight: '1.6'
                }}>
                  {icon.description}
                </p>
                
                <div style={{
                  background: '#1f2937',
                  color: '#f9fafb',
                  padding: '16px',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  textAlign: 'left',
                  lineHeight: '1.6'
                }}>
                  <div style={{ color: '#9ca3af', marginBottom: '8px' }}>// Import</div>
                  <div>import {'{'} {icon.name} {'}'} from 'foamicons';</div>
                  <br />
                  <div style={{ color: '#9ca3af', marginBottom: '8px' }}>// Usage</div>
                  <div>&lt;{icon.name}</div>
                  <div>  size={'{'}16{'}'}</div>
                  <div>  strokeWidth="var(--icon-stroke-width)"</div>
                  <div>  style={'{{ color: \'currentColor\' }}'}</div>
                  <div>/&gt;</div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Usage Recommendations */}
      <div style={{
        marginTop: '40px',
        background: '#fef3c7',
        border: '2px solid #fbbf24',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '12px',
          color: '#92400e'
        }}>
          💡 Recommendation
        </h3>
        <ul style={{
          margin: 0,
          paddingLeft: '20px',
          color: '#78350f',
          lineHeight: '1.8'
        }}>
          <li>Keep <strong>ArrowDownUpDuotone</strong> for general/mixed sorting</li>
          <li>Use <strong>ArrowUpAZDuotone / ArrowUpZADuotone</strong> when sorting text/names</li>
          <li>Use <strong>ArrowUpNarrowWideDuotone / ArrowUpWideNarrowDuotone</strong> for numerical sorting</li>
          <li>Consider making your SortIcon component dynamic to show the appropriate icon based on sort state</li>
        </ul>
      </div>
    </div>
  );
}
