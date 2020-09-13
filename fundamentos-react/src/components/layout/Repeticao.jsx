import React from 'react';
import produtos from '../../data/Produtos';

export default props => {

    //SEMPRE QUE USAR REPETIÇAO USE A CHAVE( KEY );
    function getProdutosListItem() {
        return produtos.map( prod => {
            return (
                //SEMPRE QUE USAR REPETIÇAO USE A CHAVE( KEY );
                <li key={prod.id}> 
                    {prod.id} - {prod.name} - {prod.preco}
                </li>
            )
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}