import React, { useState } from "react";
import EditRecipe from "./EditRecipe";


function Recipe({ recipeCard }) {
    const [flip, setFlip] = useState(false)

    // function handleDeleteClick() {
    //     fetch(`http://localhost:9292/recipes/${id}`)
    // }

    return (
        <div 
        className = {`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
        >
            <div className="front"> 
                <div className="container">
                    <img src={recipeCard.picture}></img>
                </div>
                {recipeCard.name}
                <EditRecipe />
            </div>
            <div className="back"> Instructions: {recipeCard.instructions} </div>
        </div>

    )
}




export default Recipe;