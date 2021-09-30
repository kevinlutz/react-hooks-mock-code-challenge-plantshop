import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plantData) => setPlants(plantData));
  }, []);

  const addNewPlant = (newPlantObj) => {
    setPlants((plantData) => [...plantData, newPlantObj]);
  };

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search setSearch={setSearch} />
      <PlantList
        plants={plants.filter((plantObj) =>
          plantObj.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        )}
      />
    </main>
  );
}

export default PlantPage;
