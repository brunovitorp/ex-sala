import './App.css';
import Hello from './Hello'; 
import Frase from './Frase';
import FaleMeuNome from './FaleMeuNome';
import Saudacao from './Saudacao';
import Welcome from './Welcome';
import ContadorClick from './ContadorClick';
import NContadorClick from './NContadorClick';

function App() {
  
  return(
    <>
    <Saudacao nome = "Bruno" adjetivo = "excelente" />
    <Hello />
    <Frase />
    <FaleMeuNome nome ="Bruno" idade="32"/>
    <FaleMeuNome nome ="João"/>
    <Welcome name ="Bem vindo!"></Welcome>
    <ContadorClick />
    <NContadorClick />
  
    
    </>
  )
}

export default App;
