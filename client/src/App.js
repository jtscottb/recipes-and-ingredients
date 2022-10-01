import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import LoginSignupContainer from "./components/LoginSignupContainer/LoginSignupContainer";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import NewRecipe from "./components/recipes/NewRecipe";
import EditRecipe from "./components/recipes/EditRecipe";
import './App.css';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:9292/recipes")
        .then((response) => response.json())
        .then((recipes) => setRecipes(recipes))
    }, []);

    function handleDeleteRecipe(id) {
        const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
        setRecipes(updatedRecipes)
    }

    function handleUpdateRecipe(updatedRecipeObj) {
        const updatedRecipes = recipes.map((recipe) => {
            if (recipe.id === updatedRecipeObj.id) {
                return updatedRecipeObj
            } else {
                return recipe
            }
        });
        setRecipes(updatedRecipes)
    }

    function handleAddRecipe(newRecipe) {
        setRecipes([...recipes, newRecipe]);
    }



return (
    <div className="App">
    <NavBar />
    <Routes>
    <Route path="/editrecipe" element={<EditRecipe onUpdateRecipe={handleUpdateRecipe}/>} />
    <Route path="/addrecipe" element={< NewRecipe onAddRecipe={handleAddRecipe} />} />
    <Route path="/recipes" element={<Home
    recipes={recipes}
    onDeleteRecipe={handleDeleteRecipe}
    onAddRecipe={handleAddRecipe}
    />} />
    <Route path="/" element={<LoginSignupContainer />} />
    </Routes>
    </div>
)

}

export default App;
