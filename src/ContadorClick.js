// Importando a biblioteca React
import React from 'react';

// Importando a classe 'Component' da biblioteca React
import { Component } from "react"; //componentes personalizados

// Definindo um componente de classe chamado 'ContadorClick'
class ContadorClick extends Component {

    // Construtor da classe
    constructor(props){
        super(props); // Chamando o construtor da classe pai
        this.state = { // Inicializando o estado do componente
            contador: 0 // Definindo a propriedade 'contador' com o valor inicial de 0
        }
    }

    // Método para incrementar o contador
    contar = () => {
        this.setState({ // Atualizando o estado do componente
            contador: this.state.contador + 1 // Incrementando o valor do contador
        });
    }

    // Método de renderização
    render(){
        return (
            <div>
                <h1>Contador: {this.state.contador}</h1> {/* Exibindo o valor atual do contador */}
                <button onClick={this.contar}>Click</button> {/* Botão que chama a função 'contar' quando clicado */}
            </div>
        );
    }
}

export default ContadorClick; // Exportando o componente 'ContadorClick'
