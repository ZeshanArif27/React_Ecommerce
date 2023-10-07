import "./App.css";
import React, { useEffect, useState } from "react";
import Category from "./components/Category";
import { get_categories, get_products } from "./Fetcher";
import CategoryProducts from "./components/categoryProducts";

function App() {
  const [categories, setCategories] = useState({ errormessage: "", data: [] });
  const [products, setProducts] = useState({ errormessage: "", data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await get_categories();
      setCategories(responseObject);
    };
    return fetchData;
  }, []);

  const handleCategoryClick = (id) => {
    const fetchData = async () => {
      const responeObject = await get_products(id);
      setProducts(responeObject);
    };
    return fetchData();
  };

  const renderProducts = () => {
    return products.data.map((p) => (
      <CategoryProducts {...p}>{p.title}</CategoryProducts>
    ));
  };
  // const renderProducts = (cat_id) => {
  //   return products.data.map((p) => <div>{p.title}</div>);
  // };
  const renderCategories = () => {
    /*Using For each or Map Function*/

    return categories.data.map((c) => (
      <Category
        key={c.id}
        id={c.id}
        categories={c.categories}
        onCategoryClick={() => handleCategoryClick(c.id)}
      />
    ));

    /* Using For Loop

    const categories = [];
    for (let i = 0; i < categories.length; i++) {
      categories.push(
        <Category
          key={categories[i].id}
          id={categories[i].id}
          categories={categories[i].categories}
        />
      );
    }
    return categories;      */
  };
  return (
    <>
      <div className="row header-row">
        <header>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#top">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#topnavbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#top"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#top">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#top"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#top">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#top">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#top">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <div className="row body-row">
        <div className="col-lg-2">
          <section>
            <nav className="vertical-navbar">
              <div className="container-fluid">
                <ul className="navbar-nav flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#top"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#top"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </a>
                    <ul className="dropdown-menu">
                      {categories.errormessage && (
                        <div style={{ paddingLeft: "10px" }}>
                          <p> Error:{categories.errormessage}</p>
                        </div>
                      )}
                      {categories.data && renderCategories()}
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </section>
        </div>
        <div className="product-section col-lg-10">
          <section>
            <main>
              <h1>Products</h1>
              {products.errormessage && (
                <div>Error:{products.errormessage}</div>
              )}
              {products.data && renderProducts()}
            </main>
          </section>
        </div>
      </div>
      <footer>
        <h1>This is my footer</h1>
      </footer>
    </>
  );
}

export default App;
