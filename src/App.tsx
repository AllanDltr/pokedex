import React from 'react';
import {Home} from './pages/Home'
import {Pokedex} from './pages/Pokedex'
import {Moves} from './pages/Moves'
import {Abilities} from './pages/Abilities'
import {Items} from './pages/Items'
import {Locations} from './pages/Locations'
import {Types} from './pages/Types'
import { Routes, Route, BrowserRouter } from 'react-router-dom';


export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pokedex" element={<Pokedex/>} />
          <Route path="/moves" element={<Moves/>} />
          <Route path="/abilities" element={<Abilities/>} />
          <Route path="/items" element={<Items/>} />
          <Route path="/locations" element={<Locations/>} />
          <Route path="/types" element={<Types/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}