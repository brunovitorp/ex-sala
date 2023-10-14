import React, { useState } from 'react';

const ContadorClick = () => {
    // Usando o hook 'useState' para criar uma variável de estado 'contador' e uma função 'setContador'
    const [contador, setContador] = useState(0);

    // Função para incrementar o contador
    const contar = () => {
        setContador(contador + 1);
    }

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={contar}>Click</button>
        </div>
    );
}

export default ContadorClick;
