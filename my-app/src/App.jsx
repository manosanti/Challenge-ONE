import './App.css'
import styled from 'styled-components'
import Logo from '../src/img/AluraLogo.svg'
import NotFoundText from '../src/img/NotFoundText.svg'
import CautionIcon from '../src/img/Caution.svg'
import { useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

function App() {
  const [texto, setTexto] = useState("");
  const [textoCriptografado, setTextoCriptografado] = useState("");
  const [imagemExibida, setImagemExibida] = useState(true);
  const [textoExibido, setTextoExibido] = useState(true);
  const [exibirPopup, setExibirPopup] = useState(false);
  const [textoNãoExibido, setTextoNãoExibido] = useState(false);

  const handleCriptografar = () => {
    const chave = 3
    let textoCript = ("")
    for (let i = 0; i < texto.length; i++) {
      let letra = texto.charAt(i)
      if (letra.match(/[a-z]/i)) {
        let codigo = texto.charCodeAt(i)
        if (codigo >= 65 && codigo <= 90) {
          letra = String.fromCharCode(((codigo - 65 + chave) % 26) + 65);
        } else if (codigo >= 97 && codigo <= 122) {
          letra = String.fromCharCode(((codigo - 97 + chave) % 26) + 97);
        }
      }
      textoCript += letra;
    }
    setTextoCriptografado(textoCript);
  }

  const handleDescriptografar = () => {
  const chave = 3
  let textoDescriptografado = ("")
  for (let i = 0; i < textoCriptografado.length; i++) {
    let letra = textoCriptografado.charAt(i)
    if (letra.match(/[a-z]/i)) {
      let codigo = textoCriptografado.charCodeAt(i)
      if (codigo >= 65 && codigo <= 90) {
        letra = String.fromCharCode(((codigo - 65 - chave + 26) % 26) + 65)
      } else if (codigo >= 97 && codigo <= 122) {
        letra = String.fromCharCode(((codigo - 97 - chave + 26) % 26) + 97)
      }
    }
    textoDescriptografado += letra
  }
  setTextoCriptografado(textoDescriptografado)
}

  const handleCopiarTexto = () => {
    setExibirPopup(true)
    setTimeout(() => {
      setExibirPopup(false)
    }, 2000)
  }

  const handleBotaoClicado = () => {
    setImagemExibida(false)
    setTextoExibido(false)
  }
  
  const mostrarBotaoCopiar = () => {
    setTextoNãoExibido(true)
  }

  const handleCriptografarEClicado = () => {
    handleCriptografar()
    handleBotaoClicado()
    mostrarBotaoCopiar()
  }
  
  const handleDescriptografarEClicado = () => {
    handleDescriptografar()
    handleBotaoClicado()
  }
  
  const copiarTextoPopUp = () => {
    handleCopiarTexto()
    copiarTexto()
  }

  function copiarTexto() {
    navigator.clipboard.writeText(texto)
  }

  return (
    <Container> 
      <a href="/" onClick={() => { 
        window.location.reload(); 
        window.location.href = "/"; 
        }}>
        <img src={Logo} alt="Alura Logo" style={{ position: 'fixed' }} />
      </a>

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
            <h1>Nenhuma mensagem encontrada</h1>
          }
          {textoExibido &&
            <p>Digite um texto que você deseja<br></br>
            criptografar ou descriptografar.</p>
          }
          {textoNãoExibido &&
          <button className='copyButton' onClick={copiarTextoPopUp}>Copiar</button>
          }
          {exibirPopup ? (
          <div>
            <h3>*Texto copiado!*</h3>
          </div>
          ) : null}
        </div>
      </ShowText>
      <Footer>
        <p>Desenvolvido por: <b>Lucas Santiago</b>
          <a href="https://github.com/manosanti" target='_blank'> <BsGithub /></a>
          <a href="https://www.linkedin.com/in/santiagolucas1/" target='_blank'> <FaLinkedin /></a>
        </p>
      </Footer>
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
    overflow-y: hidden;
    overflow-x: hidden;

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
      margin-bottom: 40%;
    }

    div {
      margin: auto 0;

      h3 {
      color: #2b9348;
      font-weight: 500;
      }
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

const Footer = styled.div`
    flex-direction: row;
    position: fixed;
    bottom: 0%;
    left: 0%;
    background-color: #d8dfe83d;
    width: 100%;
    height: 20px;

    p {
      text-align: center;

      a {
        text-decoration: none;
        color: #495057;
      }

      a:hover {
          color: rgb(52, 58, 64);
        }
    }
`
