import React from 'react';
import If from './If';

export default props => {
    return (
        <div>  
            <h2>O nume  ro é {props.numero}</h2>
            <If teste={props.numero%2 == 0}>
                <span>Par</span>
            </If>
            <If teste={props.numero%2 == 1}>
                <span>Impar</span>
            </If>
            
        </div>
    )
}