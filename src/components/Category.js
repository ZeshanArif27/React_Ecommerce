import React from "react";

const Category = ({ id, categories, onCategoryClick }) => {
  return (
    <li key={id} onClick={() => onCategoryClick(id)}>
      <a className="dropdown-item" href="#top">
        {categories}
      </a>
    </li>
  );
};

export default Category;
