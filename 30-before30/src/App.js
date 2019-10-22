import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import AppRouter from './Components/AppRouter';

function App() {
   return (
      <div className='App'>
         <h1>30 before 30</h1>
         <div className='container'>
            <NavBar />
            <AppRouter />
         </div>
      </div>
   );
}

export default App;
