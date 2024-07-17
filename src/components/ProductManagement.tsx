import React, { useState } from 'react';
import ProductVariantsDisplay from './ProductVariantDisplay';

const ProductManagement = () => {
  const [variants, setVariants] = useState([
    { size: 'X', inStock: true },
    { size: 'XL', inStock: true },
    { size: '2XL', inStock: true },
    { size: '3XL', inStock: true },
    { size: 'SM', inStock: true },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      <ProductVariantsDisplay variants={variants} setVariants={setVariants} />
    </div>
  );
};

export default ProductManagement;