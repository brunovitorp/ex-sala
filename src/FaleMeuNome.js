import React from 'react';

function FaleMeuNome(props){
    return (
        <div>
            <p>Fala ai {props.nome}, tranquilo? Estou completando {props.idade} anos</p>
        </div>
    )
}

export default FaleMeuNome;