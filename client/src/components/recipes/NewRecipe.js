import React, { useState } from "react";

function NewRecipe ({ onAddMessage }) {
    const [formData, setFormData] = useState({
        name: "",
        instructions: "",
        picture: ""
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
            "name": formData.name,
            "instructions": formData.instructions,
            "picture": formData.picture
        }
        fetch("http://localhost:9292/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipeInfo)
        })
            .then((response) => response.json())
            .then((newRecipe) => {
                onAddMessage(newRecipe)
                setFormData({
                name: "",
                instructions: "",
                picture: ""
            })})
    }

    console.log(formData.name)
    console.log(formData.instructions)
    console.log(formData.picture)
    return (
        <section>
            <div className="recipeform">
            <h1>New Recipe</h1>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Add Recipe</button>
            </form>
            </div>
        </section>
    );
}

export default NewRecipe;
