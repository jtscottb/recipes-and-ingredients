import React from "react";
import NavBar from "./components/navbar/NavBar";
import LoginSignupContainer from "./components/LoginSignupContainer/LoginSignupContainer";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import './App.css';
import NewRecipe from "./components/recipes/NewRecipe";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/addrecipe" element={< NewRecipe />} />
      <Route path="/recipes" element={<Home />} />
      <Route path="/" element={<LoginSignupContainer />} />
      </Routes>
    </div>
  )

}

export default App;
