import './App.css'
import styled from 'styled-components'
import Logo from '../public/img/AluraLogo.svg'
import NotFoundText from '../public/img/NotFoundText.svg'
import CautionIcon from '../public/img/Caution.svg'

function App() {
  return (
    <Container>
      <img src={Logo} alt='Alura Logo' style={{position: 'fixed'}} />

      <TypeText>
        <h1>Digite seu texto:</h1>

        <Buttons>
          <div>
            <img src={CautionIcon} alt='' />
            <p>Apenas letras minúsculas e sem acento.</p>
          </div>
          <div>
            <button className='colorButton'>Criptografar</button>
            <button className='notColorButton'>Descriptografar</button>
          </div>
        </Buttons>
      </TypeText>

      <ShowText>
        <img src={NotFoundText} alt='' />
        <h1>Nenhuma mensagem encontrada</h1>
        <p>Digite um texto que você deseja<br></br>
          criptografar ou descriptografar.</p>
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
    }

    h1 {
      color: #343A40;
    }

    p {
      color: #495057;
      font-weight: 500;
    }
`

const TypeText = styled.div`
    padding-left: 10%;

    h1 {
      top: 10%;
      position: relative;
      font-weight: 400;
      color: #0A3871;
    }
`

const Buttons = styled.div`
    position: absolute;
    bottom: 10%;

    div {
      margin-bottom: 10px;
      display: flex;
      
      p {
        font-size: 15px;
        color: #495057;
        margin-left: 10px;
      }
    }
`
