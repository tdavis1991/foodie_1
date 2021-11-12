import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import LandingPage from './pages/LandingPage';


const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route path='/search' element={<SearchPage/>} />
      </Routes>
    </div>
  )

}

export default App;
