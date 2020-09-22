import React from 'react';
import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Condicional from './components/basicos/Condicional';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contator';

import Card from './components/layout/Card';
import Repeticao from './components/layout/Repeticao';

export default props => (
    <div className="App" >
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card>
                <img src="/img/sss.jpg" alt=""/>
            </Card>

            <Card titulo="#09 - Contador" color=" #abfd7b">
                <Contador passo={10} valor={5}></Contador>
            </Card>

            <Card titulo="#08 - Input" color=" #bf5b7b">
                <Input></Input>
            </Card>

            <Card titulo="#07 - Comunicação Indireta" color=" #ca3a0b">
                <Super></Super>
            </Card>

            <Card titulo="#06 - Comunicação Direta" color=" #be9b7b">
                <Pai sobrenome="Freitas"></Pai>
            </Card>

            <Card titulo="#05 - Componente Condicional-v1" color=" #be9b7b">
                <Condicional numero={11} />
            </Card>

            <Card titulo="#04 - Componente Repetição" color=" #d0e1f9">
                <Repeticao />
            </Card>

            <Card titulo="#03 - Componente Com Filhos" color=" #feb2a8">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#02 - Component Com Paramentro" color="#1e1f26">
                <ComParametro
                    titulo="Esse é o titulos"
                    subtitulo="Esse é o subtitulo" />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#96ceb4">
                <Primeiro />
            </Card>

        </div>



    </div>

)