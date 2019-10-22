import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import LoginForm from "./Components/LoginPage";
import SignupForm from "./Components/SignupPage";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="App">
      <Route path="/Home" component={HomePage}/>
      <Route path="/login" component={LoginForm}/> 
      <Route path="/signup" component={SignupForm}/>
    </div>
  );
}

export default App;
