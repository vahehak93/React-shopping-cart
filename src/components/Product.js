import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="list">
      <div className="card">
        <img className="small" src={product.image} alt={product.price} />
        <h3>
          {product.item}
          {product.title}
        </h3>

        <h2 className="prodPrice">
          <strong>${product.price}</strong>
        </h2>
        <div>
          <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
