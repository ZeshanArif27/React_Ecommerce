import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../Fetcher";

const ProductDetails = () => {
  const [product, setProduct] = useState({ errormessage: "", data: [] });
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductsById(productId);
      setProduct(responseObject);
    };
    return fetchData;
  }, [productId]);

  return (
    <div>
      {product.data.length === 0 ? (
        <p></p>
      ) : (
        <div>
          <h1>ID: {product.data[0].id}</h1>
          <h1>Title: {product.data[0].title}</h1>
        </div>
      )}
    </div>
  );
};
export default ProductDetails;
