import React from "react";
import NavBar from "./components/navbar/NavBar";
import LoginSignupContainer from "./components/LoginSignupContainer/LoginSignupContainer";
// import { Routes, Route } from 'react-router-dom';
// import Home from "./components/Home";
// import RecipeForm from "./components/recipes/RecipeForm";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <LoginSignupContainer />
    </div>
  )

}

export default App;
