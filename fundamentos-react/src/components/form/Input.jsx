import React, {useState} from 'react';

export default props => {

    let [nome, setNome] = useState('Wlissis');

    return (
        <div>
            <h3>Nome: {nome}</h3>
            <input type="text" value={nome}
            onChange={event => setNome(event.target.value)} />
        </div>
    )
}