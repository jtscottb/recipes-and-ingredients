import React, { useState } from "react";

function RecipeForm() {
  const [formData, setFormData] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: 0,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newQuestionInfo = {
      "prompt": formData.prompt,
      "answers": [
        formData.answer1,
        formData.answer2,
        formData.answer3,
        formData.answer4
      ],
      "correctIndex": formData.correctIndex
    }
    fetch("http://localhost:3000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestionInfo)
    })
      .then((response) => response.json())
      .then((newQuestion) => setFormData({
        prompt: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctIndex: 0,
      }))
  }

  return (
    <section>
      <div className="questionform">
      <h1>New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Meal Title:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        <label>
          Ingredients:
          <input
            type="text"
            name="answer1"
            value={formData.answer1}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            value={formData.answer2}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            value={formData.answer3}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            value={formData.answer4}
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
