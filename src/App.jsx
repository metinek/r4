import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';

import Home from './Home.jsx'
import Dodawanie from './Dodawanie.jsx'
import Nawigacja from './Nawigacja.jsx'

let uczniowie = [
  {id:1, imie: "Jakub", klasa:"4M"},
  {id:2, imie: "Krzysiek", klasa:"1P"},
  {id:3, imie: "Marian", klasa:"2F"}
];


function App() {

  function dodajUcznia() {
    let id = uczniowie.length+1;
    let imie = document.getElementById('imie').value;
    let klasa = document.getElementById('klasa').value;

    let o = {id: id, imie:imie, klasa:klasa};

    uczniowie.push(o);

    document.getElementById('imie').value='';
    document.getElementById('klasa').value='';
  }

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nawigacja/>}>
            <Route index element={<Home dane={uczniowie}/>}/>
            <Route path='dodawanie' element={<Dodawanie f={()=>dodajUcznia()}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>





    </div>
  );
}

export default App;
