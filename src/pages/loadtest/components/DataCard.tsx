import React from 'react';

interface DataCardProps {
  title: string;
  value: string | number | undefined;
  className?: string;
  [key: string]: any;
}

const DataCard: React.FC<DataCardProps> = ({ title, value, className }) => {
  return (
    <div className={`${className ? className : ''}`.trim()}>
      <h4>{title}</h4>
      <h2>{value ? value : ''}</h2>
    </div>
  );
};

export default DataCard;
