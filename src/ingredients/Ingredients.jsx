import React from 'react';
import S from './Ingredients.module.css'

function Ingredients(ingredients) {
    return (
        <ul className={S.ingredients}>
            {ingredients.ingredients.map((item, i) =>
                <li key={i}>{item}</li>
            )}
        </ul>
    );
}
export default Ingredients;