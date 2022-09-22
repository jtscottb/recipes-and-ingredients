import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import RecipeForm from "./components/recipes/RecipeForm";
import './App.css';

function App() {

  return (
    <div>
      <h1 className="title">World's Best Cook Book</h1>
      <NavBar />
      <Routes>
      {/* <Route path="quiz" element={<QuestionList />} />
      <Route path="flashcards" element={<CardList />} /> */}
      <Route path="addrecipe" element={<RecipeForm />} />
      {/* <Route path="addflashcard" element={<CardForm />} /> */}
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
