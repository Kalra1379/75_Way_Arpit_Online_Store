import React from 'react';

interface Product {
  _id: number;
  name: string;
  price: number;
  category: string;
  variants: { color: string; size: string; quantity: number }[];
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div key={product._id}>
    <h3>{product.name}</h3>
    <p>Category: {product.category}</p>
    <ul>
      {product.variants.map((variant: any) => (
        <li key={`${variant.color}-${variant.size}`}>
          Color: {variant.color}, Size: {variant.size}, Quantity: {variant.quantity}
        </li>
      ))}
    </ul>
    <p>Price: ${product.price}</p>
  </div>
  );
};

export default ProductItem;


