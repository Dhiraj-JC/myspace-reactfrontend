import React from 'react';

export default function Product({ product }) {
  return (
    <div className='card text-bg-info mb-3' style={{ maxWidth: '18rem' }}>
      <div className='card-header'>{product.name}</div>
      <div className='card-body'>
        <h5 className='card-title'>{product.name}</h5>
        <p className='card-text'>{product.description}</p>
      </div>
    </div>
  );
}
