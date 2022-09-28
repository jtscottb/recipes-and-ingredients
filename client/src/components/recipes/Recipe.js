import React, { useState } from "react";
import EditRecipe from "./EditRecipe";


function Recipe({ recipeCard, onUpdateRecipe }) {
    const [flip, setFlip] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    

    function handleUpdatedRecipe(updatedRecipe) {
        setIsEditing(false);
        onUpdateRecipe(updatedRecipe)
    }

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