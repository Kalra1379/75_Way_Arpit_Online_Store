// Products.tsx
import React from 'react';
import { useGetProductsQuery } from '../services/api';
import ProductItem from '../components/ProductItem';

const Products: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {data?.map((product: any) => (
          <ProductItem key={product.id} product={product} /> // Render ProductItem component for each product
        ))}
      </ul>
    </div>
  );
};

export default Products;
