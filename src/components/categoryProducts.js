import React from "react";

const CategoryProducts = ({
  title,
  image,
  dimensions,
  capacity,
  features,
  price,
  stock,
}) => {
  const feature = features;
  const featureArray = feature.split("\n");
  return (
    <article className="product-card">
      <div className="card mb-3" style={{ maxWidth: "auto" }}>
        <div className="row g-0" style={{ alignContent: "center" }}>
          <div className="product-img col-md-4">
            <img
              src={`data:image/png;base64,${image}`}
              className="img-fluid rounded-start"
              alt={title}
            />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
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
                {featureArray.map((f, index) => {
                  return (
                    <li className="features-list" key={index}>
                      {f}
                    </li>
                  );
                })}
              </small>
            </div>
            <div className="category-products-butons">
              <button className="btn btn-primary">Veiw Product</button>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-body">
              <div className="category-product-price">
                <h6>Buy Now</h6>
                <h4>&pound;{price}</h4>
              </div>

              <hr />

              <div className="category-products-delivery">
                <h5 className="card-title">Delivery</h5>
                <div className="category-products-delivery-stock">
                  <label>Remaining Stock: </label>
                  <h6 className="remaining-stock"> {stock}</h6>
                </div>
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
    </article>
  );
};

export default CategoryProducts;
