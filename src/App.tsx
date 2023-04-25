import {Home} from './pages/Home'
import {Pokedex} from './pages/Pokedex'
import {Pokemon} from './pages/Pokemon'
import { Routes, Route, BrowserRouter } from 'react-router-dom';


export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pokedex" element={<Pokedex/>} />
          <Route path="/pokedex/:name" element={<Pokemon/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}