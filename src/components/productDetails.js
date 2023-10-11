import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../Fetcher";
import styled from "styled-components";

const ProductCard = styled.article`
  display: flex;
  justify-content: center;
  margin: 15px 15px 0 15px;
`;
const ProdDetails = styled.div`
  padding-left: 10px;
`;
const FeaturesList = styled.li`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;
const CategoryProductsbuttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;
const CategoryProductsprice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CatProdpriceDeliveryStock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;
const RemainingStock = styled.h6`
  padding-left: 10px;
`;
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
        <ProductCard>
          <div className="card mb-3" style={{ maxWidth: "auto" }}>
            <div className="row g-0" style={{ alignContent: "center" }}>
              <div className="product-img col-md-4">
                <img
                  src={`data:image/png;base64,${product.data[0].image}`}
                  className="img-fluid rounded-start"
                  alt={product.data[0].title}
                />
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <h4 className="card-title">{product.data[0].title}</h4>
                  <br />
                  <div>
                    <h6 className="card-title">Dimensions</h6>
                    <small className="text-body-secondary">
                      {product.data[0].dimensions}
                    </small>
                  </div>
                  {product.data[0].capacity && (
                    <div>
                      <h6 className="card-title">Capacity</h6>
                      <p className="card-text">{product.data[0].capacity}</p>
                    </div>
                  )}
                  <h6 className="card-title">Features</h6>
                  <small className="text-body-secondary">
                    {product.data[0].features.split("\n").map((f, i) => (
                      <FeaturesList key={`product.data[0].features${i}`}>
                        {f}
                      </FeaturesList>
                    ))}
                  </small>
                </div>
                <CategoryProductsbuttons>
                  <button className="btn btn-primary">Add to Cart</button>
                </CategoryProductsbuttons>
              </div>
              <div className="col-lg-4">
                <div className="card-body">
                  <CategoryProductsprice>
                    <h6>Buy Now</h6>
                    <h4>&pound;{product.data[0].price}</h4>
                  </CategoryProductsprice>

                  <hr />

                  <div className="category-products-delivery">
                    <h5 className="card-title">Delivery</h5>
                    <CatProdpriceDeliveryStock>
                      <label>Remaining Stock: </label>
                      <RemainingStock>{product.data[0].stock}</RemainingStock>
                    </CatProdpriceDeliveryStock>
                    <label>Free Delivery</label>
                    <br />
                    <label>Standard Delivery</label>
                    <br />
                    <small className="text-body-secondary">4 to 5day(s)</small>
                    <br />
                    <label>Cash On Delivery Available</label>
                  </div>

                  <hr />
                  <div className="category-product-services">
                    <h5 className="card-title">Services</h5>
                    <label>7 Days Returns</label>
                    <br />
                    <small className="text-body-secondary">
                      Change of mind is not applicable.
                    </small>
                    <br />
                    <label>Month Seller Warranty</label>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <br />
            <hr style={{ width: "auto" }} />
            <ProdDetails>
              <h4>Details: </h4>
              <p>{product.data[0].description}</p>
            </ProdDetails>
          </div>
        </ProductCard>
      )}
    </div>
  );
};
export default ProductDetails;
