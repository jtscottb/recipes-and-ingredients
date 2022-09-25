import React, { useState } from "react";

function RecipeForm() {
    const [formData, setFormData] = useState({
        name: "",
        ingredients: "",
        instructions: ""
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newRecipeInfo = {
            "name": formData.prompt,
            "ingredients": [
                formData.ingredients
            ],
            "instructions": [
                formData.instructions
            ]
        }
        fetch("http://localhost:9292/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipeInfo)
        })
            .then((response) => response.json())
            .then((newRecipe) => setFormData({
                name: "",
                ingredients: "",
                instructions: ""
            }))
    }

    return (
        <section>
            <div className="recipe-cardform">
            <h1>New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Recipe Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Ingredients:
                    <input
                        type="text"
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Instructions:
                    <input
                        type="text"
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Add Recipe</button>
            </form>
            </div>
        </section>
    );
}

export default RecipeForm;
