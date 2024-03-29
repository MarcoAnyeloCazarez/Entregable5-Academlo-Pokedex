import './App.css';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Pokedex from './components/Pokedex';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      < HashRouter >
        < Routes >
        
          <Route path='/' element={<Login/>} />
          
          <Route element={< ProtectedRoutes />}>
            <Route path='/Pokedex' element={<Pokedex/>} />
          </Route>
        </ Routes >
      </ HashRouter >
    </div>
  );
}

export default App;
