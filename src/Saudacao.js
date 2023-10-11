import React from 'react';

function Saudacao(props){
    return(
        <div>
            <p>Olá {props.nome}! Tudo bem? Gostaria que você tivesse uma {props.adjetivo} dia de aula!</p>
        </div>

    )
}

export default Saudacao;