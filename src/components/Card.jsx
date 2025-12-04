import axios from "axios";
import React, { useEffect, useState } from "react";
import Recette from "./Recette";

const Card = () => {
  const [meal, setMeal] = useState([]);
  const [inputsearch, setInputsearch] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputsearch} `
      )
      .then((res) => setMeal(res.data.meals || []));
  }, [inputsearch]);

  return (
    <div>
      <h1>React Cook</h1>
      <input
        type="text"
        placeholder="Tapez  le nom d'un aliment (anglais)"
        onChange={(e) => setInputsearch(e.target.value)}
      />

      <div className="card">
        {inputsearch && meal.length > 0 ? (
          meal.slice(0, 12).map((obtainmeal, index) => (
            <div
              className="cardMeal"
              key={index}
            >
              <Recette
                key={obtainmeal.idMeal}
                obtainmeal={obtainmeal}
                index={index}
              />
            </div>
          ))
        ) : (
          <div className="Notfound">
            <p>Recherche non trouvée </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
