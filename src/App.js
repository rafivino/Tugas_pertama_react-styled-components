import './App.css';
import styled from 'styled-components';

  const Judul = styled.h1`
    text-align: center;
    color: purple;
    font-size: 30px
  `;

  const IniSection = styled.section`
    padding: 40px;
    background: aquamarine;
    text-align: center;
  `;

  const Tombol = styled.button`
    width: 150px;
    height: 40px;
    color: ${props => props.kedua ? `white` : `blue`};
    border: 1px solid blue; 
    background: ${props => props.kedua ? `blue` : `white`};
    line-height: 40px;
    display: block;
    margin: 0 auto
  `;

  const TombolExtending = styled(Tombol)`
    border: 1px solid green;
    background: green;
  `;



function App() {
  return (
  <>
  <Judul>INI TUGAS REACT PERTAMA</Judul>
  <IniSection>Inilah Contoh Section</IniSection><br/>
  <Tombol>Lanjut</Tombol><br/>
  <Tombol kedua>Selanjutnya</Tombol><br/>
  <TombolExtending kedua>Contoh</TombolExtending>
  
  </>
  );
}

export default App;
