import React from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import './App.css';
import { Home } from './pages/Home';
import { GithubProvider } from './context/GithubContext';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    
    <GithubProvider>
    <BrowserRouter>
     <div className="App">
      <header className="App-header">
      <Routes>
         <Route path='/' element={<Home />} />  
      </Routes>
      </header>
    </div>
    
    </BrowserRouter>
    </GithubProvider>
  );
}


export default App;
