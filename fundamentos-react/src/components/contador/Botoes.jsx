import React from 'react';

export default props => {
    return (
        <div>
            <button onClick={props.onInc}>Incrementa</button>
            <button onClick={props.onDec}>Decrementa</button>
        </div>
    )
}