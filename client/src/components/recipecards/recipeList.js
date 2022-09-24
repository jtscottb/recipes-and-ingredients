import React, { useState, useEffect } from "react";
import Card from "./recipeCard";


function CardList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/home")
            .then((response) => response.json())
            .then((recipes) => setCards(recipes))
    }, [])


    return (
        <div className="card-grid">
            {recipes.map(recipe => {
                return <recipeCard flashcard={recipe} key={recipe.id} />
            })}
        </div>
    );
}


export default CardList