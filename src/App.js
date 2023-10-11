import './App.css';
import Hello from './Hello'; 
import Frase from './Frase';
import FaleMeuNome from './FaleMeuNome';
import Saudacao from './Saudacao';

function App() {
  
  return(
    <>
    <Saudacao nome = "Bruno" adjetivo = "excelente" />
    <Hello />
    <Frase />
    <FaleMeuNome nome ="Bruno" idade="32"/>
    <FaleMeuNome nome ="João"/>
    
    </>
  )
}

export default App;
