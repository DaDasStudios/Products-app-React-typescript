import React, { useEffect } from "react";
import { useProductsContext } from "../../context/ProductsContext";
import { Product } from "./Product";
import { useNavigate } from 'react-router-dom'

export const ProductsTable = () => {
  const { products, getProducts } = useProductsContext();
  const navigate = useNavigate()

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center content-center mx-4 gap-5">
      {products.length > 0 ? (
        <>
          {products.map((product) => (
            <Product key={product._id} {...product}></Product>
          ))}
        </>
      ) : navigate('/add') as React.ReactNode}
    </div>
  );
};
