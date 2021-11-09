import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Search_page from './pages/Search_page';
import Landing_page from './pages/Landing_page';


const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Landing_page/>} />
        <Route path='/search' element={<Search_page/>} />
      </Routes>
    </div>
  )

}

export default App;
