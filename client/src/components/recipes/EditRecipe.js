import React, { useState } from "react";

function EditRecipe ({ recipeCard, onUpdateRecipe }) {
    const [formData, setFormData] = useState({
        name: "",
        instructions: "",
        picture: "",
        ingredients: ""
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
    
        fetch(`http://localhost:9292/recipes/${recipeCard.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((updatedRecipe) => onUpdateRecipe(updatedRecipe));
    }

    
    return (
        <section>
            <div className="recipeform">
            <h1>Edit Recipe</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
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
                <label>
                    Picture:
                    <input
                        type="text"
                        name="picture"
                        value={formData.picture}
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
                <button type="submit">Confirm Edit</button>
            </form>
            </div>
        </section>
    );
}

export default EditRecipe;
