import React from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import './App.css';
import { Home } from './pages/Home';
import User from './pages/User';
import { GithubProvider } from './context/GithubContext';
import 'bootstrap/dist/css/bootstrap.min.css'
// import paginationFactory from 'react-bootstrap-table2-paginator'
// import filterFactory, {textFilter} from 'react-bootstrap-table2-filter'
// import ToolkitProvider from 'react-bootstrap-table2-toolkit'

const App = () => {
  return (
    
    <GithubProvider>
    <BrowserRouter>
     <div className="App">
      <header className="App-header">
      <Routes>
         <Route path='/' element={<Home />} />  
          <Route path='/users/:login' element={<User />} /> 
      </Routes>
      </header>
    </div>
    
    </BrowserRouter>
    </GithubProvider>
  );
}


export default App;
