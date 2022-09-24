import React from "react";
import RecipeList from "./recipecards/recipeList";

function Home() {

    return (
        <div className="description">
            <p>Store all your favorite recipes here!</p>
            <div className="recipe-container">
                <RecipeList />
            </div>
        </div>
    )
}

export default Home