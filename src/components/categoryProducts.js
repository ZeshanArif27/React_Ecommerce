import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductCard = styled.article`
  display: flex;
  justify-content: center;
  margin: 15px 15px 0 15px;
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

const CategoryProducts = ({
  id,
  cat_id,
  title,
  image,
  dimensions,
  capacity,
  features,
  price,
  stock,
}) => {
  const navigate = useNavigate();
  const feature = features.split("\n");
  return (
    <ProductCard>
      <div className="card mb-3" style={{ maxWidth: "auto" }}>
        <div className="row g-0" style={{ alignContent: "center" }}>
          <div className="product-img col-lg-4">
            <img
              src={`data:image/png;base64,${image}`}
              className="img-fluid rounded-start"
              alt={title}
            />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h4 className="card-title">
                <Link to={`products/${id}`}>{title}</Link>
              </h4>
              <br />
              <div>
                <h6 className="card-title">Dimensions</h6>
                <small className="text-body-secondary">{dimensions}</small>
              </div>
              {capacity && (
                <div>
                  <h6 className="card-title">Capacity</h6>
                  <p className="card-text">{capacity}</p>
                </div>
              )}
              <h6 className="card-title">Features</h6>
              <small className="text-body-secondary">
                {feature?.map((f, i) => {
                  return <FeaturesList key={`feature${i}`}>{f}</FeaturesList>;
                })}
              </small>
            </div>
            <CategoryProductsbuttons>
              <button
                className="btn btn-primary"
                onClick={() => navigate(`products/${id}`)}
              >
                Veiw Product
              </button>
              <button className="btn btn-primary">Add to Cart</button>
            </CategoryProductsbuttons>
          </div>
          <div className="col-lg-4">
            <div className="card-body">
              <CategoryProductsprice>
                <h6>Buy Now</h6>
                <h4>&pound;{price}</h4>
              </CategoryProductsprice>

              <hr />

              <div className="category-products-delivery">
                <h5 className="card-title">Delivery</h5>
                <CatProdpriceDeliveryStock>
                  <label>Remaining Stock: </label>
                  <RemainingStock> {stock}</RemainingStock>
                </CatProdpriceDeliveryStock>
                <label>Free Delivery</label>
                <br />
                <label>Standard Delivery</label>
                <br />
                <small className="text-body-secondary">4 to 5day(s)</small>{" "}
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
      </div>
    </ProductCard>
  );
};

export default CategoryProducts;
