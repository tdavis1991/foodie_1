import '../App.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Recipes from '../components/Recipes';
import { APP_ID, API_KEY } from '../config';

const SearchPage = () => {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const reqUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`

  const getRecipes = () => {
    axios.get(reqUrl)
      .then(res => {
        console.log(res)
        setRecipes(res.data.hits)
      }).catch(err => {
        console.log(err)
      }) 
  }

  useEffect(() => {
    getRecipes()
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  return (
    <div>
      <form className='search-form' onSubmit={getSearch}>
        <input
         className='search-bar' 
         type='text' 
         value={search}
         onChange={updateSearch}
         placeholder='Search'
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <div className='recipe-container'>
        {recipes.map(recipe => (
          <Recipes 
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchPage;