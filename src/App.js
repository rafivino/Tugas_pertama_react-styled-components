import './App.css';
import styled, { css } from 'styled-components';

  const KataRataTengah = css `
    text-align: ${props => props.KataRataTengah ? `left` : `center`};
  `;

  const Judul = styled.h1`
    font-size: 55px;
    color: purple;
    ${KataRataTengah}
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
    margin: 0 auto;
    cursor: pointer;
    transition: background-color 0.3s ease;

    // penambahan efek pseudo-classes pada tombol
    &:hover {
    background-color: black;
    color: white;
    border-color: black
    }
  `;

  const TombolExtending = styled(Tombol)`
    border: 1px solid green;
    background: green;
  `;

  const ContohSatuH = styled.h2`
    color: pink;
    font-size: 25px;
    ${KataRataTengah}
  `;

  const ContohDuaH = styled.h3`
    ${KataRataTengah}
    color: red;
    font-size: 35px;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
      color: orange;
      font-size: 50px
    }
  `;

  const ContohTigaH = styled.h4`
    ${KataRataTengah}
    color: aquamarine;
    font-size: 40px;
    cursor: pointer;

    $:hover{
      text-decoration: underline;
      color: blue;
      font-size: 55px;
    }
  `

  const ContohEmpat = styled.h5`
  ${KataRataTengah}
  font-size: 40px;
  color: cream;
  `

function App() {
  return (
  <>
  <Judul>INI TUGAS REACT KEDUA & LATIHAN GIT BRANCH BARU</Judul>
  <IniSection>Inilah Contoh Section</IniSection><br/>
  <Tombol>Lanjut</Tombol><br/>
  <Tombol kedua>Selanjutnya</Tombol><br/>
  <TombolExtending kedua>Contoh</TombolExtending>
  <ContohSatuH>INI CONTOH 1</ContohSatuH>
  <ContohDuaH>INI CONTOH 2</ContohDuaH>
  <ContohTigaH>INI CONTOH 3 & LATIHAN GITHUB BRANCH</ContohTigaH>
  <ContohEmpat>INI CONTOH 4</ContohEmpat>
  
  </>
  );
}

export default App;
