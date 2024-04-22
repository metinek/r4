import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import './Nawigacja.css'

function Nawigacja() {
  return (
    <>
        <nav>
            <Link to='/'><button>Home</button></Link>
            <Link to='/dodawanie'><button>Dodawanie</button></Link>
        </nav>
        <Outlet/>
    </>

  );
}

export default Nawigacja;
