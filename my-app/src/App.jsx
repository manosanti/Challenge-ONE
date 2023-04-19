import './App.css'
import styled from 'styled-components'
import Logo from '../src/img/AluraLogo.svg'
import NotFoundText from '../src/img/NotFoundText.svg'
import CautionIcon from '../src/img/Caution.svg'
import CryptoJS from 'crypto-js'
import { useState } from 'react'

function App() {
  const [texto, setTexto] = useState("");
  const [textoCriptografado, setTextoCriptografado] = useState("");
  const [imagemExibida, setImagemExibida] = useState(true);
  const [textoExibido, setTextoExibido] = useState(true);

  const handleCriptografar = () => {
    const textoCript = CryptoJS.AES.encrypt(texto, "chave secreta").toString()
    setTextoCriptografado(textoCript)
  }

  const handleDescriptografar = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(textoCriptografado, "chave secreta")
      const textoDescriptografado = bytes.toString(CryptoJS.enc.Utf8)
      setTextoCriptografado(textoDescriptografado)
    } catch (error) {
      console.log(error)
    }
  }

  const handleBotaoClicado = () => {
    setImagemExibida(false);
    setTextoExibido(false);
  }
    
  const handleCriptografarEClicado = () => {
    handleCriptografar()
    handleBotaoClicado()
  }
  
  const handleDescriptografarEClicado = () => {
    handleDescriptografar()
    handleBotaoClicado()
  }

  return (
    <Container>
      <img src={Logo} alt='Alura Logo' style={{position: 'fixed'}} />

      <TypeText>
        <textarea value={texto} onChange={(e) => setTexto(e.target.value)} placeholder='Digite aqui o texto'></textarea>

        <Buttons>
          <div>
            <img src={CautionIcon} alt='' />
            <p>Apenas letras minúsculas e sem acento.</p>
          </div>
          <div>
            <button onClick={handleCriptografarEClicado} className='colorButton'>Criptografar</button>
            <button onClick={handleDescriptografarEClicado} className='notColorButton'>Descriptografar</button>
          </div>
        </Buttons>
      </TypeText>

      <ShowText>
        <div>
          {imagemExibida &&
          <img src={NotFoundText} alt='' />}

          <h1 className='textoCriptografado'>{textoCriptografado}</h1>
          
          {textoExibido &&
          <h1>Nenhuma mensagem encontrada</h1>}
          {textoExibido &&
          <p>Digite um texto que você deseja<br></br>
            criptografar ou descriptografar.</p>}
        </div>
      </ShowText>
    </Container>
  )
}

export default App

const Container = styled.div`
    padding: 2% 15%;
    height: 100vh;
    justify-content: space-between;
    display: flex;
`

const ShowText = styled.div`
    float: right;
    background-color: white;
    width: 400px;
    height: 100%;
    border-radius: 25px;
    display: grid;
    padding: 5% 0;
    text-align: center;
    margin-left: 6%;

    img {
    margin: 0 auto;
    margin-bottom: 30px;
    }

    h1 {
      color: #343A40;
      margin-bottom: 10px;
    }

    p {
      color: #495057;
      font-weight: 500;
    }

    div {
      margin: auto 0;
    }
`

const TypeText = styled.div`
    padding-left: 10%;

    textarea {
      padding: 2%;
      border: none;
      border-radius: 15px;
      resize: none;
      background-color: #d8dfe83d;
      top: 10%;
      font-weight: 600;
      color: #0A3871;
      font-size: 30px;
      position: relative;
      font-weight: 400;
      width: 700px;
      height: 70%;
    }
    
    textarea:focus {
      color: #0A3871;
      outline: none;
      border: 2px solid #0A3871;
    }
`

const Buttons = styled.div`
    position: absolute;
    bottom: 10%;

    div {
      padding-bottom: 10px;
      display: flex;
      
      p {
        font-size: 15px;
        color: #495057;
        margin-left: 10px;
      }
    }
`
