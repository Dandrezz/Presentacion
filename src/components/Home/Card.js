import React from 'react';
import './Card.css';

const Card = ({name,degree, image}) => {
    return (
        <div class="card">
            <img src={image} alt="Avatar" style={{ width: "100%" }} />
            <div class="container">
                <h4><b>{name}</b></h4>
                <p>{degree}</p>
            </div>
        </div>
    )
}

export default Card;
