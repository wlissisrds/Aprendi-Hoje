import React from 'react';

export default props => {
    return (
        <div>
            <label for="passoInput">Passo: </label>
            <input 
            type="number" 
            name="" 
            id="passoInput"
            value={props.passo}
            onChange={(e) => props.onPassoChange(+e.target.value)} />
        </div>
    )
}