import React from 'react';
import { 
  ArrowDownUpDuotone,
  ArrowUpAZDuotone,
  ArrowUpZADuotone,
  ArrowDownNarrowWideDuotone,
  ArrowDownWideNarrowDuotone,
  ArrowUpNarrowWideDuotone,
  ArrowUpWideNarrowDuotone
} from 'foamicons';

export function TestNewIcons() {
  const iconStyle = { color: '#54657D' };
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
    padding: '40px',
    background: '#f5f5f5'
  };
  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    background: 'white',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };
  const labelStyle = {
    minWidth: '250px',
    fontFamily: 'monospace',
    fontSize: '14px',
    fontWeight: 600
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        New Foamicons Arrow Icons
      </h1>
      
      <div style={rowStyle}>
        <div style={labelStyle}>ArrowDownUpDuotone (current)</div>
        <ArrowDownUpDuotone size={20} strokeWidth="1.5" style={iconStyle} />
      </div>

      <div style={rowStyle}>
        <div style={labelStyle}>ArrowUpAZDuotone</div>
        <ArrowUpAZDuotone size={20} strokeWidth="1.5" style={iconStyle} />
      </div>

      <div style={rowStyle}>
        <div style={labelStyle}>ArrowUpZADuotone</div>
        <ArrowUpZADuotone size={20} strokeWidth="1.5" style={iconStyle} />
      </div>

      <div style={rowStyle}>
        <div style={labelStyle}>ArrowDownNarrowWideDuotone</div>
        <ArrowDownNarrowWideDuotone size={20} strokeWidth="1.5" style={iconStyle} />
      </div>

      <div style={rowStyle}>
        <div style={labelStyle}>ArrowDownWideNarrowDuotone</div>
        <ArrowDownWideNarrowDuotone size={20} strokeWidth="1.5" style={iconStyle} />
      </div>

      <div style={rowStyle}>
        <div style={labelStyle}>ArrowUpNarrowWideDuotone</div>
        <ArrowUpNarrowWideDuotone size={20} strokeWidth="1.5" style={iconStyle} />
      </div>

      <div style={rowStyle}>
        <div style={labelStyle}>ArrowUpWideNarrowDuotone</div>
        <ArrowUpWideNarrowDuotone size={20} strokeWidth="1.5" style={iconStyle} />
      </div>
    </div>
  );
}
