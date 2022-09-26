import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./Recipe.css"

function RecipeList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/recipes")
        .then((response) => response.json())
        .then((cards) => setCards(cards))
    }, []);


    return (
        <div className="card-grid">
            {cards.map(recipeCard => {
                return <Recipe recipeCard={recipeCard} key={recipeCard.id}/>
            })}
        </div>
    )
}

export default RecipeList