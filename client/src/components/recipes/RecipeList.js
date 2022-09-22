import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../app.css"


function CardList() {
    const [recipeCards, setrecipeCards] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/recipes")
            .then((response) => response.json())
            .then((cards) => setrecipeCards(cards))
    }, [])


    return (
        <div className="card-grid">
            {recipeCards.map(flashcard => {
                return <Card flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    );
}


export default CardList