import './App.css'
import Titulo from "./components/Titulo.jsx";
import Paragrafo from "./components/Paragrafo.jsx";
import Imagem from "./components/Imagem.jsx";
import Botao from './components/Botao.jsx';
import Usuario from './components/Usuario.jsx';
import Produto from './components/Produto.jsx';
import Saudacao from './components/Saudacao.jsx';
import CardSimples from './components/CardSimples.jsx';
import Rodape from './components/Rodape.jsx';
import Status from './components/Status.jsx';

import hero from './assets/hero.png'

function App() {
  return(
  <>
    <Titulo texto="Equipe 02" />
    <Paragrafo texto="Aprendendo React JS" />
    <Imagem src= {hero} alt="Imagem do hero da pasta assets" />
    <Botao label="Clique aqui" />
    <Usuario nome="João" idade="20" />
    <Produto nome="Desinfetante" preco="9.99" />
    <Saudacao nome="Jailson" />
    <CardSimples titulo="Card simples" descricao="Essa é a descrição do card simples." />
    <Rodape ano="2026" />
    <Status mensagem="Essa é a mensagem dentro da tag <span>" />
  </>
  )
}

export default App