import React from 'react';
import {Home} from './pages/Home'
import {Pokedex} from './pages/Pokedex'
import {Moves} from './pages/Moves'
import {Pokemon} from './pages/Pokemon'
import { Routes, Route, BrowserRouter } from 'react-router-dom';


export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pokedex" element={<Pokedex/>} />
          <Route path="/moves" element={<Moves/>} />
          <Route path="/pokedex/:name" element={<Pokemon/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}