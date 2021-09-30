import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [inStock, setInStock] = useState(false);

  function handleClick() {
    setInStock(!inStock);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={handleClick} className="primary">
        {inStock ? "In Stock" : "Sold Out"}
      </button>
    </li>
  );
}

export default PlantCard;
