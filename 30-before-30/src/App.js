import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import LoginForm from "./Components/LoginPage";
import SignupForm from "./Components/SignupPage";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={LoginForm}/> 
      <Route path="/signup" component={SignupForm}/>
    </div>
  );
}

export default App;
