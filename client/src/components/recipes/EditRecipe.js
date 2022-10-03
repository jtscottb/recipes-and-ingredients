import React, { useState } from "react";
import { useParams } from "react-router-dom"

function EditRecipe ({ onUpdateRecipe }) {
    const params = useParams();

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
    
        fetch(`http://localhost:9292/recipes/${params.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((updatedRecipes) => {
            onUpdateRecipe(updatedRecipes);
            setFormData({
            name: "",
            instructions: "",
            picture: "",
            ingredients: ""
            })})
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
