import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import landingImg from '../images/food-wallpaper-20100313235930-scaled.jpg';


const Landing_page = () => {
    const navigate = useNavigate();

    const handleClick = e => {
        e.preventDefault()
        navigate('/search')
    }

    return (
        <div className='landing-page'>
            <img alt='' id='landing-page-img' src={landingImg}></img>
            <section id='welcome'>
                <h1 id='landing-page-header'>Foodie Fun</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button id='landing-button' onClick={handleClick}>Start</button>
            </section>
        </div>
    )
}

export default Landing_page;