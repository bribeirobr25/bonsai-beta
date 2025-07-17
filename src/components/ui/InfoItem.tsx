import React from 'react';

interface InfoItemProps {
  label: string;
  value: string | React.ReactNode;
  isLast?: boolean;
  className?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value, isLast = false, className = '' }) => {
  const baseClass = isLast ? 'detail-info-item-last' : 'detail-info-item';
  
  return (
    <div className={`${baseClass} ${className}`}>
      <span className="detail-info-label">{label}</span>
      <span className="detail-info-value">{value}</span>
    </div>
  );
};

export default InfoItem;