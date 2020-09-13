import React from 'react';
import './App.css';

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Condicional from './components/Condicional';

import Card from './components/layout/Card';
import Repeticao from './components/layout/Repeticao';

export default props => (
    <div className="App">

        <Card titulo="#06 - Componente Condicional-v2">
            <Condicional numero={10}/>
        </Card>


        <Card titulo="#05 - Componente Condicional-v1">
            <Condicional numero={11}/>
        </Card>

        <Card titulo="#04 - Componente Repetição">
            <Repeticao/>
        </Card>

        <Card titulo="#03 - Componente Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Component Com Paramentro">
            <ComParametro 
            titulo="Esse é o titulos"
            subtitulo="Esse é o subtitulo"/>
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro/>
        </Card>

    </div>

)