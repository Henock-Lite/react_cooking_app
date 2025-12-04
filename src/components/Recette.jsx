import React from "react";

const Recette = ({ obtainmeal, index }) => {
  return (
    <div>
      <a href={obtainmeal.strSource}>
        <img
          src={obtainmeal.strMealThumb}
          alt={obtainmeal.strMeal}
          key={obtainmeal.idMeal}
        />
        <div className="content-container">
          <h4 key={index}>{obtainmeal.strMeal}</h4>
          <p>origin:{obtainmeal.strArea}</p>
          <p>{obtainmeal.strInstructions}</p>
        </div>
      </a>
    </div>
  );
};

export default Recette;
