import React from 'react';
import '../App.css';
import FoodModal from './Modal';

const Recipes = ({title, image, calories, ingredients}) => {
    
    return (
        <div className='recipe'>
            <h1>{title}</h1>
            <img id='recipe-img' src={image} alt='' />
            <FoodModal 
                title={title} 
                image={image} 
                calories={calories} 
                ingredients={ingredients}
            />  
        </div>
    )
}

export default Recipes;