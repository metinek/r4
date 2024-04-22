import React from 'react';


function Dodawanie(props) {
    return (
        <div className="Dodawanie">
          <header>
            <h1>Dodawanie</h1>
          </header>

          <p>imie: <input type="text" id="imie"/></p>
          <p>klasa: <input type="text" id="klasa"/></p>
          <button onClick={props.f}>Dodaj</button>
        </div>
      );
}

export default Dodawanie;
