import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const allPlants = plants.map((plantObj) => (
    <PlantCard key={plantObj.id} {...plantObj} />
  ));
  return <ul className="cards">{allPlants}</ul>;
}

export default PlantList;
