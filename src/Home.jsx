import React from 'react';



function Uczen(props) {
  return (
    <div className='Uczen'>
      <p>{props.u.id}. {props.u.imie} {props.u.klasa}</p>
    </div>
  );
}

function Home(props) {
    return (
        <div className="Dodawanie">
          <header>
            <h1>Home</h1>
          </header>

          {props.dane.map( (e) => ( <Uczen key={props.id} u={e} />) )}
        </div>
      );
}

export default Home;
